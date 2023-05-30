import { WELCOME_PAGE } from "../constants";
import { BuildAllTranslationPages } from "../translation-builders";

const welcome_page = {
  [WELCOME_PAGE.TITLE]: "英語学習プラットフォーム",
  [WELCOME_PAGE.ACTIVE_USERS_COUNT]: "アクティブユーザー",
  [WELCOME_PAGE.CARD_GOAL_TITLE]: "私たちの目標 🎯",
  [WELCOME_PAGE.CARD_GOAL_BODY]: "私たちのプラットフォームは、英語力の向上に役立つ包括的なリソースとツールを提供するように設計されています。",
  [WELCOME_PAGE.CARD_UP_TO_DATE_TITLE]: "常に最新の状態 🔄",
  [WELCOME_PAGE.CARD_UP_TO_DATE_BODY]: "文法情報と辞書は定期的に更新され、最新かつ最も正確な情報にアクセスできるようになります。",
  [WELCOME_PAGE.CARD_STRUCTURE_TITLE]: "プラットフォームの構造 🗂",
  [WELCOME_PAGE.STEP_ONE]: "ステップ1",
  [WELCOME_PAGE.STEP_TWO]: "ステップ2",
  [WELCOME_PAGE.STEP_THREE]: "ステップ3",
  [WELCOME_PAGE.STEP_FOUR]: "ステップ4",
  [WELCOME_PAGE.GUIDELINE_TITLE]: "英語学習プラットフォームの使い方は？🤔",
  [WELCOME_PAGE.STEP_ONE_DESCRIPTION]: "自分のレベルを特定する",
  [WELCOME_PAGE.STEP_TWO_DESCRIPTION]: "文法を調べる",
  [WELCOME_PAGE.STEP_THREE_DESCRIPTION]: "テストに合格する",
  [WELCOME_PAGE.STEP_FOUR_DESCRIPTION]: "単語リスニングオプションを備えた辞書を使用する",
  [WELCOME_PAGE.FEEDBACKS_TITLE]: "学習者のフィードバック 🎓",
  [WELCOME_PAGE.FEEDBACK_ONE]: "こんにちは。英語学習プラットフォームが私にとって命の恩人であることを言いたかっただけです。 文法情報は明確で理解しやすく、テストは自分の弱点を特定し、英語スキルを向上させるのに役立ちました。",
  [WELCOME_PAGE.FEEDBACK_TWO]: "単語のリスニングオプションを備えた辞書は、ネイティブスピーカーによる単語の発音を聞くことができるので、私にとって非常に役に立ちました。 英語を上達させたい人にはこのプラットフォームをぜひお勧めします。",
  [WELCOME_PAGE.FEEDBACK_THREE]: "私はここ数週間、英語学習プラットフォームを使用しています。 各テーマのテストは、学んだことを実践し、進歩を追跡できるため、非常に役立ちます。 このプラットフォームの作成に費やされた努力に感謝します.",
  [WELCOME_PAGE.FEEDBACK_FOUR]: "学習用のテストがあることも大きな特徴で、苦手な分野を重点的に学ぶことができます。 全体として、私はこのプラットフォームに非常に満足しています."
}

const JP_TRANSLATION_BUILD = new BuildAllTranslationPages(welcome_page, "JP").buildTranslationObject();

export default JP_TRANSLATION_BUILD;