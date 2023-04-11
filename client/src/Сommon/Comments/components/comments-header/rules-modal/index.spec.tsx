import { render, screen } from "@testing-library/react";
import CommentRulesModal from '.';

describe('CommentRulesModal', () => {
    const setOpen = jest.fn()

    it('should not show content if it is closed', () => {
        render(<CommentRulesModal open={false} setOpen={setOpen} />);
        screen.debug();
    })
})