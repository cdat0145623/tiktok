import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import {
    HomeIcon,
    UserGroupIcon,
    CompassIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    CompassActiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import Menu, { MenuItem } from './Menu';
import SuggestedAccount from '~/components/SuggestedAccount/SuggestedAccount';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem
                    title="Explore"
                    to={config.routes.explore}
                    icon={<CompassIcon />}
                    activeIcon={<CompassActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestedAccount label="Suggested Accounts" />

            {/* <SuggestedAccount label="Following Accounts" /> */}
        </aside>
    );
}

export default Sidebar;
