import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './AddressCard.module.scss';
import Button from '../../../components/Button';

const cx = classNames.bind(styles)

function AddressCard({ content }) {

  // console.log(address[0])
  // const addressArr = address.slice

  const [status, setStatus] = useState(false)

  const handleClick = () => {
    setStatus(true)
  }

  return (
    <>
      { status === false
        ?
          <>
            <div className={cx('wrapper')}>
              <h3>Giao hàng đến</h3>

              <div className={cx('info')}>
                <span>{content.diaChi}</span>
                <span>{content.tenDiaChi}</span>
              </div>

              <p>---------------------------------------------</p>

              <h5>
                Thời gian tiếp nhận đơn hàng từ
                08:00 đến 21:00 hằng ngày
              </h5>

              <Button primary onClick={handleClick}>Chọn</Button>
            </div>
          </>
        :
        <>
          <div className={cx('wrapper-hover')}>
            <h3>Giao hàng đến</h3>

            <div className={cx('info')}>
              <span>{content.diaChi}</span>
              <span>{content.tenDiaChi}</span>
            </div>

            <p>---------------------------------------------</p>

            <h5>
              Thời gian tiếp nhận đơn hàng từ
              08:00 đến 21:00 hằng ngày
            </h5>

            <Button primary onClick={handleClick}>Chọn</Button>
          </div>
        </>
      }
    </>

    
  )
}

export default AddressCard;
