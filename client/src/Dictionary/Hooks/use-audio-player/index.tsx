import React, { useContext, useEffect, useState } from "react";
import { compact, get } from "lodash";
import { Card } from 'antd';
import { DictionaryConfigurationContext } from "../../Context";
import { AUDIO_PRONOUNCE, COUNTRIES_FLAGS } from "../../constants";
import { IAudioPlayer } from "../../types";

export const renderAudioPlayer = (
  audio: string,
  phonetic: string,
  flag: string
) => {
  return (
      <Card style={{ width: 350 }} cover={<img alt="example" src={flag} />}>
        <Card.Meta
          title={
            <audio controls key={audio}>
              <source src={audio} />
            </audio>
          }
          description={<div>Transcription: {phonetic}</div>}
        />
      </Card>
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

export const useAudioPlayer = () => {
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
