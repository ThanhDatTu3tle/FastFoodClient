import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import Image from '../../components/Image/Image';
import Button from '../../components/Button';

import config from '../../config';

const cx = classNames.bind(styles)

function SideBar() {

  const userName = localStorage.getItem('hoTen')
  const avatar = localStorage.getItem('hinhAnh')

  return (
    <div className={cx('wrapper')}>
      <Image
        className={cx('avatar')}
        src={avatar}
        alt="acc-icon"
        // fallback
      >
      </Image>
      {userName}

      <Button className={cx('btn')} to={config.routes.information}>Account information</Button>
      <Button className={cx('btn')} to={config.routes.shippingaddress}>Shipping address</Button>
      <Button className={cx('btn')} to={config.routes.shippingaddress}>Order history</Button>
      <Button className={cx('btn')} to={config.routes.shippingaddress}>My menu / wishlist</Button>
      <Button className={cx('btn')} to={config.routes.shippingaddress}>Sign out</Button>
    </div>
  )
}

export default SideBar;