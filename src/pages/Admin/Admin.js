import classNames from 'classnames/bind';

import SideBar from './SideBar';
import Options from '../../layouts/components/Header/Options';
import styles from './Admin.module.scss';

const cx = classNames.bind(styles)

function Admin() {
  return (
    <div className={cx('wrapper')}>
      <SideBar></SideBar>

      <div className={cx('content')}>

        <div className={cx('header')}>
          <Options></Options>
        </div>

        <div className={cx('main-content')}>
          DASH BOARD
        </div>
      </div>
    </div>
  )
}

export default Admin;
