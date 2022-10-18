import { useState } from 'react';
import classNames from 'classnames/bind';
import Backdrop from '@mui/material/Backdrop';

import styles from './Options.module.scss';
import ButtonCricle from '../../../components/ButtonCricle/ButtonCricle';
import Image from '../../../components/Image/Image';
import RegisterForm from '../../../pages/RegisterForm/RegisterForm';

const cx = classNames.bind(styles);

function Options() {

  const [open, setOpen] = useState(false);
  // const handleClose = () => {
  //   setOpen(false);
  // };
  const handleToggle = () => {
    setOpen(true);
  };

  return (
    <div className={cx('wrapper')}>
      <ButtonCricle>
        <Image
          className={cx('pos-icon')}
          src="https://www.lotteria.vn/grs-static/images/icon-pos-2.svg"
          alt="pos-icon"
          // fallback
        >
        </Image>
      </ButtonCricle>
      <ButtonCricle onClick={handleToggle}>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          // onClick={handleClose}
        >
          <RegisterForm />
        </Backdrop>
        <Image
          className={cx('acc-icon')}
          src="https://www.lotteria.vn/grs-static/images/icon-myaccount.svg"
          alt="acc-icon"
          // fallback
        >
          {/* <Link to={config.routes.promotion}></Link> */}
        </Image>
      </ButtonCricle>
      <ButtonCricle>
        <Image
          className={cx('notification-icon')}
          src="https://www.lotteria.vn/grs-static/images/icon-notification.svg"
          alt="notification-icon"
          // fallback
        />
      </ButtonCricle>
      <ButtonCricle>
        <Image
          className={cx('cart-icon')}
          src="https://www.lotteria.vn/grs-static/images/icon-cart.svg"
          alt="cart-icon"
          // fallback
        />
      </ButtonCricle>
    </div>
  );
}

export default Options;
