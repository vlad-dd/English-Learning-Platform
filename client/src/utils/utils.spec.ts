import { size } from 'lodash';
import {
    uid,
    focusNodeAfterMounting,
    generateNicknameAvatars,
} from './utils'

describe('application utils', () => {
    it('uid shoud work correctly', () => {
        const checkIfIDContainsOnlyCorrectSymbols = (id: string) => /^[a-zA-Z0-9]+$/.test(id);
        const id = uid(10);
        expect(size(id)).toBe(10);
        expect(checkIfIDContainsOnlyCorrectSymbols(id)).toBe(true);
    });

    it('focusNodeAfterMounting shoud work correctly', () => {
        const mockElement: any = { focus: jest.fn() };
        const mockGetElementById = jest.spyOn(document, "getElementById").mockReturnValue(mockElement);
        focusNodeAfterMounting("my-element");
        expect(mockGetElementById).toHaveBeenCalledWith("my-element");
        expect(mockElement.focus).toHaveBeenCalled();
    });

    it('generateNicknameAvatars shoud work correctly', () => {
        const { children } = generateNicknameAvatars('Test User');
        expect(children).toBe('TU');
    });
});
