import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './OrderInfo.module.scss';
import ProductPayment from './ProductPayment';
import Bill from '../../layouts/components/Bill/Bill';

const cx = classNames.bind(styles)

function OrderInfo() {

  const [products, setProducts] = useState([])
  const voucher = localStorage.getItem('gioHangMKN-000001')

  const ids = products.map(product => { // lấy ra mảng các id từ products => dùng tính counts
    return product.maMonAn;
  })
  const counts = ids.map(id => { // lấy ra mảng các thông tin products đc add to cart
    if (id !== null) {
      return JSON.parse(localStorage.getItem(`gioHang${id}`))
    }
  })
  const productsInCart = [
    {
      "maMonAn": "MMA-030001",
      "tenMonAn": "Shake Potato",
      "hinhAnhMonAn": "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/d/e/dessert-534x374px_shake-potato.png",
      "moTaChiTiet": "Ngon dữ vậy trời!!!",
      "giaTien": 0,
      "yeuThich": false,
      "maDanhMuc": {
        "maDanhMuc": "MDM04",
        "tenDanhMuc": "Dessert",
        "hinhAnh": "https://www.lotteria.vn/media/catalog/tmp/category/BG-Menu-09_2.jpg"
      }
    },
  ]
  counts.map(count => {
    if (count !== null) {
      productsInCart.push(count)
    }
  })

  useEffect(() => {
      fetch('http://localhost:3001/products')
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
              setProducts(data)
          });
  }, [])

  return (
    <div className={cx('wrapper')}>
      <h3>ORDER INFORMATION</h3>
      {
        productsInCart.map((data) => (
          <ProductPayment key={data.maMonAn} data={data}/>
        ))
      }
      {/* <ProductPayment data={voucher}/> */}
      <Bill />
    </div>
  )
}

export default OrderInfo
