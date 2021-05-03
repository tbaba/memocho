import React, { useEffect, useState } from "react";
import { RecoilRoot, MutableSnapshot } from "recoil";
import Amplify, { Auth } from "aws-amplify";
import { AuthState, CognitoUserInterface, onAuthUIStateChange } from "@aws-amplify/ui-components";
import { AmplifyAuthenticator, AmplifySignUp } from "@aws-amplify/ui-react";
import awsconfigure from './aws-exports';

import { Container } from "./components";
import { editMemoState, getNewId, memosState } from "./modules/memos";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function useApp(): AppProps {
  const [authState, setAuthState] = useState<AuthState | undefined>();
  const [user, setUser] = useState<CognitoUserInterface | undefined>();

  return {
    authState,
    user,
    setAuthState,
    setUser,
  }
}

type AppProps = {
  authState: AuthState | undefined;
  user: CognitoUserInterface | undefined;
  setAuthState: (nextAuthState: AuthState) => void;
  setUser: (authData: CognitoUserInterface) => void;
}

Amplify.configure(awsconfigure);

function App({ authState, user, setAuthState, setUser }: AppProps) {

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState as AuthState);
      setUser(authData as CognitoUserInterface);
    })
  }, []);

  const handleSignOut = () => {
    Auth.signOut();
  }

  return authState === AuthState.SignedIn && user ? (
    <RecoilRoot initializeState={initialize}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Memocho
          </Typography>
          <div onClick={handleSignOut}>
            <IconButton aria-label="display more actions" edge="end" color="inherit">
              <ExitToAppIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Container />
    </RecoilRoot>
  ) : (
    <AmplifyAuthenticator>
      <AmplifySignUp
        slot="sign-up"
        formFields={[
          { type: "username" },
          { type: "password" },
          { type: "email" },
        ]}
      />
    </AmplifyAuthenticator>
  );
}

const initialize = ({ set }: MutableSnapshot) => {
  const initialMemo = {
    id: getNewId(),
    title: "最初のやつ",
    body: "最初のやつ。\n最初のやつやで。",
  };

  set(memosState, [initialMemo]);
  set(editMemoState, initialMemo);
};

export default function() {
  return <App {...useApp()} />;
}
