import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles)

function Footer() {
  return (
    <div className={cx('wrapper')}> 
      

      <div className={cx('copyright')}>
        © 2022 NKĐ All Rights Reserved Site by LDCC
      </div>
    </div>
  )
}

export default Footer;