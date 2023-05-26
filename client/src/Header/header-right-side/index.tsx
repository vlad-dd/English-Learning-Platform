import { User } from '@firebase/auth-types';
import { Dropdown, Space } from 'antd';
import { FiDatabase } from 'react-icons/fi';
import TranslateIcon from '@mui/icons-material/Translate';
import { Link } from 'react-router-dom';
import { Image } from '../../Сommon';
import { HeaderRight, UserEmail } from '../styled';
import { AVATARS } from '../strings';
import AccountOptions from './account-options';


const HeaderRightSide = ({ enteredUser, handleSignOut }: { enteredUser: User, handleSignOut: () => void }) => {

  return (
    <HeaderRight>
      <div style={{ display: "flex", marginTop: "8px" }}>
        <TranslateIcon style={{ fill: "white", cursor: "pointer", marginRight: "15px", fontSize: "1.2rem" }} />
        {enteredUser?.email === 'adminelp@gmail.com' ? <Link to="/admin-panel"><FiDatabase style={{ marginRight: '30px', cursor: 'pointer', fontSize: "1.2rem"}} /></Link> : ''}
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
