import classNames from 'classnames/bind';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import styles from './SideBar.module.scss';
import Button from '../../components/Button';
import config from '../../config';

const cx = classNames.bind(styles)

function SideBar() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('logo')}>
        LOGO
      </div>

      <div className={cx('menu-category')}>
        <Button primary className={cx('btn')} to={config.routes.admin}>
          <DashboardIcon sx={{ marginRight: '5px' }}/>
          <span></span>
          Dashboard
        </Button>
        <Button primary className={cx('btn')} to={config.routes.products}>
          <FastfoodIcon sx={{ marginRight: '5px' }}/>
          Món ăn
        </Button>
        <Button primary className={cx('btn')} to={config.routes.category}>
          <CategoryIcon sx={{ marginRight: '5px' }}/>
          Danh mục món ăn
        </Button>
        <Button primary className={cx('btn')} to={config.routes.users}>
          <PeopleAltIcon sx={{ marginRight: '5px' }}/>
          Khách hàng
        </Button>
      </div>
    </div>
  )
}

export default SideBar;
