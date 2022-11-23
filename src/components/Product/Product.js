import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Backdrop from '@mui/material/Backdrop';
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";

import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import Button from '../Button/Button';
import Image from '../Image/Image';
import LoginForm from '../../layouts/components/LoginForm/LoginForm';

const cx = classNames.bind(styles)

function Product({ data }) {

    const user = localStorage.getItem('hoTen')
    const cartOfEachProduct = []
    const [cart, setCart] = useState([])


    const [favoriteState, setFavoriteState] = useState(false)
    const [count, setCount] = useState(1)

    const handleClick = async () => {

        if (user !== null && favoriteState === false) {
            setFavoriteState(true)
        } else if (user !== null && favoriteState === true) {
            setFavoriteState(false)
        } else {
            await MySwal.fire({
                title: "Vui lòng đăng nhập!",
                icon: "warning",
                didOpen: () => {
                    MySwal.showLoading();
                },
                timer: 2000,
            });
        }
    }

    const MySwal = withReactContent(Swal);

    const handleAddToCart = async () => {
        if (!user) {
            await MySwal.fire({
                title: "Vui lòng đăng nhập!",
                icon: "warning",
                didOpen: () => {
                    MySwal.showLoading();
                },
                timer: 2000,
            });
        } else {
            const productInCart = {
                maMonAn: data.maMonAn, 
                tenMonAn: data.tenMonAn,
                hinhAnhMonAn: data.hinhAnhMonAn,
                giaTien: data.giaTien,
                count,
            }
            await setCount(count + 1)
            console.log(productInCart)
            await localStorage.setItem(`gioHang${data.maMonAn}`, JSON.stringify(productInCart))
            await MySwal.fire({
                title: "Thêm thành công vào giỏ hàng!",
                icon: "success",
                didOpen: () => {
                    MySwal.showLoading();
                },
                timer: 1000,
            });
            // window.location.reload()
        }
    };
    
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('product-image')} src={data.hinhAnhMonAn}></Image>
            <div className={cx('name-favorite-container')}>
                <div className={cx('product-name')}>{data.tenMonAn}</div>
                <div onClick={handleClick}>
                    {favoriteState === false
                        ?
                            <>
                                <FavoriteBorderIcon sx={{ cursor: 'pointer' }} fontSize='large'></FavoriteBorderIcon>
                            </>
                        :
                            <>
                                <FavoriteIcon sx={{ cursor: 'pointer' }} fontSize='large'></FavoriteIcon>
                            </>
                    }
                </div>
            </div>
            <div className={cx('product-price')}>{data.giaTien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</div>
            <Button primary onClick={handleAddToCart}>
                Add to cart
            </Button>    
        </div>
    )
}

export default Product;
