import React from "react";
import { size } from "lodash";
import { Title } from "../../../Сommon";
import { useAudioPlayerWidget } from "../../Hooks/use-audio-player";
import { AudioPlayerWrapper } from "./styled";

const AudioPlayer = () => {
  const { audioPlayers } = useAudioPlayerWidget();
  return size(audioPlayers) ? (
    <>
      <Title styles={{ textAlign: "center" }}>Pronunciation</Title>
      <AudioPlayerWrapper>{audioPlayers}</AudioPlayerWrapper>
    </>
  ) : null;
};

export default AudioPlayer;
