type ResponseType = {
    msg: string;
    data?: object;
  };
  
  type UseResType = [ResponseType, { status?: number }];
  
  export const sendRes = (msg: string, data?: object, status?: number): UseResType => {
    return [{ msg, data }, { status }];
  };
