/* eslint-disable no-console */
import { Store } from '..';
/* eslint-disable  @typescript-eslint/no-explicit-any */
const configureOutput = (action: string, color: string, result: any) => {
  console.log('%c' + action, `color:${color}`, result);
};
/* eslint-disable  @typescript-eslint/no-explicit-any */
const logger: any = (store: Store) => (next: any) => (action: any) => {
    configureOutput('Previous state: ', 'red', store.getState());
    configureOutput('Dispatched action: ', 'pink', action);
    next(action);
    configureOutput('Next state: ', 'green', store.getState());
  };

export default logger;