import classNames from 'classnames/bind';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";

import styles from './SideBar.module.scss';
import Button from '../../components/Button';
import config from '../../config';

const cx = classNames.bind(styles)

function SideBar() {

  const handleLogOut = async () => {
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

  const MySwal = withReactContent(Swal);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('logo')}>
        LOGO
      </div>

      <div className={cx('menu-category')}>
        <Button primary className={cx('btn')} to={config.routes.admin}>
          <DashboardIcon sx={{ marginRight: '5px' }}/>
          <span></span>
          Dashboard
        </Button>
        <Button primary className={cx('btn')} to={config.routes.products}>
          <FastfoodIcon sx={{ marginRight: '5px' }}/>
          Món ăn
        </Button>
        <Button primary className={cx('btn')} to={config.routes.category}>
          <CategoryIcon sx={{ marginRight: '5px' }}/>
          Danh mục món ăn
        </Button>
        <Button primary className={cx('btn')} to={config.routes.users}>
          <PeopleAltIcon sx={{ marginRight: '5px' }}/>
          Khách hàng
        </Button>
        <Button primary className={cx('btn')} onClick={handleLogOut}>
          <LogoutIcon sx={{ marginRight: '5px', cursor: 'pointer' }}/>
          Đăng xuất
        </Button>
      </div>
    </div>
  )
}

export default SideBar;
