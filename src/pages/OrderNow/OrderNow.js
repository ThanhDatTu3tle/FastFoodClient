import classNames from 'classnames/bind';
import styles from './OrderNow.module.scss';

const cx = classNames.bind(styles)

function OrderNow() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <h2>Order Now page</h2>
      </div>
    </div>
  )
}

export default OrderNow;