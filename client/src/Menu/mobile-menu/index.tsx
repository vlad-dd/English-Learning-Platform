import React from 'react';
import { Menu } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { options } from '../options';
import { breadcrumbPath } from '../../store/reducers/bread-crumb';
import { setActualSentenceIndex, setEarnedPoints } from '../../store/reducers/carousel';
import { useTheme } from '../../Hooks';

const MobileSiderMenu = ({ onClose }: { onClose: () => void }) => {
    const dispatch = useDispatch();
    const { theme } = useTheme();
    const navigate = useNavigate();

    return (
        <Menu
            style={{ height: "100vh", width: "100vw" }}
            data-testid="burger-menu"
            theme={theme}
            mode="inline"
            items={options}
            onSelect={({ keyPath }: { keyPath: string[] }) => {
                navigate(`/${keyPath.reverse().join('/')}`)
                dispatch(breadcrumbPath(keyPath.reverse()));
                dispatch(setActualSentenceIndex(0));
                dispatch(setEarnedPoints(0));
                onClose();
            }}
        />
    );
};

export default MobileSiderMenu;
