
interface IAudioPlayer {
    audio: string
    text: string
}

interface IDefinitions {
    __typename: string
    definition: string
    antonyms: string[]
    synonyms: string[]
    example: string
}

interface IMeanings {
    __typename: string
    antonyms: string[]
    synonyms: string[]
    definitions: IDefinitions[]
    partOfSpeech: string

}

export type { IAudioPlayer, IDefinitions, IMeanings };