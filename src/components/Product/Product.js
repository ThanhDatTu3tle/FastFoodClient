// import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import Button from '../Button/Button';

const cx = classNames.bind(styles)

function Product({ data }) {

    // const [products, setProducts] = useState()

    // useEffect(() => {

    //     fetch('http://localhost:3001/products')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setProducts(data)
    //             console.log(data)
    //         });
    // }, [])
    
    return (
        <div className={cx('wrapper')}>
            <div>Hình ảnh</div>
            <div>Combo {data.giaTien}đ</div>
            <div>{data.tenMonAn}</div>
            <Button primary>Add to cart</Button>    
        </div>
    )
}

export default Product;
