import classNames from "classnames/bind";

import styles from './Pay.module.scss';
import Title from '../../components/Title/Title';
import AddressCard from "../../layouts/components/AddressCard/AddressCard";

const cx = classNames.bind(styles)

function Pay() {

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

  return (
    <div className={cx('wrapper')}>
      <div className={cx('left-container')}>
        <Title content={'LỰA CHỌN PHƯƠNG THỨC THANH TOÁN'}/>

        <div className={cx('payment-method')}>
          <div>TIỀN MẶT</div>
          <div>THẺ NGÂN HÀNG</div>
        </div>

        <div className={cx('voucher')}> 

        </div>
      </div>

      <div className={cx('right-container')}>
        <AddressCard content={content}/>
      </div>
    </div>
  )
}

export default Pay;
