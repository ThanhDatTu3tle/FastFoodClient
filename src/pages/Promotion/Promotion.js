import classNames from 'classnames/bind';
import styles from './Promotion.module.scss';
import Product from '../../components/Product/Product';

const cx = classNames.bind(styles)

function Promotion() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
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

export default Promotion;
