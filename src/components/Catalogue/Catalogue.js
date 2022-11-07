import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Catalogue.module.scss';

const cx = classNames.bind(styles)

function Catalogue({ children, to, content, active = false, ...props }) {

    const classes = cx('wrapper', {
        active
      })

    return (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
            <div className={classes} {...props}>
                {children}
                <div>{content}</div>
            </div>
        </NavLink>
    )
}

export default Catalogue;
