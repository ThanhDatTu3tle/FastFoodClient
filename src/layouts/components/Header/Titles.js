import * as React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from './Titles.module.scss';

const cx = classNames.bind(styles)

const titles = [
    {
      id: 1,
      path: '/promotion',
      name: 'Promtion',
    },
    {
      id: 2,
      path: '/ordernow',
      name: 'Order now',
    },
    {
      id: 3,
      path: '/birthday',
      name: 'Birthday',
    }
]

function Titles() {
    return (
        <div>
            <ul className={cx('wrapper')}>
                {titles.map((title) => (
                    <li key={title.id}>
                        <Link to={title.path}>{title.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Titles;
