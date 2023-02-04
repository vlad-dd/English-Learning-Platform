import { configureStore } from '@reduxjs/toolkit';
import * as breadCrumbSlice from './reducers/bread-crumb';
import * as carouselSlice from './reducers/carousel'
import * as registrationSlice from './reducers/registration'
import * as tenseSlice from './reducers/tenses'
import root from './reducers/root';
import { waitFor } from '@testing-library/react';

function createTestStore() {
    const store = configureStore({
        reducer: root,
    })
    return store;
  }

describe('Store', () => {
    const store = createTestStore();

    it("should initialize empty store", () => {
        const { tensesBreadCrumb, carousel, tense, registration } = store.getState();
        expect(Object.keys(store).length).toBe(5);
        expect(tensesBreadCrumb).toBe(breadCrumbSlice.initialState);
        expect(carousel).toBe(carouselSlice.initialState);
        expect(tense).toBe(tenseSlice.initialState);
        expect(registration).toBe(registrationSlice.initialState);
      });

      it('should update state for bread crumb', () => {
        const { tensesBreadCrumb} = store.getState();
        const mockPath = ['Mock', 'BreadCrumb', 'Path'];
        store.dispatch(breadCrumbSlice.breadcrumbPath(mockPath))
        waitFor(() => expect(tensesBreadCrumb.path).toBe(mockPath));
      });

      it('should update state for carousel', () => {
        const { carousel} = store.getState();
        const mockCarouselValues = { actualSentenceIndex: 5, points: 25};
        store.dispatch(carouselSlice.setActualSentenceIndex(mockCarouselValues.actualSentenceIndex))
        waitFor(() => expect(carousel.actualSentenceIndex).toBe(mockCarouselValues.actualSentenceIndex));
        store.dispatch(carouselSlice.setEarnedPoints(mockCarouselValues.points))
        waitFor(() => expect(carousel.points).toBe(mockCarouselValues.points));
      });

      it('should update state for tense', () => {
        const { tense } = store.getState();
        const mockTense = { tenseConfiguration: ['Mock Tense'] };
        store.dispatch(tenseSlice.setTenseConfiguration(mockTense.tenseConfiguration))
        waitFor(() => expect(tense.tenseConfiguration).toBe(mockTense.tenseConfiguration));
      });

      it('should update state for registration', () => {
        const { registration } = store.getState();
        const registrationMock = { user: [{ id: 1, email: 'mock@gmail.com', password: 'mockpassword' }] };
        store.dispatch(registrationSlice.register(registrationMock.user))
        waitFor(() => expect(registration.user).toBe(registrationMock.user));
      });
});