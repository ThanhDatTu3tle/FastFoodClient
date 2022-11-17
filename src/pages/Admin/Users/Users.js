import classNames from 'classnames/bind';

import SideBar from '../SideBar';
import Options from '../../../layouts/components/Header/Options';
import styles from './Users.module.scss';

const cx = classNames.bind(styles)

function Users() {
  return (
    <div className={cx('wrapper')}>
      <SideBar></SideBar>

      <div className={cx('content')}>

        <div className={cx('header')}>
          <Options></Options>
        </div>  

        <div className={cx('main-content')}>
          DANH SÁCH KHÁCH HÀNG
        </div>
      </div>
    </div>
  )
}

export default Users;
