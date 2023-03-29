import { useLazyQuery } from "@apollo/client";
import { GET_WORD_FROM_DICTIONARY } from "../../graphql";

export const useDictionary = () => {
    const [searchWordInDictionary, { data, loading, error }] = useLazyQuery(GET_WORD_FROM_DICTIONARY);

    return { data, isLoading: loading, error, searchWordInDictionary };
};

export type DictionaryResponseType = ReturnType<typeof useDictionary>;