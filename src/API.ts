/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMemoInput = {
  id?: string | null,
  title: string,
  body?: string | null,
  owner?: string | null,
  createdAt?: string | null,
};

export type ModelMemoConditionInput = {
  title?: ModelStringInput | null,
  body?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelMemoConditionInput | null > | null,
  or?: Array< ModelMemoConditionInput | null > | null,
  not?: ModelMemoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Memo = {
  __typename: "Memo",
  id?: string,
  title?: string,
  body?: string | null,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt?: string,
};

export type UpdateMemoInput = {
  id: string,
  title?: string | null,
  body?: string | null,
  owner?: string | null,
  createdAt?: string | null,
};

export type DeleteMemoInput = {
  id?: string | null,
};

export type ModelMemoFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  body?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelMemoFilterInput | null > | null,
  or?: Array< ModelMemoFilterInput | null > | null,
  not?: ModelMemoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelMemoConnection = {
  __typename: "ModelMemoConnection",
  items?:  Array<Memo | null > | null,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateMemoMutationVariables = {
  input?: CreateMemoInput,
  condition?: ModelMemoConditionInput | null,
};

export type CreateMemoMutation = {
  createMemo?:  {
    __typename: "Memo",
    id: string,
    title: string,
    body?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateMemoMutationVariables = {
  input?: UpdateMemoInput,
  condition?: ModelMemoConditionInput | null,
};

export type UpdateMemoMutation = {
  updateMemo?:  {
    __typename: "Memo",
    id: string,
    title: string,
    body?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteMemoMutationVariables = {
  input?: DeleteMemoInput,
  condition?: ModelMemoConditionInput | null,
};

export type DeleteMemoMutation = {
  deleteMemo?:  {
    __typename: "Memo",
    id: string,
    title: string,
    body?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type GetMemoQueryVariables = {
  id?: string,
};

export type GetMemoQuery = {
  getMemo?:  {
    __typename: "Memo",
    id: string,
    title: string,
    body?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type ListMemosQueryVariables = {
  filter?: ModelMemoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMemosQuery = {
  listMemos?:  {
    __typename: "ModelMemoConnection",
    items?:  Array< {
      __typename: "Memo",
      id: string,
      title: string,
      body?: string | null,
      owner?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListMemosSortedbyCreatedAtQueryVariables = {
  owner?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMemoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMemosSortedbyCreatedAtQuery = {
  listMemosSortedbyCreatedAt?:  {
    __typename: "ModelMemoConnection",
    items?:  Array< {
      __typename: "Memo",
      id: string,
      title: string,
      body?: string | null,
      owner?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMemoSubscription = {
  onCreateMemo?:  {
    __typename: "Memo",
    id: string,
    title: string,
    body?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateMemoSubscription = {
  onUpdateMemo?:  {
    __typename: "Memo",
    id: string,
    title: string,
    body?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteMemoSubscription = {
  onDeleteMemo?:  {
    __typename: "Memo",
    id: string,
    title: string,
    body?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};
