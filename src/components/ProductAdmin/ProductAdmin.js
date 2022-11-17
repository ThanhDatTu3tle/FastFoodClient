import { useState } from 'react';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Backdrop from '@mui/material/Backdrop';

import classNames from 'classnames/bind';
import styles from './ProductAdmin.module.scss';
import Button from '../Button/Button';
import Image from '../Image/Image';
import LoginForm from '../../layouts/components/LoginForm/LoginForm';

const cx = classNames.bind(styles)

function ProductAdmin({ data }) {

    // const [favoriteState, setFavoriteState] = useState(false)
    const [open, setOpen] = useState(false)

    // const handleClick = () => {
    //     if (open === false) {
    //         setOpen(!open);
    //     } 

    //     // if (favoriteState === false) {
    //     //     setFavoriteState(true)
    //     // } else if (favoriteState === true) {
    //     //     setFavoriteState(false)
    //     // }
    // }

    const handleToggle = () => {

        if (open === false) {
            setOpen(!open);
        } 
    };
    
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('product-image')} src={data.hinhAnhMonAn}></Image>
            <div className={cx('name-favorite-container')}>
                <div className={cx('product-name')}>{data.tenMonAn}</div>
                <div>
                    <FavoriteBorderIcon sx={{ cursor: 'pointer' }} onClick={handleToggle} fontSize='large'>
                        <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={open}
                        >
                            <LoginForm onClick={() => {
                                setOpen(false)
                            }} />
                        </Backdrop>
                    </FavoriteBorderIcon>
                </div>
            </div>
            <div className={cx('product-price')}>{data.giaTien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</div>
            <Button primary onClick={handleToggle}>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                >
                    <LoginForm onClick={() => {
                        setOpen(false)
                    }} />
                </Backdrop>
                Add to cart
            </Button>    
        </div>
    )
}

export default ProductAdmin;
