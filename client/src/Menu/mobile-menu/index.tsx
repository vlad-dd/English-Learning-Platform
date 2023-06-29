import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { breadcrumbPath } from '../../store/reducers/bread-crumb';
import { setActualSentenceIndex, setEarnedPoints } from '../../store/reducers/carousel';
import { options } from '../options';
import { IKeyPath, IMobileSiderMenu } from '../types';
import { BURGER_MENU_OPTIONS_DATA_TEST_ID } from '../constants';
import { StyledMobileSiderMenu } from '../styled';

const MobileSiderMenu = ({ onClose }: IMobileSiderMenu) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <StyledMobileSiderMenu
            data-testid={BURGER_MENU_OPTIONS_DATA_TEST_ID}
            mode="inline"
            items={options}
            onSelect={({ keyPath }: IKeyPath) => {
                navigate(`/${keyPath.reverse().join('/')}`)
                dispatch(breadcrumbPath(keyPath.reverse()));
                dispatch(setActualSentenceIndex(0));
                dispatch(setEarnedPoints(0));
                setTimeout(() => onClose())
            }}
        />
    );
};

export default MobileSiderMenu;
