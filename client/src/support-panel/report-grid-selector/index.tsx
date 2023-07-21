import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { StyledButtonGroup } from '../styled';
import { useGridSelector } from './use-grid-selector';
import { IReportGridSelector } from '../types';
import { memo } from 'react';

const ReportGridSelector = memo(({ selectReportOption, options }: IReportGridSelector) => {
    const {
        open,
        selectedIndex,
        anchorRef,
        handleClick,
        handleToggle,
        handleMenuItemClick,
        handleClose
    } = useGridSelector(selectReportOption, options);
    console.log("render")

    return (
        <div>
            <StyledButtonGroup variant="outlined" ref={anchorRef}>
                <Button onClick={handleClick}>
                    {options[selectedIndex]}
                </Button>
                <Button
                    size="small"
                    onClick={handleToggle}
                >
                    <ArrowDropDownIcon />
                </Button>
            </StyledButtonGroup>
            <Popper
                sx={{
                    zIndex: 1,
                }}
                open={open}
                anchorEl={anchorRef.current}
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu" autoFocusItem>
                                    {options.map((option: any, index: any) => (
                                        <MenuItem
                                            key={option}
                                            selected={index === selectedIndex}
                                            onClick={(event) => handleMenuItemClick(event, index)}
                                        >
                                            {option}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    )
})

export default ReportGridSelector;