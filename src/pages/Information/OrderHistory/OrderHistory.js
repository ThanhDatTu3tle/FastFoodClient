import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";

import styles from './OrderHistory.module.scss';
import config from '../../../config';
import SideBar from '../SideBar';
import OrderHis from '../../../components/OrderHistory/OrderHis';
import Image from '../../../components/Image/Image';
import ProductPayment from '../../../components/OrderInfo/ProductPayment';
import Button from '../../../components/Button';

const cx = classNames.bind(styles)

function OrderHistory() {

  const MySwal = withReactContent(Swal);

  const email = localStorage.getItem('email')
  const emailResult = email.replace('@', '%40')

  const hoTen = localStorage.getItem('hoTen')
  const soDienThoai = localStorage.getItem('soDienThoai')
  const maDatHang = localStorage.getItem('maChiTietDonHang')
  const ngayDat = localStorage.getItem('ngayDat')
  const gioDat = localStorage.getItem('gioDat')
  const diaChi = localStorage.getItem('diaChiGiaoHang')
  const thanhTien = localStorage.getItem('thanhTien')

  const [products, setProducts] = useState([])
  const [orders, setOrders] = useState([])

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
      fetch(`http://localhost:3001/order/${emailResult}`)
          .then((response) => response.json())
          .then((data) => {
            setOrders(data)
          });
  }, [])

  orders.map((x) => {
    if (x.maChiTietDonHang === maDatHang) {
      localStorage.setItem('gioDat', x.gioDat)
      localStorage.setItem('ngayDat', x.ngayDat)
      localStorage.setItem('diaChiGiaoHang', x.maDiaChi.diaChi)
      localStorage.setItem('thanhTien', x.thanhTien)
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

  const handleBackToMyOrder = () => {
    localStorage.setItem('gioDat', '')
    localStorage.setItem('ngayDat', '')
    localStorage.setItem('diaChiGiaoHang', '')
    localStorage.setItem('thanhTien', '')

    window.location.href = 'http://localhost:3002/information/order-history'
  }

  return (
    <>
      { window.location.href === 'http://localhost:3002/information/order-history'
        ?
          <>
            <div className={cx('wrapper')}>
              <SideBar />
              <div className={cx('content')}>
                <div className={cx('title')}>
                  ORDER HISTORY
                </div>
                <div className={cx('line')}></div>
                <div className={cx('titles')}>
                  <div className={cx('id-order')}>Mã đơn hàng</div>
                  <div className={cx('address')}>Địa chỉ giao hàng</div>
                  <div className={cx('time')}>Ngày giờ đặt hàng</div>
                  <div className={cx('price')}>Thành tiền</div>
                </div>
                {orders.map((data) => (
                  <OrderHis key={data.maChiTietDonHang} data={data}/>
                ))} 
              </div>
            </div>
          </>
        :
          <>
            <div className={cx('wrapper')}>
              <SideBar />
              <div className={cx('content')}>
                <div className={cx('title')}>
                  ORDER DETAIL
                </div>
                <div className={cx('line')}></div>
                  <div className={cx('status')}>
                    <div className={cx('ordering')}>
                      <div className={cx('icon')}>
                        <Image src={'https://www.lotteria.vn/grs-static/images/icon-order.svg'}></Image>
                      </div>
                      <h3>Hoàn tất đặt hàng</h3>
                      <p>Lúc {gioDat}</p>
                    </div>
                    
                    <div className={cx('preparing')}>
                      <div className={cx('icon')}>
                        <Image src={'https://www.lotteria.vn/grs-static/images/icon-checked.svg'}></Image>
                      </div>
                      <h3>Chuẩn bị món ăn</h3>
                      <p>Lúc {gioDat}</p>
                    </div>

                    <div className={cx('shipping')}>
                      <div className={cx('icon')}>
                        <Image src={'https://www.lotteria.vn/grs-static/images/icon-shipping.svg'}></Image>
                      </div>
                      <h3>Đang giao hàng</h3>
                      <p>Lúc {}</p>
                    </div>

                    <div className={cx('done')}>
                      <div className={cx('icon')}>
                        <Image src={'https://www.lotteria.vn/grs-static/images/icon-delivered.svg'}></Image>
                      </div>
                      <h3>Hoàn tất giao hàng</h3>
                      <p>Lúc {}</p>
                    </div>
                  </div>
                  <br />
                  <div className={cx('line')}></div>

                  <div className={cx('user-info')}>
                    <div className={cx('left-info')}>
                      <h4>{hoTen}</h4>
                      <p>{diaChi}</p>
                      <p>Phone: {soDienThoai}</p>
                    </div>

                    <div className={cx('line-ver')}></div>

                    <div className={cx('right-info')}>
                      <div className={cx('titles')}>
                        <h4>Mã đặt hàng: </h4>
                        <h4>Ngày đặt hàng: </h4>
                        <h4>Phương thức thanh toán: </h4>
                      </div>

                      <div className={cx('info')}>
                        <p>{maDatHang}</p>
                        <p>{ngayDat} {gioDat}</p>
                        <p>Tiền mặt</p>
                      </div>

                    </div>
                  </div> 

                  <div className={cx('titles-product')}>
                    <div className={cx('product-name')}>
                      <h4>Món ăn</h4>
                    </div>
                    <div className={cx('product-total')}>
                      <h4>Tổng tiền</h4>
                    </div>
                  </div> 

                  <div className={cx('products')}>
                    <div className={cx('product-name')}>
                      {
                        productsInCart.map((data) => (
                          <ProductPayment key={data.maMonAn} data={data}/>
                        ))
                      }
                    </div>

                    <div className={cx('product-total')}>
                      <p>{thanhTien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + 'đ'}</p>
                    </div>
                  </div> 
                  <br />
                  <div className={cx('line')}></div>

                  <div className={cx('footer')}>
                    <div className={cx('footer-left')}>
                      <Button outline>Re-Order</Button>
                      <br />
                      <Button primary onClick={handleBackToMyOrder}>Back to my order</Button>
                    </div>

                    <div className={cx('footer-right')}>
                      <div className={cx('titles')}>
                        <h4>Tổng cộng: </h4>
                        <h4>shipping fee: </h4>
                        <h4>Discount code: </h4>
                        <h4>Totals: </h4>
                      </div>

                      <div className={cx('info')}>
                        <p>{thanhTien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + 'đ'}</p>
                        <p>Free delivery</p>
                        <p>0đ</p>
                        <p>{thanhTien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + 'đ'}</p>
                      </div>
                    </div>

                  </div>
              </div>
            </div>
          </>
      }
    </>
  )
}

export default OrderHistory;
