import { concat } from 'ramda';

export const createSagas = (configs) =>
  configs.filter(config =>
    config.sagas && config.sagas.length !== 0
  ).reduce(
    (accumulator, config) => concat(accumulator, config.sagas),
    [],
  );
  