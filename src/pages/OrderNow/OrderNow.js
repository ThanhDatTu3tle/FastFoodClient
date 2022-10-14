import classNames from 'classnames/bind';
import styles from './OrderNow.module.scss';
import Product from '../../components/Product/Product';
import List from '../../components/List/List';


const cx = classNames.bind(styles)

function OrderNow() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('list')}>
          <List />
        </div>
        <div className={cx('products')}>
          <Product />
          <Product />
          <Product />
        </div>
        <div className={cx('products')}>
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  )
}

export default OrderNow;