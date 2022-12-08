import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import Image from '../../components/Image/Image';
import Button from '../../components/Button';
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";

import config from '../../config';

const cx = classNames.bind(styles)

function SideBar() {

  const userName = localStorage.getItem('hoTen')
  const avatar = localStorage.getItem('hinhAnh')

  const MySwal = withReactContent(Swal);

  const handleSignOut = async () => {
    localStorage.removeItem('email')
    localStorage.removeItem('hoTen')
    localStorage.removeItem('soDienThoai')
    localStorage.removeItem('hinhAnh')
    localStorage.removeItem('matKhau')
    localStorage.removeItem('tenDiaChi')
    localStorage.removeItem('diaChi')
    localStorage.removeItem('diaChiGiaoHang')
    localStorage.removeItem('gioDat')
    localStorage.removeItem('ngayDat')
    localStorage.removeItem('thanhTien')
    localStorage.removeItem('maChiTietDonHang')
    localStorage.removeItem('maDiaChiGiaoHang')
    localStorage.removeItem('tenDiaChiGiaoHang')
    localStorage.removeItem('numberOfProductsInCart')
    

    await MySwal.fire({
      title: "Đăng xuất thành công",
      icon: "success",
      didOpen: () => {
          MySwal.showLoading();
      },
      timer: 1000,
    });
    window.location.href = "/home";
  }

  return (
    <div className={cx('wrapper')}>
      <Image
        className={cx('avatar')}
        src={avatar}
        fallback='https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg'
        alt="acc-icon"
      >
      </Image>
      {userName}

      <Button className={cx('btn')} to={config.routes.information}>Account information</Button>
      <Button className={cx('btn')} to={config.routes.shippingaddress}>Shipping address</Button>
      <Button className={cx('btn')} to={config.routes.orderhistory}>Order history</Button>
      <Button className={cx('btn')} to={config.routes.wishlist}>My menu / wishlist</Button>
      <Button className={cx('btn')} onClick={handleSignOut}>Sign out</Button>
    </div>
  )
}

export default SideBar;