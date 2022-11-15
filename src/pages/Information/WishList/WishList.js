import classNames from 'classnames/bind';

import styles from './WishList.module.scss';
import SideBar from '../SideBar';

const cx = classNames.bind(styles)

function WishList() {
  return (
    <div className={cx('wrapper')}>
      <SideBar />
      <div className={cx('content')}>
        <div className={cx('title')}>
          WISH LIST
        </div>
        <div className={cx('line')}></div>
        
      </div>
    </div>
  )
}

export default WishList;
