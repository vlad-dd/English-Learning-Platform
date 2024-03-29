import { ITranslationRoot } from './types';
import {
  US_TRANSLATION_BUILD,
  UA_TRANSLATION_BUILD,
  JP_TRANSLATION_BUILD,
  FR_TRANSLATION_BUILD,
  ESP_TRANSLATION_BUILD,
  GER_TRANSLATION_BUILD
} from './languages';

export const TRANSLATIONS: { [key: string]: ITranslationRoot } = {
  ...US_TRANSLATION_BUILD,
  ...UA_TRANSLATION_BUILD,
  ...JP_TRANSLATION_BUILD,
  ...FR_TRANSLATION_BUILD,
  ...ESP_TRANSLATION_BUILD,
  ...GER_TRANSLATION_BUILD
};

console.log("TRANSLATIONS", TRANSLATIONS)