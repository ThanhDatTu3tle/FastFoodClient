import Button from '../../Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import config from '../../../config';


const cx = classNames.bind(styles)

function MoreInfoMenu({ data, onClick, children }) {
  return (
    // <Button className={cx('info-item', { separate: data.separate, })} onClick={onClick}>
    //   <div className={cx('info-wrapper')}>
    //     <span className={cx('info-icon')}>{data.icon}</span>
    //     {/* <span>{data.title}</span> */}
    //     <span>Account information</span>
    //   </div>
    // </Button>
    <div className={cx('wrapper-moreinfo')}>
      <Button className={cx('info-item', { separate: data.separate, })} primary onClick={onClick}>
        {children}
      </Button>
    </div>
  )
}

export default MoreInfoMenu;
