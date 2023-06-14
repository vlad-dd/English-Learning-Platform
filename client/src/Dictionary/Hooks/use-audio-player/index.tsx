import { useContext, useEffect, useState } from "react";
import { compact, size } from "lodash";
import { extractByPath } from "../../../utils/utils";
import { DictionaryConfigurationContext } from "../../Context";
import { useRenderAudioPlayer } from "./use-render-audio-player";
import { IAudioPlayer } from "../../types";

export const useAudioPlayerWidget = () => {
  const { data } = useContext(DictionaryConfigurationContext);
  const { word, phonetics } = extractByPath(data, "dictionary[0]");

  const [filteredAudioPlayer, setFilteredAudioPlayer] = useState<IAudioPlayer[]>([]);

  const { audioPlayerFactory } = useRenderAudioPlayer();

  useEffect(() => {
    //Sometimes we receive empty fields for audio, so we need to filter where we have a url.
    const filteredAudios: IAudioPlayer[] = compact(phonetics.map(({ audio, text }: IAudioPlayer) => !!size(audio) && ({ audio, text })))
    setFilteredAudioPlayer(filteredAudios);
  }, [word])

  return { audioPlayers: audioPlayerFactory(filteredAudioPlayer) };
};
