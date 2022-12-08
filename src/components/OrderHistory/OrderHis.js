import classNames from 'classnames/bind';
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";

import styles from './OrderHis.module.scss';
import config from '../../config';

const cx = classNames.bind(styles)

function OrderHis({ data }) {

  const MySwal = withReactContent(Swal);

  const handleClick = async () => {
    localStorage.setItem('gioDat', '')
    localStorage.setItem('ngayDat', '')
    localStorage.setItem('diaChiGiaoHang', '')
    localStorage.setItem('thanhTien', '')
    localStorage.setItem('maChiTietDonHang', data.maChiTietDonHang)
    await MySwal.fire({
        title: "Vui lòng đợi trong giây lát!",
        icon: "success",
        didOpen: () => {
            MySwal.showLoading();
        },
        timer: 2000,
    });
    window.location.href = `http://localhost:3002${config.routes.orderdetail}`
  }

  return (
    <>
      { window.location.href === 'http://localhost:3002/information/order-history'
        ?
          <>
            <div className={cx('wrapper')} onClick={handleClick}>
              <div className={cx('id-order')}>#{data.maChiTietDonHang}</div>
              <div className={cx('address')}>{data.maDiaChi.diaChi}</div>
              <div className={cx('time')}>
                <p>{data.ngayDat}</p>
                <p>{data.gioDat}</p>
              </div>
              <div className={cx('price')}>{data.thanhTien}</div>
            </div>
          </>
        :
          <>
          </>
      }
    </>
  )
}

export default OrderHis;
