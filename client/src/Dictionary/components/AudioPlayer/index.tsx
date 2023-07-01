import { FormattedMessage } from "react-intl";
import { size } from "lodash";
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { DICTIONARY_PAGE } from "../../../translations/constants";
import { Title } from "../../../Сommon";
import { useAudioPlayerWidget } from "../../Hooks/use-audio-player";
import { UNEXISTED_AUDIO_FILE_DATA_TEST_ID } from "../../constants";
import { AudioPlayerWrapper, StyledEmptyAudioIcon } from "./styled";

const AudioPlayer = () => {
  const { audioPlayers } = useAudioPlayerWidget();
  return !!size(audioPlayers) ? (
    <>
      <Title styles={{ textAlign: "center" }}>
        <FormattedMessage id={DICTIONARY_PAGE.PRONUNCIATION_TITLE} />
      </Title>
      <AudioPlayerWrapper>{audioPlayers}</AudioPlayerWrapper>
    </>
  ) :
    <StyledEmptyAudioIcon
      image={<VolumeOffIcon sx={{ fontSize: 120, fill: "#D07DE5" }} />}
      data-testid={UNEXISTED_AUDIO_FILE_DATA_TEST_ID}
      description={<FormattedMessage id={DICTIONARY_PAGE.UNEXISTED_SOUND} />}
    />;
};

export default AudioPlayer;
