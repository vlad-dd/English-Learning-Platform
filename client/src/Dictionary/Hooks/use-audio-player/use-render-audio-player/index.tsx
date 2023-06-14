import { IAudioPlayer } from "../../../types";
import { AUDIO_PRONOUNCE, COUNTRIES_FLAGS, COUNTRY_AUDIO_ID } from "../../../constants";
import { FlagImage, StyledAudio, StyledCard, StyledDescription, StyledMeta } from "../styled";
import { FormattedMessage } from "react-intl";
import { DICTIONARY_PAGE } from "../../../../translations/constants";

export const useRenderAudioPlayer = () => {

    const renderAudioPlayer = (
        audio: string,
        phonetic: string,
        flag: string
    ) => {
        return (
            <StyledCard cover={<FlagImage alt="example" src={flag} />}>
                <StyledMeta
                    title={
                        <StyledAudio id={COUNTRY_AUDIO_ID} controls key={audio}>
                            <source src={audio} />
                        </StyledAudio>
                    }
                    description={
                        <StyledDescription>
                            <FormattedMessage id={DICTIONARY_PAGE.TRANSCRIPTION} />: {phonetic}
                        </StyledDescription>}
                />
            </StyledCard>
        );
    };

    const audioPlayerFactory = (audioPlayer: IAudioPlayer[]) => {
        return (audioPlayer.map(({ audio, text }: IAudioPlayer) => {
            const countryAccent = audio?.substring(audio.indexOf('-'));
            const audioFactory = {
                [AUDIO_PRONOUNCE.US]: renderAudioPlayer(audio, text, COUNTRIES_FLAGS.US),
                [AUDIO_PRONOUNCE.UK]: renderAudioPlayer(audio, text, COUNTRIES_FLAGS.UK),
                [AUDIO_PRONOUNCE.CA]: renderAudioPlayer(audio, text, COUNTRIES_FLAGS.CA),
                [AUDIO_PRONOUNCE.AU]: renderAudioPlayer(audio, text, COUNTRIES_FLAGS.AU)
            }
            return audioFactory[countryAccent];
        }))
    }

    return {
        audioPlayerFactory
    };
}