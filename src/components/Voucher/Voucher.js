import { useState } from 'react';
import classNames from "classnames/bind";

import styles from './Voucher.module.scss';
import Button from "../Button";

const cx = classNames.bind(styles)

function Voucher() {

  const [status, setStatus] = useState(true)

  const handleClick = async () => {
    setStatus(!status)
    const productInCart = {
        maMonAn: 'MMA-030001', 
        tenMonAn: 'Shake Potato',
        // hinhAnhMonAn: data.hinhAnhMonAn,
        giaTien: 0,
    }

    await localStorage.setItem(`gioHangMKN-000001`, JSON.stringify(productInCart))
  }

  const voucherData = [
    {
      "maKhuyenMai": "MKM-000001",
      "tenKhuyenMai": "TANG_KHOAI",
      "chiTietKhuyenMai": "Tặng 1 khoai tây chiên size M",
    },
    // {
    //   "maKhuyenMai": "MKM-000002",
    //   "tenKhuyenMai": "TANG_PHOMAI",
    //   "chiTietKhuyenMai": "Tặng 2 phô mai que",
    // },
    // {
    //   "maKhuyenMai": "MKM-000003",
    //   "tenKhuyenMai": "TANG_GARAN",
    //   "chiTietKhuyenMai": "Tặng 1 Golden Snow Chicken (1Pcs)",
    // },
  ]

  return (
    <>
      {status === false
        ?
          <>
            {voucherData.map((item) => (
              <div className={cx('wrapper')}>
                <h3>{item.tenKhuyenMai}</h3>
                <br />
                <p>{item.chiTietKhuyenMai}</p>
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
            ))}
          </>
        :
          <>
            {voucherData.map((item) => (
              <div className={cx('wrapper-hover')}>
                <h3>{item.tenKhuyenMai}</h3>
                <br />
                <p>{item.chiTietKhuyenMai}</p>
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
            ))}
          </>
      }
    </>
  )
}

export default Voucher;
