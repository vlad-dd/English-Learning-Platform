import { BuildAllTranslationPages, WelcomePageLanguageTranslationBuilder } from "../translation-builders";

const welcome_page = new WelcomePageLanguageTranslationBuilder(
    '英語学習プラットフォーム',
    'アクティブユーザー',
    '私たちの目標 🎯',
    '私たちのプラットフォームは、英語力の向上に役立つ包括的なリソースとツールを提供するように設計されています.',
    '常に最新の状態 🔄',
    '文法情報と辞書は定期的に更新され、最新かつ最も正確な情報にアクセスできるようになります。',
    "プラットフォームの構造 🗂",
    "ステップ1",
    "ステップ2",
    "ステップ3",
    "ステップ4",
    "自分のレベルを特定する",
    "文法を調べる",
    "テストに合格する",
    "単語リスニングオプションを備えた辞書を使用する",
    "英語学習プラットフォームの使い方は？🤔",
    "学習者のフィードバック 🎓",
    "こんにちは。英語学習プラットフォームが私にとって命の恩人であることを言いたかっただけです。 文法情報は明確で理解しやすく、テストは自分の弱点を特定し、英語スキルを向上させるのに役立ちました。"
  );
  
const JP_TRANSLATION_BUILD = new BuildAllTranslationPages(welcome_page, "JP").buildTranslationObject();

export default JP_TRANSLATION_BUILD;