import classNames from 'classnames/bind';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';

import styles from './ShippingAddress.module.scss';
import SideBar from '../SideBar';

const cx = classNames.bind(styles)

function ShippingAddress() {
  return (
    <div className={cx('wrapper')}>
      <SideBar />
      <div className={cx('content')}>
        <div className={cx('title')}>
          SHIPPING ADDRESS
        </div>

        
      </div>
    </div>
  )
}

export default ShippingAddress;
