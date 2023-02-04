import { configureStore } from '@reduxjs/toolkit';
import * as breadCrumbSlice from '../reducers/bread-crumb'
import root from '../reducers/root';
import { consoleLogger } from ".";

function createTestStore() {
    const store = configureStore({
        reducer: root,
    })
    return store;
}

it('should work correctly', () => {
    const store = createTestStore();
    const mock = ['Mock'];
    const next = jest.fn();
    consoleLogger(store)(next)(breadCrumbSlice.breadcrumbPath(mock));
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(breadCrumbSlice.breadcrumbPath(mock));
});