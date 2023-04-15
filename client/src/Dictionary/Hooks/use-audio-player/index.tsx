import React, { useContext, useEffect, useState } from "react";
import { compact, get } from "lodash";
import { DictionaryConfigurationContext } from "../../Context";
import { AUDIO_PRONOUNCE, COUNTRIES_FLAGS } from "../../constants";
import { IAudioPlayer } from "../../types";
import { FlagImage, StyledAudio, StyledCard, StyledMeta } from "./styled";

export const renderAudioPlayer = (
  audio: string,
  phonetic: string,
  flag: string
) => {
  return (
      <StyledCard cover={<FlagImage alt="example" src={flag} />}>
        <StyledMeta
          title={
            <StyledAudio id="country_audio" controls key={audio}>
              <source src={audio} />
            </StyledAudio>
          }
          description={<div>Transcription: {phonetic}</div>}
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

export const useAudioPlayerWidget = () => {
    const { data } = useContext(DictionaryConfigurationContext);
    const { word, phonetics } = get(data, "dictionary[0]");

    const [filteredAudioPlayer, setFilteredAudioPlayer] = useState<IAudioPlayer[]>([]);

    useEffect(() => {
        //Sometimes we receive empty fields for audio, so we need to filter where we have a url.
        const filteredAudios: IAudioPlayer[] = compact(phonetics.map(({ audio, text }: IAudioPlayer) => audio && ({ audio, text })))
        setFilteredAudioPlayer(filteredAudios);
      }, [word])
      
    return { audioPlayers: audioPlayerFactory(filteredAudioPlayer) };    
};
