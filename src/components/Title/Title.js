import classNames from 'classnames/bind';
import styles from './Title.module.scss';

const cx = classNames.bind(styles)

function Title({ content, ...props }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('line-content')}>
        <div className={cx('line')}></div>
        <span className={cx('content')}>{content}</span>
      </div>

      {/* <div className={cx('see-all')}>
        <button className={cx('btn-see-all')}>
          See all 
          <Icon />
        </button>
      </div> */}
    </div>
  )
}

export default Title;
