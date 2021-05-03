export interface MemoInterface {
  id: string;
  title: string;
  body: string;
  owner: string;
  createdAt: string;
}

export type PersistedRow = {
  id: string;
  title: string;
  body: string;
}

export type UnpersistedRow = {
  id: string | null;
  title: string;
  body: string;
}

export type Memo = PersistedRow | UnpersistedRow;
