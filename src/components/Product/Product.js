import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import Button from '../Button/Button';

const cx = classNames.bind(styles)

function Product() {
    return (
        <div className={cx('wrapper')}>
            <div>Hình ảnh</div>
            <div>Combo 99,000đ</div>
            <div>Chi tiết</div>
            <Button primary>Add to cart</Button>    
        </div>
    )
}

export default Product;
