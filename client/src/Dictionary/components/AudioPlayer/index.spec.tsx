import { render, screen } from '@testing-library/react';
import { withIntlProvider } from '../../../test-utils/hocs';
import AudioPlayer from '.';

jest.mock('../../Hooks/use-audio-player', () => ({
    useAudioPlayerWidget: () => ({ audioPlayers: [<div>Audio 1</div>, <div>Audio 2</div>, <div>Audio 3</div>] })
}));

const AudioPlayerWithProvider = withIntlProvider(AudioPlayer);

const AUDIOS = ["Pronunciation", "Audio 1", "Audio 2", "Audio 3"];

describe('AudioPlayer', () => {
    it('should render AudioPlayer', () => {
        render(<AudioPlayerWithProvider />)
        expect(screen.getByTestId('title-component-id')).toBeInTheDocument();
        AUDIOS.forEach((audio: string) => expect(screen.getByText(audio)).toBeInTheDocument());
    });
});
