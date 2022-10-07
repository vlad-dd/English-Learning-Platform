import { configureStore } from "@reduxjs/toolkit";
import root from './reducers/root';

declare global {
    interface Window {
        store: any
    }
}

const logger: any = (store: any) => (next: any) => (action: any) => {
    console.log("%c" + 'previous state: ', 'color: gray' , store.getState())
    console.log("%c" + 'dispatched action: ',  'color: blue', action)
    const result = next(action)
    console.log("%c" + 'next state: ','color: green', store.getState())
    return result
  }

export const store = configureStore({
    reducer: root,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})


export type State = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch;

window.store = store;

export default store;