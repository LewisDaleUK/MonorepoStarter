export const createActionHelper = (constant) => (payload?: any) => (
  {
    type: constant,
    payload,
  }
);

