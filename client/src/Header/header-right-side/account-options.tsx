import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { UserOutlined, SettingOutlined } from '@ant-design/icons';
import { openUserProfileModal } from '../../store/reducers/user-profile-modal';
import { HEADER } from '../../translations/constants';
import { IAccountOptions } from '../types';
import { HEADER_DROPDOWN_MENU_DATA_TEST_ID } from '../constants';
import { MenuItem, StyledAccountOptionsMenu } from '../styled';

const AccountOptions = ({ handleSignOut }: IAccountOptions) => {
  const dispatch = useDispatch();
  return (
    <StyledAccountOptionsMenu
      data-testid={HEADER_DROPDOWN_MENU_DATA_TEST_ID}
      items={[
        {
          label: (
            <>
              <UserOutlined />
              <MenuItem
                onClick={() => dispatch(openUserProfileModal())}
              >
                <FormattedMessage id={HEADER.PROFILE_ACCOUNT_OPTION} />
              </MenuItem>
            </>
          ),
          key: '0',
        },
        {
          type: 'divider',
        },
        {
          label: (
            <>
              <SettingOutlined />
              <MenuItem
                onClick={handleSignOut}
              >
                <FormattedMessage id={HEADER.PROFILE_SIGN_OUT} />
              </MenuItem>
            </>
          ),
          key: '1',
        },
      ]}
    />
  )
}

export default AccountOptions;