import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles)

function Footer() {
  return (
    <div className={cx('wrapper')}> 
      <div className={cx('container')}>
        <div className={cx('subscribe-form')}>
          LOGO
        </div>
        <div className={cx('right-content')}>
          <div className={cx('more-info')}>
            <h3>MORE INFORMATION</h3>
            <p>News</p>
            <p>Promotion</p>
            <p>Career Opportunities</p>
            <p>Franchising</p>
          </div>
          <div className={cx('support')}> 
            <h3>SUPPORT</h3>
            <p>NKD's Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Delivery policy</p>
            <p>Customer Care</p>
          </div>
          <div className={cx('follow')}>
            <h3>FOLLOW US</h3>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Zalo</p>
            {/* <p>Franchising</p> */}
          </div>
        </div>
      </div>

      <div className={cx('copyright')}>
        © 2022 NKĐ All Rights Reserved Site by LDCC
      </div>
    </div>
  )
}

export default Footer;