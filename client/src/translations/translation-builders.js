export class BuildAllTranslationPages {
    constructor(welcome_page, tenses_page, dictionary_page, english_level_page, support_team, key) {
        this.key = key;
        this.welcome_page = welcome_page;
        this.tenses_page = tenses_page;
        this.dictionary_page = dictionary_page;
        this.english_level_page = english_level_page;
        this.support_team = support_team;
    };
    buildTranslationObject() {
        return {
            [this.key]: {
                ...this.welcome_page,
                ...this.tenses_page,
                ...this.dictionary_page,
                ...this.english_level_page,
                ...this.support_team
            }
        }
    };
};
