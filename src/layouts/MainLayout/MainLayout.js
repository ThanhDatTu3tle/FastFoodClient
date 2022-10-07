import * as React from 'react';
import classNames from "classnames/bind";
import styles from './MainLayout.module.scss';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const cx = classNames.bind(styles)

function MainLayout({ children }) {
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

export default MainLayout;
