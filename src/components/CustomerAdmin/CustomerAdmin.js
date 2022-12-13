import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import classNames from 'classnames/bind';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

import styles from './CustomerAdmin.module.scss';
import Button from '../Button';
import EditCustomerForm from '../../layouts/components/EditCustomerForm/EditCustomerForm';

const cx = classNames.bind(styles)

function CustomerAdmin({ data }) {

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
      <div className={cx('content')}>
        <div className={cx('phone-number')}>{data.soDienThoai}</div>
        <div className={cx('avatar')}>{data.hinhAnh}</div>
        <div className={cx('name')}>{data.hoTen}</div>
        <div className={cx('email')}>{data.email}</div>
        <div className={cx('active')}><CheckCircleIcon /></div>
        <Button primary small onClick={handleToggle}>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <EditCustomerForm data={data} onClick={() => {
                    setOpen(false)
                }} />
            </Backdrop>
            <DensityMediumIcon />
        </Button>
      </div>


      <div className={cx('line')}></div>
    </div>
  )
}

export default CustomerAdmin;
