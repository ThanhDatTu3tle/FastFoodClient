import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import Button from '../Button/Button';
import Image from '../Image/Image';

const cx = classNames.bind(styles)

function Product({ data }) {

    const [favoriteState, setFavoriteState] = useState(false)

    const handleClick = () => {
        if (favoriteState === false) {
            setFavoriteState(true)
        } else if (favoriteState === true) {
            setFavoriteState(false)
        }
    }
    
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('product-image')} src={data.hinhAnhMonAn}></Image>
            <div className={cx('name-favorite-container')}>
                <div className={cx('product-name')}>{data.tenMonAn}</div>
                <div>
                    {favoriteState === false 
                        ? <FavoriteBorderIcon onClick={handleClick} fontSize='large'/>
                        : <FavoriteIcon sx={{ color: '#ff5b6a' }} onClick={handleClick} fontSize='large'/>
                    }
                    
                </div>
            </div>
            
            <div className={cx('product-price')}>{data.giaTien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</div>
            <Button primary>Add to cart</Button>    
        </div>
    )
}

export default Product;
