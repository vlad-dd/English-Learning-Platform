import React, { useState } from 'react';

const useBoolean = (initialValue: boolean) => {
    const [state, setState] = useState(initialValue);

    const handleState = () => setState(state => !state);

    return [state, handleState] as any;
};

export default useBoolean;