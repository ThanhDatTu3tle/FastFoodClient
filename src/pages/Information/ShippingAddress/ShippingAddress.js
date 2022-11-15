import classNames from 'classnames/bind';

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
        <div className={cx('line')}></div>
        
      </div>
    </div>
  )
}

export default ShippingAddress;
