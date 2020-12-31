export const apiGetReq = (url: string) =>
  fetch(url).then((res: Response) => res.json());
