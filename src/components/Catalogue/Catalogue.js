import classNames from 'classnames/bind';
import styles from './Catalogue.module.scss';

const cx = classNames.bind(styles)

function Catalogue({ image, content, ...props }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('image')}>{image}</div>
            <div>{content}</div>
        </div>
    )
}

export default Catalogue;
