import classNames from 'classnames/bind';

import styles from './Bill.module.scss';

const cx = classNames.bind(styles)

function Bill() {
  return (
    <div className={cx('wrapper')}>
      HÓA ĐƠN
    </div>
  )
}

export default Bill;
