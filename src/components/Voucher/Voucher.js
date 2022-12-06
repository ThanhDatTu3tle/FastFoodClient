import { useState } from 'react';
import classNames from "classnames/bind";

import styles from './Voucher.module.scss';
import Button from "../Button";

const cx = classNames.bind(styles)

function Voucher() {

  const [status, setStatus] = useState(false)

  const handleClick = () => {
    setStatus(!status)
  }

  return (
    <>
      {status === false
        ?
          <>
            <div className={cx('wrapper')}>
              <h3>TANG_KHOAI</h3>
              <br />
              <p>Tặng 1 khoai tây chiên size M</p>
              <br />
              { status === false
                ?
                  <>
                    <Button outline onClick={handleClick}>Chọn</Button>
                  </>
                :
                  <>
                    <Button primary onClick={handleClick}>Hủy chọn</Button>
                  </>
              }
            </div>
          </>
        :
          <>
            <div className={cx('wrapper-hover')}>
              <h3>TANG_KHOAI</h3>
              <br />
              <p>Tặng 1 khoai tây chiên size M</p>
              <br />
              { status === false
                ?
                  <>
                    <Button outline onClick={handleClick}>Chọn</Button>
                  </>
                :
                  <>
                    <Button primary onClick={handleClick}>Hủy chọn</Button>
                  </>
              }
            </div>
          </>
      }
    </>
  )
}

export default Voucher;
