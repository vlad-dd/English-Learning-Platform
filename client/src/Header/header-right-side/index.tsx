import { User } from '@firebase/auth-types';
import { Dropdown, Select, Space } from 'antd';
import { FiDatabase } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Image } from '../../Сommon';
import { HeaderRight, UserEmail } from '../styled';
import { AVATARS } from '../strings';
import AccountOptions from './account-options';
import { useDispatch } from 'react-redux';
import { setTranslationLanguage } from '../../store/reducers/translation';

const HeaderRightSide = ({ enteredUser, handleSignOut }: { enteredUser: User, handleSignOut: () => void }) => {
  const dispatch = useDispatch();

  return (
    <HeaderRight>
      <div style={{ display: "flex", marginTop: "8px", alignItems: "center" }}>
        <Select
          defaultValue="US"
          defaultActiveFirstOption
          showArrow={false}
          size="small"
          style={{ width: 70, marginRight: "15px" }}
          //@ts-ignore
          onChange={(language: string) => dispatch(setTranslationLanguage(language))}
          options={[
            {
              value: 'US', label:
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>US
                  <img src="https://t4.ftcdn.net/jpg/00/65/12/49/360_F_65124908_UpNHzTdQn2HNAIT8yYqybMQeGfsRmVc7.jpg" style={{ height: "14px" }} />
                </div>,
            },
            {
              value: 'UA', label:
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>UA
                  <img src="https://www.countryflags.com/wp-content/uploads/ukraine-flag-png-large.png" style={{ height: "14px" }} />
                </div>,
            },
            {
              value: 'JP', label:
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>JP
                  <img src="https://www.countryflags.com/wp-content/uploads/japan-flag-png-xl.png" style={{ height: "14px" }} />
                </div>,
            },
            {
              value: 'ESP', label:
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>ESP
                  <img src="https://www.countryflags.com/wp-content/uploads/spain-flag-png-large.png" style={{ height: "14px" }} />
                </div>,
            },
            {
              value: 'FR', label:
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>FR
                  <img src="https://www.countryflags.com/wp-content/uploads/france-flag-png-large.png" style={{ height: "14px" }} />
                </div>,
            },
            {
              value: 'GER', label:
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>GER
                  <img src="https://www.countryflags.com/wp-content/uploads/germany-flag-png-large.png" style={{ height: "14px" }} />
                </div>,
            },
          ]}
        />
        {enteredUser?.email === 'adminelp@gmail.com' ? <Link to="/admin-panel"><FiDatabase style={{ marginRight: '30px', cursor: 'pointer', fontSize: "1.2rem" }} /></Link> : ''}
      </div>
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
