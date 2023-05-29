import { Dropdown, Select, Space } from 'antd';
import { FiDatabase } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Image } from '../../Сommon';
import { HeaderRight, StyledLanguageSelector, UserEmail } from '../styled';
import { AVATARS } from '../strings';
import AccountOptions from './account-options';
import { useDispatch } from 'react-redux';
import { setTranslationLanguage } from '../../store/reducers/translation';
import { LANGUAGES } from '../constants';
import { IHeaderRightSide } from '../types';

const HeaderRightSide = ({ enteredUser, handleSignOut }: IHeaderRightSide) => {
  const dispatch = useDispatch();
  return (
    <HeaderRight>
      <StyledLanguageSelector>
        <Select
          defaultValue="US"
          showArrow={false}
          size="small"
          style={{ width: 70, marginRight: "15px" }}
          onChange={(language: string) => dispatch(setTranslationLanguage(language))}>
          {LANGUAGES.map(({ key, icon }) => (
            <Select.Option key={key}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <img src={icon} style={{ height: "14px", width: "20px" }} />
                {key}
              </div>
            </Select.Option>
          ))}
        </Select>
        {enteredUser?.email === 'adminelp@gmail.com' ?
          <Link to="/admin-panel">
            <FiDatabase style={{ marginRight: '30px', cursor: 'pointer', fontSize: "1.2rem" }} />
          </Link>
          : ''}
      </StyledLanguageSelector>
      {enteredUser && enteredUser !== null ? (
        <Image url={AVATARS.admin} styles={{ height: "32px", width: "32px", borderRadius: "50%", objectFit: "cover" }} />
      ) : (
        <Image url={AVATARS.visitor} styles={{ height: "32px", width: "32px", borderRadius: "50%", objectFit: "cover" }} />
      )}
      <Dropdown overlay={<AccountOptions handleSignOut={handleSignOut} />} trigger={['click']}>
        <Space>
          <UserEmail>
            {enteredUser && enteredUser !== null
              ? enteredUser.email
              : 'Guest'}
          </UserEmail>
        </Space>
      </Dropdown>
    </HeaderRight>
  );
}

export default HeaderRightSide;
