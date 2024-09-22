export interface ResponseType {
  msg: string;
  data?: object | unknown;
}

export type ResMsg = Pick<ResponseType, "msg">;
export type ResData = Pick<ResponseType, "data">;
