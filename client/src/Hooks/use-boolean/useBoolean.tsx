import { useState } from 'react';

const useBoolean = (initialValue = false) => {
    const [state, setState] = useState(initialValue);

    const handleState = () => setState(state => !state);

    return [state, handleState] as any;
};

export default useBoolean;