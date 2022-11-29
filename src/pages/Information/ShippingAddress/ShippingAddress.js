import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import axios from 'axios';
import Backdrop from '@mui/material/Backdrop';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './ShippingAddress.module.scss';
import SideBar from '../SideBar';
import Title from '../../../components/Title/Title';
import Button from '../../../components/Button';
import AddressForm from '../../../layouts/components/AddressForm/AddressForm';

const cx = classNames.bind(styles)

function ShippingAddress() {

  const email = localStorage.getItem('email')
  const resultEmail = email.replace('@', '%40')

  const [address, setAddress] = useState([])

  axios.get(`http://localhost:3001/address/${resultEmail}`)
  .then(function (response) {
    const arrAddress = response.data
    setAddress(arrAddress)
  })
  .catch(function (error) {
    console.log(error);
  })

  const [open, setOpen] = useState(false)

  const handleBtnAdd = () => {

    if (open === false) {
      setOpen(!open);
    } 
  };

  const handleBtnFix = () => {
    
  }

  const handleBtnDelete = () => {
    
  }

  return (
    <div className={cx('wrapper')}>
      <SideBar />
      <div className={cx('content')}>
        <div className={cx('title')}>
          SHIPPING ADDRESS
          <Button small onClick={handleBtnAdd}>
            Thêm
              <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
              >
                <AddressForm onClick={() => {
                  setOpen(false)
                }} />
              </Backdrop>
          </Button>
        </div>
        <div className={cx('line')}></div>
        
        <div className={cx('container')}>
          <div className={cx('address')}>
            {address.map((data) => (
              <>
                <div className={cx('info-address')}>
                  <div className={cx('details')}>
                    <Title content={data.tenDiaChi}/>
                    <p>{data.diaChi}</p>
                  </div>
                  <Button small onClick={handleBtnFix}>Chỉnh sửa</Button>
                </div>
              
                <Button primary onClick={handleBtnDelete}>Xóa</Button>
              </>

            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShippingAddress;
