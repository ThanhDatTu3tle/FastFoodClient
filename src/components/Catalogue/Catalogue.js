import classNames from 'classnames/bind';
import styles from './Catalogue.module.scss';

const cx = classNames.bind(styles)

function Catalogue({ children, content, ...props }) {
    return (
        <div className={cx('wrapper')}>
            {children}
            <div>{content}</div>
        </div>
    )
}

export default Catalogue;
