import classNames from 'classnames/bind';

import styles from './OrderHistory.module.scss';
import SideBar from '../SideBar';

const cx = classNames.bind(styles)

function OrderHistory() {
  return (
    <div className={cx('wrapper')}>
      <SideBar />
      <div className={cx('content')}>
        <div className={cx('title')}>
          ORDER HISTORY
        </div>
        <div className={cx('line')}></div>
        
      </div>
    </div>
  )
}

export default OrderHistory;
