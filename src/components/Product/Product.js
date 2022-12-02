import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";
import classNames from 'classnames/bind';

import styles from './Product.module.scss';
import Button from '../Button/Button';
import Image from '../Image/Image';
import axios from 'axios';

const cx = classNames.bind(styles)

function Product({ data }) {

    const user = localStorage.getItem('hoTen')
    const maMonAnYeuThich = localStorage.getItem('maMonAnYeuThichCuoi')

    const prefix = maMonAnYeuThich.slice(0, 6)
    const suffix = maMonAnYeuThich.slice(6, 10)
    const arrSuffix = suffix.split('')
    console.log(arrSuffix)
    const lastArrSuffix = arrSuffix[3]
    const nextLastArrSuffix_4 = arrSuffix[2]

    const [favoriteState, setFavoriteState] = useState(Boolean)
    const [count, setCount] = useState(1)

    const handleClick = async () => {

        if (user !== null && favoriteState === false) {
            setFavoriteState(true)

            const productFavorite = {
                maMonAn: data.maMonAn, 
                tenMonAn: data.tenMonAn,
                hinhAnhMonAn: data.hinhAnhMonAn,
                giaTien: data.giaTien,
            }
            await localStorage.setItem(`yeuThich${data.maMonAn}`, JSON.stringify(productFavorite))

            if (arrSuffix[2] === '0' && arrSuffix[3] !== '9') {
                console.log(suffix)
                const arraySuffix = suffix.split('')
                arrSuffix[3] = +arrSuffix[3] + 1
                const newSuffix = arraySuffix.toString().split(',').join('')
                console.log(newSuffix)
                const arrPrefix = prefix.split('')
                const arrNewSuffix = newSuffix.split('')
                const arrResult = arrPrefix.concat(arrNewSuffix).toString().split(',').join('')
        
                localStorage.setItem('maMonAnYeuThichMoi', arrResult)
        
            } else if (arrSuffix[2] === '0' && arrSuffix[3] === '9') {
                arrSuffix[3] = '0'
                const newSuffix = suffix.replace(lastArrSuffix, arrSuffix[5])
        
                const arrNewSuffix = newSuffix.split('')
        
                arrNewSuffix[2] = '1'
                const newwSuffix = arrNewSuffix.toString().split(',').join('')
        
                const arrPrefix = prefix.split('')
                const arrNewwSuffix = newwSuffix.split('')
                const arrResult = arrPrefix.concat(arrNewwSuffix).toString().split(',').join('')
        
                localStorage.setItem('maMonAnYeuThichMoi', arrResult)
            } else if (arrSuffix[2] === '1' && arrSuffix[3] !== '9') {
                const arraySuffix = suffix.split('')
                arraySuffix[3] = +arraySuffix[3] + 1
                const newSuffix = arraySuffix.toString().split(',').join('')
                console.log(newSuffix)
                const arrPrefix = prefix.split('')
                const arrNewSuffix = newSuffix.split('')
                const arrResult = arrPrefix.concat(arrNewSuffix).toString().split(',').join('')
        
                localStorage.setItem('maMonAnYeuThichMoi', arrResult)
            }
        
            const newCodeFavorite = localStorage.getItem('maMonAnYeuThichMoi')
            localStorage.setItem('maMonAnYeuThichCuoi', newCodeFavorite)

            axios.post(`http://localhost:3001/favorite`, {
                maMonAnYeuThich: newCodeFavorite,
                maMonAn: data.maMonAn.maMonAn,
                email: data.email.email,
            })
            .then(function (response) {
                 const arrFavoriteProducts = response.data
                 console.log(arrFavoriteProducts)
                // const arrFavoriteProducts = []
                // for (let i = 0; i < arrProducts.length; i++) {
                //     if (arrProducts[i].yeuThich === true) {
                //     arrFavoriteProducts.push(arrProducts[i])
                //     }
                // }
                // setProducts(arrFavoriteProducts)
            })
                .catch(function (error) {
                console.log(error);
            })

        } else if (user !== null && favoriteState === true) {
            setFavoriteState(false)

            const productFavorite = {
                maMonAn: data.maMonAn, 
                tenMonAn: data.tenMonAn,
                hinhAnhMonAn: data.hinhAnhMonAn,
                giaTien: data.giaTien,
            }
            await localStorage.removeItem(`yeuThich${data.maMonAn}`, JSON.stringify(productFavorite))
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
            await localStorage.setItem(`gioHang${data.maMonAn}`, JSON.stringify(productInCart))
            await MySwal.fire({
                title: "Thêm thành công vào giỏ hàng!",
                icon: "success",
                didOpen: () => {
                    MySwal.showLoading();
                },
                timer: 1000,
            });
        }
    };
    
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('product-image')} src={data.hinhAnhMonAn}></Image>
            <div className={cx('name-favorite-container')}>
                <div className={cx('product-name')}>{data.tenMonAn}</div>
                <div onClick={handleClick}>
                    {localStorage.getItem(`yeuThich${data.maMonAn}`) === null
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
