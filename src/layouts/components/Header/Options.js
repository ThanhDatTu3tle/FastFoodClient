import { useState } from 'react';
import classNames from 'classnames/bind';
import Backdrop from '@mui/material/Backdrop';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Options.module.scss';
import ButtonCricle from '../../../components/ButtonCricle/ButtonCricle';
import Image from '../../../components/Image/Image';
import LoginForm from '../LoginForm/LoginForm';
import config from '../../../config';
import Button from '../../../components/Button';
import { Wrapper as PopperWrapper } from '../../../components/Popper';
import MoreInfoMenu from '../../../components/Popper/Menu/MoreInfoMenu';
import Cart from '../Cart/Cart';

const cx = classNames.bind(styles);

function Options({ items = [], children, hideOnClick = false }) {

  const [open, setOpen] = useState(false)

  const handleToggle = () => {

    if (open === false) {
      setOpen(!open);
    } 
  };
  
  const userName = localStorage.getItem('hoTen')
  const avatar = localStorage.getItem('hinhAnh')

  const handleClick = () => {
    console.log('Khang ngu')
  }

  return (
    <div className={cx('wrapper')}>  
      {userName 
        ? (
          <>
            <ButtonCricle onClick={handleToggle}>
              <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
              >
                <Cart onClick={() => {
                  setOpen(false)
                }} />
              </Backdrop>
              <Image
                className={cx('notification-icon')}
                src="https://www.lotteria.vn/grs-static/images/icon-notification.svg"
                alt="notification-icon"
              />
            </ButtonCricle>

            <ButtonCricle onClick={handleToggle} className={cx('cart')}>
              <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
              >
                <Cart onClick={() => {
                  setOpen(false)
                }} />
              </Backdrop>
              <div className={cx('number-of-products')}>
                {localStorage.getItem('numberOfProductsInCart')}
              </div>
              <Image
                className={cx('cart-icon')}
                src="https://www.lotteria.vn/grs-static/images/icon-cart.svg"
                alt="cart-icon"
              />

            </ButtonCricle>

            <ButtonCricle to={config.routes.information}>
              <Tippy 
                interactive
                delay={[0, 500]}
                placement={'bottom-end'}
                hideOnClick={hideOnClick}
                onHide={false}
                offset={[32, 16]}
                render={(attrs) => (
                  <div className={cx('popper-info')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                      <MoreInfoMenu data={items} onClick={handleClick} >
                        Account information
                      </MoreInfoMenu>

                      <MoreInfoMenu data={items}>
                        Shipping address
                      </MoreInfoMenu>

                      <MoreInfoMenu data={items}>
                        Order history
                      </MoreInfoMenu>
                    </PopperWrapper>
                  </div>
                )}
              >
                {avatar !== 'avatar' 
                  ? (
                    <>
                      <Image
                        className={cx('acc-avatar')}
                        src={avatar}
                        alt="acc-icon"
                        // fallback
                      >
                      </Image>
                    </>
                  )
                  : (
                    <>
                      <Image
                        className={cx('acc-icon')}
                        src="https://www.lotteria.vn/grs-static/images/icon-myaccount.svg"
                        alt="acc-icon"
                        // fallback
                      >
                      </Image>
                    </>
                  )
                }
              </Tippy>
            </ButtonCricle>
          </>
        )
        : (
          <>
            <Button primary small onClick={handleToggle}>
              Login
              <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
              >
                <LoginForm onClick={() => {
                  setOpen(false)
                }} />
              </Backdrop>
            </Button>
          </>
        )
      }
    </div>
  );
}

export default Options;
