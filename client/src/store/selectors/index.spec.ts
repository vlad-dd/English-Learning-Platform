import { configureStore } from '@reduxjs/toolkit';
import * as selectors from '.';
import * as breadcrumbSlice from '../reducers/bread-crumb'
import * as carouselSlice from '../reducers/carousel'
import * as registrationSlice from '../reducers/registration'
import root from '../reducers/root';
import * as tenseSlice from '../reducers/tenses'

function createTestStore() {
    const store = configureStore({
        reducer: root,
    })
    return store;
  }

describe('Selectors', () => {

    const store = createTestStore()
    
    it('tensesBCState should return correct data', () => {
        const mockedPath = ['Mock'];
        store.dispatch(breadcrumbSlice.breadcrumbPath(mockedPath));
        expect(selectors.tensesBCState(store.getState()).path).toEqual(mockedPath);
    });

    it('carouselIndexAndPoints should return correct data', () => {
        const mockedPath = { actualSentenceIndex: 10, points: 15 };
        store.dispatch(carouselSlice.setActualSentenceIndex(mockedPath.actualSentenceIndex));
        expect(selectors.carouselIndexAndPoints(store.getState()).actualSentenceIndex).toEqual(mockedPath.actualSentenceIndex);
        store.dispatch(carouselSlice.setEarnedPoints(mockedPath.points));
        expect(selectors.carouselIndexAndPoints(store.getState()).points).toEqual(mockedPath.points);
    });

    it('tenseConfiguration should return correct data', () => {
        const tenseMock = [{ id: 1 }];
        store.dispatch(tenseSlice.setTenseConfiguration(tenseMock));
        expect(selectors.tenseConfiguration(store.getState())).toEqual(tenseMock)
    });

    it('registeredUser should return correct data', () => {
        const mockedUser = [{ id: 1, email: 'mock@gmail.com', password: 'mockpassword' }];
        store.dispatch(registrationSlice.register(mockedUser));
        expect(selectors.registeredUser(store.getState())).toEqual(mockedUser)
    });

});