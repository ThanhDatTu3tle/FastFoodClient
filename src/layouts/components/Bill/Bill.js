import classNames from 'classnames/bind';
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";

import styles from './Bill.module.scss';
import Title from '../../../components/Title/Title';
import Button from '../../../components/Button';
import config from '../../../config';

const cx = classNames.bind(styles)

function Bill() {

  const total = localStorage.getItem('total')

  const MySwal = withReactContent(Swal);

  const handleBtnContinue = async () => {

    if (window.location.href === 'http://localhost:3002/pay') {
      await MySwal.fire({
          title: "Cảm ơn quý khách đã mua hàng!",
          icon: "success",
          didOpen: () => {
              MySwal.showLoading();
          },
          timer: 2000,
      });
      window.location.href = `http://localhost:3002/information/order-history`;
    } else if (localStorage.getItem('diaChiGiaoHang') === '') {
      await MySwal.fire({
          title: "Vui lòng chọn địa chỉ giao hàng!",
          icon: "error",
          didOpen: () => {
              MySwal.showLoading();
          },
          timer: 2000,
      });
    } else {
      localStorage.setItem('maKhuyenMai', 'MKM-000001')
      await MySwal.fire({
          title: "Chốt đơn thành công",
          icon: "success",
          didOpen: () => {
              MySwal.showLoading();
          },
          timer: 2000,
      });
      window.location.href = `${config.routes.pay}`;
    }
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('total')}>
        <p>Tổng cộng</p>
        <p>{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</p> 
      </div>

      <div className={cx('shipping-fee')}>
        <p>Phí giao hàng</p>
        <p>0đ</p> 
      </div>

      <p>---------------------------------------------</p>

      <div className={cx('price')}>
        <h5>Tạm tính</h5>
        <p>{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</p> 
      </div>

      <Button className={cx('btn-continue')} onClick={handleBtnContinue}>Tiếp tục</Button>
    </div>
  )
}

export default Bill;
