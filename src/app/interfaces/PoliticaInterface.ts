export interface RootObject {
  ok: boolean;
  findPolitica: FindPolitica[];
}

export interface FindPolitica {
  _id?: string;
  politica?: string;
  __v: number;
}