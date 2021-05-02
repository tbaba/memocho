import React from "react";
import { TitleInputContainer, BodyInputContainer } from "./Input";

export function FormContainer() {
  return (
    <article>
      <header>
        <h1>
          <TitleInputContainer />
        </h1>
      </header>
      <section>
        <BodyInputContainer />
      </section>
    </article>
  );
}
