import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";

import styles from "./Bill.module.scss";
import Title from "../../../components/Title/Title";
import Button from "../../../components/Button";
import config from "../../../config";

const cx = classNames.bind(styles);

function Bill({ data }) {
  const total = localStorage.getItem("total");
  const email = localStorage.getItem("email");
  const maDiaChi = localStorage.getItem("maDiaChiGiaoHang");
  const gioDat = localStorage.getItem("gioDat");
  const ngayDat = localStorage.getItem("ngayDat");
  const maChiTietDonHang = localStorage.getItem("maChiTietDonHangCuoi");

  const prefix = maChiTietDonHang.slice(0, 6);
  const suffix = maChiTietDonHang.slice(6, 10);
  const arrSuffix = suffix.split("");
  const lastArrSuffix = arrSuffix[3];

  const MySwal = withReactContent(Swal);

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}order`)
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  const handleBtnContinue = async () => {
    if (
      window.location.href ===
      `${process.env.REACT_APP_SERVER_NESTJS_BASE_URL}pay`
    ) {
      if (arrSuffix[2] === "0" && arrSuffix[3] !== "9") {
        const arraySuffix = suffix.split("");
        arraySuffix[3] = +arraySuffix[3] + 1;
        const newSuffix = arraySuffix.toString().split(",").join("");
        const arrPrefix = prefix.split("");
        const arrNewSuffix = newSuffix.split("");
        const arrResult = arrPrefix
          .concat(arrNewSuffix)
          .toString()
          .split(",")
          .join("");

        localStorage.setItem("maChiTietDonHang", arrResult);
      } else if (arrSuffix[2] === "0" && arrSuffix[3] === "9") {
        arrSuffix[3] = "0";
        const newSuffix = suffix.replace(lastArrSuffix, arrSuffix[3]);
        const arrNewSuffix = newSuffix.split("");
        arrNewSuffix[2] = "1";
        const newwSuffix = arrNewSuffix.toString().split(",").join("");

        const arrPrefix = prefix.split("");
        const arrNewwSuffix = newwSuffix.split("");
        const arrResult = arrPrefix
          .concat(arrNewwSuffix)
          .toString()
          .split(",")
          .join("");

        localStorage.setItem("maChiTietDonHang", arrResult);
      } else if (arrSuffix[2] === "1" && arrSuffix[3] !== "9") {
        const arraySuffix = suffix.split("");
        arraySuffix[3] = +arraySuffix[3] + 1;
        const newSuffix = arraySuffix.toString().split(",").join("");
        const arrPrefix = prefix.split("");
        const arrNewSuffix = newSuffix.split("");
        const arrResult = arrPrefix
          .concat(arrNewSuffix)
          .toString()
          .split(",")
          .join("");

        localStorage.setItem("maChiTietDonHang", arrResult);
      }

      const newCodeOrder = localStorage.getItem("maChiTietDonHang");
      localStorage.setItem("maChiTietDonHang", newCodeOrder);

      await axios
        .post(`${process.env.REACT_APP_BASE_URL}order`, {
          maChiTietDonHang: newCodeOrder,
          email: email,
          maDiaChi: maDiaChi,
          gioDat: gioDat,
          ngayDat: ngayDat,
          thanhTien: +total,
          maGiamGia: "",
          trangThai: "",
        })
        .then(function (response) {
          if (response.status === 200) {
            const arrOrders = response.data;
            return arrOrders;
          }
        })
        .catch(function (error) {
          console.log(error);
        });

      await MySwal.fire({
        title: "C???m ??n qu?? kh??ch ???? mua h??ng!",
        icon: "success",
        didOpen: () => {
          MySwal.showLoading();
        },
        timer: 2000,
      });
      window.location.href = `${process.env.REACT_APP_SERVER_NESTJS_BASE_URL}information/order-history`;
      if (
        window.location.href ===
        `${process.env.REACT_APP_SERVER_NESTJS_BASE_URL}pay`
      ) {
        localStorage.setItem("maDiaChiGiaoHang", "");
        localStorage.setItem("diaChiGiaoHang", "");
        localStorage.setItem("tenDiaChiGiaoHang", "");
        localStorage.setItem("maChiTietDonHang", "");
        localStorage.removeItem("total");
        localStorage.removeItem("gioDat");
        localStorage.removeItem("ngayDat");

        const ids = data.map((product) => {
          // l???y ra m???ng c??c id t??? products => d??ng t??nh counts
          return product.maMonAn;
        });
        const counts = ids.map((id) => {
          // l???y ra m???ng c??c th??ng tin products ??c add to cart
          if (id !== null) {
            return JSON.parse(localStorage.getItem(`gioHang${id}`));
          }
        });
        const productsInCart = [
          {
            maMonAn: "MMA-030001",
            tenMonAn: "Shake Potato",
            hinhAnhMonAn:
              "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/d/e/dessert-534x374px_shake-potato.png",
            moTaChiTiet: "Ngon d??? v???y tr???i!!!",
            giaTien: 0,
            yeuThich: false,
            maDanhMuc: {
              maDanhMuc: "MDM04",
              tenDanhMuc: "Dessert",
              hinhAnh:
                "https://www.lotteria.vn/media/catalog/tmp/category/BG-Menu-09_2.jpg",
            },
          },
        ];
        counts.map((count) => {
          if (count !== null) {
            productsInCart.push(count);
          }
        });

        productsInCart.map((x) =>
          localStorage.removeItem(`gioHang${x.maMonAn}`)
        );
      }
    } else if (localStorage.getItem("diaChiGiaoHang") === "") {
      await MySwal.fire({
        title: "Vui l??ng ch???n ?????a ch??? giao h??ng!",
        icon: "error",
        didOpen: () => {
          MySwal.showLoading();
        },
        timer: 2000,
      });
    } else {
      const date = new Date();
      let gioDat =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      let ngayDat =
        date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

      localStorage.setItem("maKhuyenMai", "MKM-000001");
      localStorage.setItem("maChiTietDonHang", "MCTDH-0000");
      localStorage.setItem("gioDat", gioDat);
      localStorage.setItem("ngayDat", ngayDat);
      await MySwal.fire({
        title: "Ch???t ????n th??nh c??ng",
        icon: "success",
        didOpen: () => {
          MySwal.showLoading();
        },
        timer: 2000,
      });
      window.location.href = `${config.routes.pay}`;
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("total")}>
        <p>T???ng c???ng</p>
        <p>{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}??</p>
      </div>

      <div className={cx("shipping-fee")}>
        <p>Ph?? giao h??ng</p>
        <p>0??</p>
      </div>

      <p>---------------------------------------------</p>

      <div className={cx("price")}>
        <h5>T???m t??nh</h5>
        <p>{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}??</p>
      </div>

      <Button className={cx("btn-continue")} onClick={handleBtnContinue}>
        Ti???p t???c
      </Button>
    </div>
  );
}

export default Bill;
