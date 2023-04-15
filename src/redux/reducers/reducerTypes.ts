type todoStateObjType = {
  text: string;
  completed: boolean;
  id: number;
}

export type todosStateType = Array<todoStateObjType>

export interface actionInterface {
  type: string;
  text: string;
  id: number;
  filter: string;
}