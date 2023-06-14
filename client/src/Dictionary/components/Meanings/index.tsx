import { useMeaningsWidget } from "./use-meanings-widget";

const Meanings = () => {
  const { meanings, renderDictionaryContent } = useMeaningsWidget();
  return meanings.map(renderDictionaryContent);
};

export default Meanings;
