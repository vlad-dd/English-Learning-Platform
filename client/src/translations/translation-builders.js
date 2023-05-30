export class BuildAllTranslationPages {
    constructor(welcome_page, key) {
        this.key = key;
        this.welcome_page = welcome_page;
    };
    buildTranslationObject() {
        return {
            [this.key]: {
                ...this.welcome_page
            }
        }
    };
};
