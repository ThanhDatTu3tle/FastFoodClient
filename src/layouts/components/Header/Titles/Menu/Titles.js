import classNames from "classnames/bind";
import styles from './Titles.module.scss';

const cx = classNames.bind(styles)

function Titles({ children }) {
    return (
        <div className={cx('wrapper')}> 
            {children}
        </div>
    )
}

export default Titles;
