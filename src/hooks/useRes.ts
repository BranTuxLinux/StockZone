import { ResponseType } from "./hooks";

export const sendRes = ({ msg, data }: ResponseType): ResponseType => {
  return { msg, data };
};
