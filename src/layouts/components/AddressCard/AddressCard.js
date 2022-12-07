import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";


import styles from './AddressCard.module.scss';
import Button from '../../../components/Button';

const cx = classNames.bind(styles)

function AddressCard({ content }) {

  const [status, setStatus] = useState(false)

  const MySwal = withReactContent(Swal);

  const handleClick = async () => {
    const diaChiGiaoHang = localStorage.getItem('diaChiGiaoHang')

    if (status === false && diaChiGiaoHang === '') {
      setStatus(true)
      await localStorage.setItem('maDiaChiGiaoHang', content.maDiaChi)
      await localStorage.setItem('diaChiGiaoHang', content.diaChi)
      await localStorage.setItem('tenDiaChiGiaoHang', content.tenDiaChi)
    } else if (status === false && diaChiGiaoHang !== '') {
      
      await MySwal.fire({
        title: "Vui lòng hủy bỏ địa chỉ đã chọn!",
        icon: "error",
        didOpen: () => {
            MySwal.showLoading();
        },
        timer: 3000,
      });

    } 
  }

  const handleCancel = () => {
    if (status === true) {
      setStatus(false)
      localStorage.setItem('diaChiGiaoHang', '')
      localStorage.setItem('tenDiaChiGiaoHang', '')
    }
  }

  return (
    <>
      { status === false
        ?
          <>
            <div className={cx('wrapper')}>
              <h3>Giao hàng đến</h3>

              <div className={cx('info')}>
                <span>{content.diaChi}</span>
                <span>{content.tenDiaChi}</span>
              </div>

              <p>---------------------------------------------</p>

              <h5>
                Thời gian tiếp nhận đơn hàng từ
                08:00 đến 21:00 hằng ngày
              </h5>

              <Button primary onClick={handleClick}>Chọn</Button>
              
            </div>
          </>
        :
        <>
          <div className={cx('wrapper-hover')}>
            <h3>Giao hàng đến</h3>

            <div className={cx('info')}>
              <span>{content.diaChi}</span>
              <span>{content.tenDiaChi}</span>
            </div>

            <p>---------------------------------------------</p>

            <h5>
              Thời gian tiếp nhận đơn hàng từ
              08:00 đến 21:00 hằng ngày
            </h5>

            <Button primary onClick={handleClick}>Chọn</Button>
            <br />
              { status === true
                ?
                  <>
                    <Button primary onClick={handleCancel}>Hủy</Button>
                  </>
                :
                  <>
                  </>
              }
          </div>
        </>
      }
    </>

    
  )
}

export default AddressCard;
