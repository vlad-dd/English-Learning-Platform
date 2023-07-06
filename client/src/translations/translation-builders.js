export class TranslationBuilder {
    constructor(...args) {
        this.args = { ...args };
    };

    buildTranslation(key) {
        return new BuildAllTranslationPages(this.args).buildTranslationObject(key);
    };
};

export class BuildAllTranslationPages {
    constructor(...translationObject) {
        this.translationObject = translationObject;
    };
    buildTranslationObject(key) {
        return {
            [key]: {
                ...Object.assign({}, ...Object.values(...this.translationObject))
            }
        };
    };
};
