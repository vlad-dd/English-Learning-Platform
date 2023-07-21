import { useState, useRef, Dispatch, SetStateAction } from "react";

export const useGridSelector = (selectReportOption: Dispatch<SetStateAction<string>>, options: Array<string>) => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleClick = () => {
        selectReportOption(options[selectedIndex]);
    };

    const handleMenuItemClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event) => {
        setOpen(false);
    };

    return {
        open,
        selectedIndex,
        anchorRef,
        handleClick,
        handleMenuItemClick,
        handleToggle,
        handleClose
    };
}