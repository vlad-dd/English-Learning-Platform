import { configureStore } from '@reduxjs/toolkit';
import { consoleLogger } from './middlewares';
import root from './reducers/root';

declare global {
    interface Window {
        store: typeof store
    }
}

export const store = configureStore({
    reducer: root,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(consoleLogger),
});

export type State = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch;
export type Store = typeof store;

window.store = store;

export default store;