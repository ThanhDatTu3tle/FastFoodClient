import * as React from 'react';
import classNames from "classnames/bind";
import styles from './CheckoutLayout.module.scss';
import Header from '../../pages/Checkout/Header';
import Footer from '../../pages/Checkout/Footer';

const cx = classNames.bind(styles)

function CheckoutLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <div className={cx('content')}>{children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default CheckoutLayout;
