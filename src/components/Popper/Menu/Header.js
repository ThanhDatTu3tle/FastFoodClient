import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles)

function Header({ title, onBack }) {

  return (
    <header className={cx('header')}>
      <button className={cx('back-btn')} onClick={onBack}>
        <img src={images.icon_back} alt='back'/>
        <h4 className={cx('header-title')}>{title}</h4>
      </button>
    </header>
  )
}

export default Header;
