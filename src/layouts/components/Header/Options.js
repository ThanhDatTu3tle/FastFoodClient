import * as React from "react";
import classNames from "classnames/bind";

import styles from './Options.module.scss';
import ButtonCricle from "../../../components/ButtonCricle/ButtonCricle";
import Image from "../../../components/Image/Image";

const cx = classNames.bind(styles)

function Options() {
    return (
        <div className={cx('wrapper')}>
            <ButtonCricle>
                <Image 
                    className={cx('pos-icon')}
                    src='https://www.lotteria.vn/grs-static/images/icon-pos-2.svg'
                    alt='pos-icon'
                    // fallback
                />
            </ButtonCricle>
            <ButtonCricle>
                <Image 
                    className={cx('acc-icon')}
                    src='https://www.lotteria.vn/grs-static/images/icon-myaccount.svg'
                    alt='acc-icon'
                    // fallback
                />
            </ButtonCricle>
            <ButtonCricle>
                <Image 
                    className={cx('notification-icon')}
                    src='https://www.lotteria.vn/grs-static/images/icon-notification.svg'
                    alt='notification-icon'
                    // fallback
                />
            </ButtonCricle>
            <ButtonCricle>
                <Image 
                    className={cx('cart-icon')}
                    src='https://www.lotteria.vn/grs-static/images/icon-cart.svg'
                    alt='cart-icon'
                    // fallback
                />
            </ButtonCricle>
        </div>
    )
}

export default Options;
