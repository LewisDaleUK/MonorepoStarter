export const initialiseReduxDevtools = () => process.env.NODE_ENV === 'development' &&
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__();
