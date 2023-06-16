import { DICTIONARY_PAGE, ENGLISH_LEVEL_PAGE, SUPPORT_TEAM, TENSES_PAGE, WELCOME_PAGE } from "../constants";
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
};

const tenses_page = {
  [TENSES_PAGE.COMMON_TENSES_TITLE]: "どのような事例がそれを教えてくれるのか",
  [TENSES_PAGE.EXAMPLES_TITLE]: "例",
  [TENSES_PAGE.SENTENCE_BUILDING]: "文章構築",
  [TENSES_PAGE.PRACTICE_TITLE]: "練習",
  [TENSES_PAGE.СOMMENTS_TITLE]: "コメント",
  [TENSES_PAGE.COMMENTS_POLICY_RULES_TITLE]: "英語学習プラットフォームのポリシー 📜",
  [TENSES_PAGE.COMMENTS_POLICY_RULES_PART_ONE]: "当社のポリシーの一環として、以下のいずれかを含むコメントは許可されません:",
  [TENSES_PAGE.COMMENTS_POLICY_RULES_PART_TWO]: "私たちは、すべてのユーザーにとって安全で敬意を持ったコミュニティを維持するために、これらのルールを真剣に受け止めています。 これらのルールに違反するコメントは削除される場合があり、違反を繰り返す場合はプラットフォームから追放される場合があります。 すべてのユーザーにこれらのルールを確認し、ルールに違反するコメントをモデレーション チームに報告することをお勧めします👩‍💻."
};

const dictionary_page = { 
  [DICTIONARY_PAGE.TIP]: "辞書検索機能では、一致する可能性のある単語や代替語が提案されるので、探している単語を簡単に見つけることができます.",
  [DICTIONARY_PAGE.UNEXISTED_WORD]: "存在しない単語です。スペルを確認してください.",
  [DICTIONARY_PAGE.PRONUNCIATION_TITLE]: "発音",
  [DICTIONARY_PAGE.UNEXISTED_SOUND]: "この単語の音声ファイルはありません",
  [DICTIONARY_PAGE.SEARCH_BUTTON]: "検索",
  [DICTIONARY_PAGE.TRANSCRIPTION]: "転写"
};

const english_level_page = {
  [ENGLISH_LEVEL_PAGE.TITLE]: "英語能力レベルテスト",
  [ENGLISH_LEVEL_PAGE.LEVEL]: "あなたの英語レベルは",
  [ENGLISH_LEVEL_PAGE.QUIZ_TITLE]: "こんにちは。英語能力評価へようこそ! 🌍",
  [ENGLISH_LEVEL_PAGE.NOTE_ONE]: "✅ すべての質問に答えてください。",
  [ENGLISH_LEVEL_PAGE.NOTE_TWO]: "👀 評価には時間制限がありません。",
  [ENGLISH_LEVEL_PAGE.NOTE_THREE]: "🤷🏽 答えがわからない場合は、正しいと思われる答えを選択してください。"
};

const support_team = {
  [SUPPORT_TEAM.SEND_REPORT_MODAL_TITLE]: "問題について報告してください👷‍♂️",
  [SUPPORT_TEAM.SEND_REPORT_MODAL_FEEDBACK_TITLE]: "レポートは正常に送信されました。",
  [SUPPORT_TEAM.SEND_REPORT_MODAL_NUMBER]: "レポート番号:",
  [SUPPORT_TEAM.SEND_REPORT_MODAL_THANK_MESSAGE]: "私たちのサービスをより良くしていただきありがとうございます!",
  [SUPPORT_TEAM.SEND_REPORT_SUBMIT_BUTTON]: "送信"
};

const JP_TRANSLATION_BUILD = new BuildAllTranslationPages(
  welcome_page, 
  tenses_page, 
  dictionary_page, 
  english_level_page,
  support_team,
  "JP").buildTranslationObject();

export default JP_TRANSLATION_BUILD;