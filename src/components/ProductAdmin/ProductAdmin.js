import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';

import classNames from 'classnames/bind';
import styles from './ProductAdmin.module.scss';
import Button from '../Button/Button';
import Image from '../Image/Image';
import EditForm from '../../layouts/components/EditForm/EditForm';

const cx = classNames.bind(styles)

function ProductAdmin({ data }) {

    const [open, setOpen] = useState(false)

    const handleToggle = () => {

        if (open === false) {
            setOpen(!open);
            // localStorage.setItem('tenMonAn', data.tenMonAn.toString())
            // localStorage.setItem('giaTien', data.giaTien.toString())
        } 
    };
    
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('product-image')} src={data.hinhAnhMonAn}></Image>
            <div className={cx('name-favorite-container')}>
                <div className={cx('product-name')}>{data.tenMonAn}</div>
            </div>
            <div className={cx('product-price')}>{data.giaTien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</div>  
            <Button primary small onClick={handleToggle}>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 0 }}
                    open={open}
                >
                    <EditForm data={data} onClick={() => {
                        setOpen(false)
                    }} />
                </Backdrop>
                Chỉnh sửa món ăn
            </Button>
        </div>
    )
}

export default ProductAdmin;
