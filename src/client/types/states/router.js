// @flow

export type Router = {
  match: {
    params: {
      id: number;
    };
  };
  location: {
    pathname: string;
  };
  history: {
    listen: Function;
  };
};
