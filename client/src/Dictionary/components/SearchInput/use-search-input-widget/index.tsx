import { useContext, useState } from "react";
import { DictionaryConfigurationContext } from "../../../Context";

export const useSearchInputWidget = () => {
    const [toSearch, setToSearch] = useState<string>('');
    
    const { searchWordInDictionary, isLoading } = useContext(DictionaryConfigurationContext);

    return {
        toSearch,
        isLoading,
        searchWordInDictionary,
        setToSearch
    };
};