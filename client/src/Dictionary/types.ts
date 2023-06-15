
export interface IAudioPlayer {
    audio: string
    text: string
};

export interface IDefinitions {
    __typename: string
    definition: string
    antonyms: string[]
    synonyms: string[]
    example: string
};

export interface IMeanings {
    __typename: string
    antonyms: string[]
    synonyms: string[]
    definitions: IDefinitions[]
    partOfSpeech: string
};


export interface IAudioPlayerWidgetMock {
    current: {
        audioPlayers: {
            audio: string
            text: string
        }[]
    };
};
