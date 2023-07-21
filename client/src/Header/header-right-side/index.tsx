import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dropdown, Space } from 'antd';
import { isNil } from 'lodash';
import { BiSupport } from "react-icons/bi";
import { setTranslationLanguage } from '../../store/reducers/translation';
import { APPLICATION_NAVIGATION, APPLICATION_USER_STATUS } from '../../Сommon/constants';
import AccountOptions from './account-options';
import { IHeaderRightSide } from '../types';
import { ADMIN_EMAIL, DEFAULT_APPLICATION_LANGUAGE, LANGUAGES, USER_AVATARS } from '../constants';
import {
  HeaderRight,
  StyledDatabaseIcon,
  StyledLanguageIcon,
  StyledLanguageOption,
  StyledLanguageSelector,
  StyledSelect,
  StyledSupportIcon,
  StyledUserAvatar,
  UserEmail
} from '../styled';

const HeaderRightSide = ({ enteredUser, handleSignOut }: IHeaderRightSide) => {
  const dispatch = useDispatch();

  return (
    <HeaderRight>
      <StyledLanguageSelector>
        <StyledSelect
          defaultValue={DEFAULT_APPLICATION_LANGUAGE}
          showArrow={false}
          size="small"
          onChange={(language: any) => dispatch(setTranslationLanguage(language))}>
          {LANGUAGES.map(({ key, icon }) => (
            <StyledSelect.Option key={key}>
              <StyledLanguageOption>
                <StyledLanguageIcon src={icon} />
                {key}
              </StyledLanguageOption>
            </StyledSelect.Option>
          ))}
        </StyledSelect>
        {enteredUser?.email === ADMIN_EMAIL ?
          <div>
            <Link to="/support-team">
              <StyledSupportIcon />
            </Link>
            <Link to={APPLICATION_NAVIGATION.ADMIN_PANEL}>
              <StyledDatabaseIcon />
            </Link>
          </div>
          : ''}
      </StyledLanguageSelector>
      {!isNil(enteredUser) ? (
        <StyledUserAvatar src={USER_AVATARS.admin} />
      ) : (
        <StyledUserAvatar src={USER_AVATARS.visitor} />
      )}
      <Dropdown overlay={<AccountOptions handleSignOut={handleSignOut} />} trigger={['click']}>
        <Space>
          <UserEmail>
            {!isNil(enteredUser) ? enteredUser.email : APPLICATION_USER_STATUS.GUEST}
          </UserEmail>
        </Space>
      </Dropdown>
    </HeaderRight>
  );
}

export default HeaderRightSide;
