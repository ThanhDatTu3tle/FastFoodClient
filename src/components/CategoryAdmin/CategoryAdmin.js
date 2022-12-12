import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import classNames from 'classnames/bind';

import styles from './CategoryAdmin.module.scss';
import Image from '../Image/Image';
import Button from '../Button';
import EditCategoryForm from '../../layouts/components/EditCategoryForm/EditCategoryForm';

const cx = classNames.bind(styles)

function CategoryAdmin({ data }) {
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
            <Image className={cx('category-image')} src={data.hinhAnh}></Image>
            <div className={cx('name-favorite-container')}>
                <div className={cx('category-name')}>{data.tenDanhMuc}</div>
            </div>
            <Button primary small onClick={handleToggle}>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                >
                    <EditCategoryForm data={data} onClick={() => {
                        setOpen(false)
                    }} />
                </Backdrop>
                Chỉnh sửa danh mục
            </Button>
        </div>
    )
}

export default CategoryAdmin;
