/* eslint-disable react/jsx-key */
import React from "react";
import { render, screen } from '@testing-library/react';
import AudioPlayer from '.';

jest.mock('../../Hooks/use-audio-player', () => ({
    useAudioPlayer: () => ({ audioPlayers: [<div>Audio 1</div>, <div>Audio 2</div>, <div>Audio 3</div>] })
}))

describe('AudioPlayer', () => {
    it('should render AudioPlayer', () => {
        render(<AudioPlayer />)
        expect(screen.getByTestId('title-component-id')).toBeInTheDocument();
        expect(screen.getByText('Pronunciation')).toBeInTheDocument();
        expect(screen.getByText('Audio 1')).toBeInTheDocument();
        expect(screen.getByText('Audio 2')).toBeInTheDocument();
        expect(screen.getByText('Audio 3')).toBeInTheDocument();
    });
});
