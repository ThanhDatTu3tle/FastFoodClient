import { DateRange } from "@mui/icons-material";
import classNames from "classnames/bind";
import Button from "../../../components/Button/Button";
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";


import Image from "../../../components/Image/Image";
import styles from './ProductCard.module.scss';

const cx = classNames.bind(styles)

function ProductCard({ data }) {

  const MySwal = withReactContent(Swal);
  const numberOfProductsInCart = localStorage.getItem('numberOfProductsInCart')
  const handleRemove = async () => {

    await localStorage.removeItem(`gioHang${data.maMonAn}`)
    await localStorage.setItem('numberOfProductsInCart', numberOfProductsInCart-1)
    window.location.reload()
  }

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

      <Button small onClick={handleRemove}>Delete</Button>
    </div>
  )
}

export default ProductCard;
