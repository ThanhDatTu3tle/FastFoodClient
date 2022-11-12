import { useState } from 'react';
import classNames from 'classnames/bind';
import Backdrop from '@mui/material/Backdrop';
// import { createPopper } from '@popperjs/core';
import Tippy from '@tippyjs/react';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

import styles from './Options.module.scss';
import ButtonCricle from '../../../components/ButtonCricle/ButtonCricle';
import Image from '../../../components/Image/Image';
import LoginForm from '../LoginForm/LoginForm';

const cx = classNames.bind(styles);

function Options() {

  const [open, setOpen] = useState(false)

  const handleToggle = () => {

    if (open === false) {
      setOpen(!open);
    } 
  };
  
  const infoUser = localStorage.getItem('email');
  // const posIcon = document.querySelector('#posIcon');
  // const popperInfoUser = document.querySelector('#popper');

  // tippy('#posIcon',{
  //   position:'bottom',
  //   animation:'scale',
  //   arrow:'true',
  //   trigger:'click'
  // });

  return (
    <div className={cx('wrapper')}>
      <ButtonCricle onClick={handleToggle}>
        {infoUser !== null
          ? (
            <>
              <Tippy content='Map'>
                  <Image
                    className={cx('pos-icon')}
                    src="https://www.lotteria.vn/grs-static/images/icon-pos-2.svg"
                    alt="pos-icon"
                    // fallback
                  >
                  </Image>
              </Tippy>
            </>
          )
          : (
            <>
              <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
              >
                <LoginForm onClick={() => {
                  setOpen(false)
                }} />
              </Backdrop>
            </>
          )
        }
      </ButtonCricle>
      
      <ButtonCricle onClick={handleToggle}>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <LoginForm onClick={() => {
            setOpen(false)
          }} />
        </Backdrop>
        <Image
          className={cx('acc-icon')}
          src="https://www.lotteria.vn/grs-static/images/icon-myaccount.svg"
          alt="acc-icon"
          // fallback
        >
        </Image>
      </ButtonCricle>
      <ButtonCricle onClick={handleToggle}>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <LoginForm onClick={() => {
            setOpen(false)
          }} />
        </Backdrop>
        <Image
          className={cx('notification-icon')}
          src="https://www.lotteria.vn/grs-static/images/icon-notification.svg"
          alt="notification-icon"
          // fallback
        />
      </ButtonCricle>
      <ButtonCricle onClick={handleToggle}>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <LoginForm onClick={() => {
            setOpen(false)
          }} />
        </Backdrop>
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
