import { useState } from 'react';
import classNames from "classnames/bind";

import styles from './Pay.module.scss';
import Title from '../../components/Title/Title';
import Image from "../../components/Image/Image";
import AddressPayment from "../../layouts/components/AddressPayment/AddressPayment";
import Coupon from '../../components/Coupon/Coupon';
import OrderInfo from '../../components/OrderInfo/OrderInfo';

const cx = classNames.bind(styles)

function Pay() {

  const [status, setStatus] = useState(false)

  const maDiaChi = localStorage.getItem('maDiaChiGiaoHang')
  const diaChi = localStorage.getItem('diaChiGiaoHang')
  const tenDiaChi = localStorage.getItem('tenDiaChiGiaoHang')

  const email = localStorage.getItem('email')
  const hoTen = localStorage.getItem('hoTen')
  const soDienThoai = localStorage.getItem('soDienThoai')
  const matKhau = localStorage.getItem('matKhau')
  const hinhAnh = localStorage.getItem('hinhAnh')

  const content = {
    "maDiaChi": maDiaChi,
    "diaChi": diaChi,
    "tenDiaChi": tenDiaChi,
    "email": {
      "email": email,
      "hoTen": hoTen,
      "soDienThoai": soDienThoai,
      "matKhau": matKhau,
      "hinhAnh": hinhAnh,
    }
  }

  const handleClickCash = () => {
    if (status === false) {
      setStatus(status)
    } else {
      setStatus(!status)
    }
  }
  
  const handleClickCard = () => {
    if (status === true) {
      setStatus(status)
    } else {
      setStatus(!status)
    }
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('left-container')}>
        <Title content={'LỰA CHỌN PHƯƠNG THỨC THANH TOÁN'}/>

        <div className={cx('payment-method')}>
          { status === false
            ?
              <>
                <div className={cx('payment-cash')} onClick={handleClickCash}>
                  <h5>TIỀN MẶT</h5>
                  <Image className={cx('cash-image')} src={'https://cdn-icons-png.flaticon.com/512/2489/2489756.png'}></Image>
                </div>
              </>
            :
              <>
                <div className={cx('payment-cash-unhover')} onClick={handleClickCash}>
                  <h5>TIỀN MẶT</h5>
                  <Image className={cx('cash-image')} src={'https://cdn-icons-png.flaticon.com/512/2489/2489756.png'}></Image>
                </div>
              </>
          }

          { status === true
            ?
              <>
                <div className={cx('payment-card')} onClick={handleClickCard}>
                  <h5>THẺ NGÂN HÀNG</h5>
                  <Image className={cx('cash-image')} src={'https://icons-for-free.com/iconfiles/png/512/credit+card+debit+card+master+card+icon-1320184902602310693.png'}></Image>
                </div>
              </>
            :
              <>
                <div className={cx('payment-card-unhover')} onClick={handleClickCard}>
                  <h5>THẺ NGÂN HÀNG</h5>
                  <Image className={cx('cash-image')} src={'https://icons-for-free.com/iconfiles/png/512/credit+card+debit+card+master+card+icon-1320184902602310693.png'}></Image>
                </div>
              </>
          }
        </div>

        <div className={cx('voucher')}> 
          <Coupon></Coupon>
        </div>
      </div>

      <div className={cx('right-container')}>
        <AddressPayment content={content}/>

        <OrderInfo></OrderInfo>
      </div>
    </div>
  )
}

export default Pay;
