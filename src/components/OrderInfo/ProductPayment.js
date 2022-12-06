import classNames from "classnames/bind";

import Image from "../Image/Image";
import styles from './ProductPayment.module.scss';

const cx = classNames.bind(styles)

function ProductPayment({ data }) {

  return (
    <div className={cx('wrapper')}>
      <Image className={cx('product-image')} src={data.hinhAnhMonAn}></Image>
      <div className={cx('content')}>
        {data.tenMonAn}
        <div className={cx('price')}>
          {data.giaTien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ
           x {data.count}
        </div>
      </div>
    </div>
  )
}

export default ProductPayment;
