import React, { createContext } from 'react';
import { noop } from 'lodash';
import { DictionaryResponseType, useDictionary } from '../Hooks/use-dictionary';

const DictionaryContextInitialState = {
    data: {},
    isLoading: false,
    searchWordInDictionary: noop
}

export const DictionaryConfigurationContext = createContext<DictionaryResponseType | typeof DictionaryContextInitialState >(DictionaryContextInitialState);

const DictionaryContext = ({ children }: { children: JSX.Element }) => {

    const { searchWordInDictionary, data, isLoading } = useDictionary();
    
    return (
        <DictionaryConfigurationContext.Provider value={{ data, searchWordInDictionary, isLoading }}>
         {children}
        </DictionaryConfigurationContext.Provider>
    )
}

export default DictionaryContext;