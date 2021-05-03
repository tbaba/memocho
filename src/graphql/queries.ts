/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMemo = /* GraphQL */ `
  query GetMemo($id: ID!) {
    getMemo(id: $id) {
      id
      title
      body
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listMemos = /* GraphQL */ `
  query ListMemos(
    $filter: ModelMemoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMemos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        body
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listMemosSortedbyCreatedAt = /* GraphQL */ `
  query ListMemosSortedbyCreatedAt(
    $owner: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMemoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMemosSortedbyCreatedAt(
      owner: $owner
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        body
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
