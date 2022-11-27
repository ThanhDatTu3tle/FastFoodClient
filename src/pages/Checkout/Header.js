import * as React from 'react';
import { Link } from 'react-router-dom';
import classNames from "classnames/bind";

import styles from './Header.module.scss';
import config from '../../config';
import ButtonCricle from '../../components/ButtonCricle/ButtonCricle';

const cx = classNames.bind(styles)

function Header() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('logo-title')}>
          <div className={cx('logo')}>
            <Link to={config.routes.home}>
              LOGO
            </Link>
          </div>

          <div className={cx('status')}>
            <div className={cx('cart')}>
              <ButtonCricle outline></ButtonCricle>
              Giỏ hàng
            </div>

            <div className={cx('line')}></div>

            <div className={cx('payment')}>
              <ButtonCricle ></ButtonCricle>
              Thanh toán
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
