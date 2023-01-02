import { useState } from "react";
import classNames from "classnames/bind";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import styles from "./AddProduct.module.scss";
import Button from "../../../components/Button";

const cx = classNames.bind(styles);

function AddProduct({ onClick }) {
  const [data, setData] = useState({
    maDanhMuc: "",
    tenMonAn: "",
    hinhAnhMonAn: "",
    moTaChiTiet: "",
    giaTien: 0,
    yeuThich: false,
  });

  const handleSubmit = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    localStorage.setItem("maDanhMuc", newData.maDanhMuc.toString());
    const maDanhMuc = localStorage.getItem("maDanhMuc");
    localStorage.setItem("tenMonAn", newData.tenMonAn.toString());
    localStorage.setItem("hinhAnhMonAn", newData.hinhAnhMonAn.toString());
    localStorage.setItem("moTaChiTiet", newData.moTaChiTiet.toString());
    localStorage.setItem("giaTien", newData.giaTien.toString());
    localStorage.setItem("yeuThich", newData.yeuThich.toString());

    axios
      .get(`${process.env.REACT_APP_BASE_URL}products/${maDanhMuc}`)
      .then(function (response) {
        const data = response.data;
        const lastIndex = data.length;
        const arrCodeProducts = [];
        for (let i = 0; i < lastIndex; i++) {
          const codeProduct = data[i].maMonAn;
          arrCodeProducts.push(codeProduct);
        }
        const lastCodeProduct = arrCodeProducts.pop();
        localStorage.setItem("maMonAnCuoi", lastCodeProduct);

        console.log("-------------------");
        const maMonAn = localStorage.getItem("maMonAnCuoi");
        console.log("Mã món ăn cuối: ", maMonAn);

        const prefix = maMonAn.slice(0, 4);
        console.log("Tiền tố: ", prefix);
        localStorage.setItem("prefix", prefix);

        const suffix = maMonAn.slice(4, 10);
        console.log("Hậu tố: ", suffix);
        localStorage.setItem("suffix", suffix);

        const arrSuffix = suffix.split("");
        localStorage.setItem("arrSuffix", arrSuffix);
        const lastArrSuffix = arrSuffix[5];
        console.log("Phần tử cuối chuỗi: ", lastArrSuffix);
        localStorage.setItem("lastArrSuffix", lastArrSuffix);

        const nextLastArrSuffix_4 = arrSuffix[4];
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const MySwal = withReactContent(Swal);

  const handleSubmitButton = (e) => {
    const prefix = localStorage.getItem("prefix");
    const suffix = localStorage.getItem("suffix");
    const arrSuffix = localStorage.getItem("arrSuffix");
    const lastArrSuffix = localStorage.getItem("lastArrSuffix");

    if (arrSuffix[4] === "0" && arrSuffix[5] !== "9") {
      const arraySuffix = suffix.split("");
      arraySuffix[5] = +arraySuffix[5] + 1;
      const newSuffix = arraySuffix.toString().split(",").join("");
      const arrPrefix = prefix.split("");
      const arrNewSuffix = newSuffix.split("");
      const arrResult = arrPrefix
        .concat(arrNewSuffix)
        .toString()
        .split(",")
        .join("");

      // const last = +arrSuffix[5] + 1
      // const newSuffix = suffix.replace(lastArrSuffix, last)
      // const arrPrefix = prefix.split('')
      // const arrNewSuffix = newSuffix.split('')
      // const arrResult = arrPrefix.concat(arrNewSuffix).toString().split(',').join('')

      localStorage.setItem("maMonAnMoi", arrResult);
    } else if (arrSuffix[4] === "0" && arrSuffix[5] === "9") {
      arrSuffix[5] = "0";
      const newSuffix = suffix.replace(lastArrSuffix, arrSuffix[5]);

      const arrNewSuffix = newSuffix.split("");

      arrNewSuffix[4] = "1";
      const newwSuffix = arrNewSuffix.toString().split(",").join("");

      const arrPrefix = prefix.split("");
      const arrNewwSuffix = newwSuffix.split("");
      const arrResult = arrPrefix
        .concat(arrNewwSuffix)
        .toString()
        .split(",")
        .join("");

      localStorage.setItem("maMonAnMoi", arrResult);
    } else if (arrSuffix[4] === "1" && arrSuffix[5] !== "9") {
      const arraySuffix = suffix.split("");
      arraySuffix[5] = +arraySuffix[5] + 1;
      const newSuffix = arraySuffix.toString().split(",").join("");
      console.log(newSuffix);
      const arrPrefix = prefix.split("");
      const arrNewSuffix = newSuffix.split("");
      const arrResult = arrPrefix
        .concat(arrNewSuffix)
        .toString()
        .split(",")
        .join("");

      localStorage.setItem("maMonAnMoi", arrResult);
    }

    const newCodeProduct = localStorage.getItem("maMonAnMoi");
    localStorage.setItem("maMonAnMoi", newCodeProduct);

    axios
      .post(`${process.env.REACT_APP_BASE_URL}products`, {
        maMonAn: newCodeProduct,
        maDanhMuc: data.maDanhMuc,
        tenMonAn: data.tenMonAn,
        hinhAnhMonAn: data.hinhAnhMonAn,
        moTaChiTiet: data.moTaChiTiet,
        giaTien: +data.giaTien,
        yeuThich: data.yeuThich,
      })
      .then(async function (response) {
        if (response.status === 201) {
          const arrFavoriteProducts = response.data;

          await MySwal.fire({
            title: "Thêm thành công",
            icon: "success",
            didOpen: () => {
              MySwal.showLoading();
            },
            timer: 2000,
          });
          window.location.href = "/admin/products";

          return arrFavoriteProducts;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleCancel = () => {};

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container-main")}>
        <h4>Vui lòng nhập thông tin để tạo món mới.</h4>
        <div className={cx("form")}>
          <form id="registerForm">
            <div className={cx("input-maDanhMuc")}>
              <FormControl sx={{ width: "100ch" }} variant="outlined">
                <InputLabel
                  sx={{ fontSize: "15px" }}
                  htmlFor="outlined-adornment-maDanhMuc"
                >
                  Mã Danh mục
                </InputLabel>
                <OutlinedInput
                  id="maDanhMuc"
                  sx={{ fontSize: "15px" }}
                  value={data.maDanhMuc}
                  onChange={(e) => handleSubmit(e)}
                  label="maDanhMuc"
                />
              </FormControl>
            </div>
            <br />
            <div className={cx("input-tenMonAn")}>
              <FormControl sx={{ width: "100ch" }} variant="outlined">
                <InputLabel
                  sx={{ fontSize: "15px" }}
                  htmlFor="outlined-adornment-tenMonAn"
                >
                  Tên món ăn
                </InputLabel>
                <OutlinedInput
                  id="tenMonAn"
                  sx={{ fontSize: "15px" }}
                  value={data.tenMonAn}
                  onChange={(e) => handleSubmit(e)}
                  label="tenMonAn"
                />
              </FormControl>
            </div>
            <br />
            <div className={cx("input-hinhAnhMonAn")}>
              <FormControl sx={{ width: "100ch" }} variant="outlined">
                <InputLabel
                  sx={{ fontSize: "15px" }}
                  htmlFor="outlined-adornment-hinhAnhMonAn"
                >
                  Hình ảnh món ăn
                </InputLabel>
                <OutlinedInput
                  id="hinhAnhMonAn"
                  sx={{ fontSize: "15px" }}
                  value={data.hinhAnhMonAn}
                  onChange={(e) => handleSubmit(e)}
                  label="hinhAnhMonAn"
                />
              </FormControl>
            </div>
            <br />
            <div className={cx("input-moTaChiTiet")}>
              <FormControl sx={{ width: "100ch" }} variant="outlined">
                <InputLabel
                  sx={{ fontSize: "15px" }}
                  htmlFor="outlined-adornment-moTaChiTiet"
                >
                  Mô tả chi tiết
                </InputLabel>
                <OutlinedInput
                  id="moTaChiTiet"
                  sx={{ fontSize: "15px" }}
                  value={data.moTaChiTiet}
                  onChange={(e) => handleSubmit(e)}
                  label="moTaChiTiet"
                />
              </FormControl>
            </div>
            <br />
            <div className={cx("input-giaTien")}>
              <FormControl sx={{ width: "100ch" }} variant="outlined">
                <InputLabel
                  sx={{ fontSize: "15px" }}
                  htmlFor="outlined-adornment-giaTien"
                >
                  Giá tiền
                </InputLabel>
                <OutlinedInput
                  id="giaTien"
                  sx={{ fontSize: "15px" }}
                  value={data.giaTien}
                  onChange={(e) => handleSubmit(e)}
                  label="giaTien"
                />
              </FormControl>
            </div>
            <br />
          </form>
        </div>

        <div className={cx("buttons")}>
          <div className={cx("create-address-btn")}>
            <Button primary onClick={(e) => handleSubmitButton(e)}>
              Thêm mới
            </Button>
            <br />
          </div>
          <div className={cx("delete-address-btn")}>
            <Button primary onClick={onClick}>
              Hủy bỏ
            </Button>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
