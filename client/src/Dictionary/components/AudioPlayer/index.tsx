import { FormattedMessage } from "react-intl";
import { Empty } from "antd";
import { size } from "lodash";
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { DICTIONARY_PAGE } from "../../../translations/constants";
import { Title } from "../../../Сommon";
import { useAudioPlayerWidget } from "../../Hooks/use-audio-player";
import { UNEXISTED_AUDIO_FILE_DATA_TEST_ID } from "../../constants";
import { AudioPlayerWrapper } from "./styled";

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
    <Empty
      style={{ marginTop: "25px" }}
      image={<VolumeOffIcon sx={{ fontSize: 120, fill: "#D07DE5" }} />}
      data-testid={UNEXISTED_AUDIO_FILE_DATA_TEST_ID}
      description={<FormattedMessage id={DICTIONARY_PAGE.UNEXISTED_SOUND} />}
    />;
};

export default AudioPlayer;
