export class BuildAllTranslationPages {
    constructor(welcome_page, tenses_page, dictionary_page, english_level_page, support_team, app_root, key) {
        this.key = key;
        this.welcome_page = welcome_page;
        this.tenses_page = tenses_page;
        this.dictionary_page = dictionary_page;
        this.english_level_page = english_level_page;
        this.support_team = support_team;
        this.app_root = app_root;
    };
    buildTranslationObject() {
        return {
            [this.key]: {
                ...this.welcome_page,
                ...this.tenses_page,
                ...this.dictionary_page,
                ...this.english_level_page,
                ...this.support_team,
                ...this.app_root
            }
        }
    };
};
