export class BuildAllTranslationPages {
    constructor(welcome_page, tenses_page, dictionary_page, key) {
        this.key = key;
        this.welcome_page = welcome_page;
        this.tenses_page = tenses_page;
        this.dictionary_page = dictionary_page;
    };
    buildTranslationObject() {
        return {
            [this.key]: {
                ...this.welcome_page,
                ...this.tenses_page,
                ...this.dictionary_page
            }
        }
    };
};
