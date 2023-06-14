import { createContext } from 'react';
import { noop } from 'lodash';
import { DictionaryResponseType, useDictionaryWidget } from '../Hooks/use-dictionary';

const DictionaryContextInitialState = {
    data: {},
    isLoading: false,
    error: undefined,
    searchWordInDictionary: noop
}

export const DictionaryConfigurationContext = createContext<DictionaryResponseType | typeof DictionaryContextInitialState >(DictionaryContextInitialState);

const DictionaryContext = ({ children }: { children: JSX.Element }) => {

    const { searchWordInDictionary, data, error, isLoading } = useDictionaryWidget();
   
    return (
        <DictionaryConfigurationContext.Provider value={{ data, searchWordInDictionary, isLoading, error }}>
         {children}
        </DictionaryConfigurationContext.Provider>
    )
}

export default DictionaryContext;
