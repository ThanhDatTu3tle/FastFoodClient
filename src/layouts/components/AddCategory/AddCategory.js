import { useState } from "react";
import classNames from "classnames/bind";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import styles from "./AddCategory.module.scss";
import Button from "../../../components/Button";

const cx = classNames.bind(styles);

function AddCategory({ onClick }) {
  const [data, setData] = useState({
    tenDanhMuc: "",
    hinhAnh: "",
  });

  const handleSubmit = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);

    localStorage.setItem("tenDanhMuc", newData.tenDanhMuc.toString());
    localStorage.setItem("hinhAnhDanhMuc", newData.hinhAnh.toString());

    axios
      .get(`${process.env.REACT_APP_BASE_URL}category`)
      .then(function (response) {
        const data = response.data;
        const lastIndex = data.length;
        const arrCodeCategories = [];
        for (let i = 0; i < lastIndex; i++) {
          const codeCategory = data[i].maDanhMuc;
          arrCodeCategories.push(codeCategory);
        }
        const lastCodeCategory = arrCodeCategories.pop();
        localStorage.setItem("maDanhMucCuoi", lastCodeCategory);

        console.log("-------------------");
        const maDanhMuc = localStorage.getItem("maDanhMucCuoi");
        console.log("Mã danh mục cuối: ", maDanhMuc);

        const prefix = maDanhMuc.slice(0, 3);
        console.log("Tiền tố: ", prefix);
        localStorage.setItem("prefix", prefix);

        const suffix = maDanhMuc.slice(3, 5);
        console.log("Hậu tố: ", suffix);
        localStorage.setItem("suffix", suffix);

        const arrSuffix = suffix.split("");
        localStorage.setItem("arrSuffix", arrSuffix);
        const lastArrSuffix = arrSuffix[1];
        console.log("Phần tử cuối chuỗi: ", lastArrSuffix);
        localStorage.setItem("lastArrSuffix", lastArrSuffix);
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

    if (arrSuffix[0] === "0" && arrSuffix[1] !== "9") {
      const arraySuffix = suffix.split("");
      arraySuffix[1] = +arraySuffix[1] + 1;
      const newSuffix = arraySuffix.toString().split(",").join("");
      const arrPrefix = prefix.split("");
      const arrNewSuffix = newSuffix.split("");
      const arrResult = arrPrefix
        .concat(arrNewSuffix)
        .toString()
        .split(",")
        .join("");

      localStorage.setItem("maDanhMucMoi", arrResult);
    }

    const newCodeCategory = localStorage.getItem("maDanhMucMoi");
    localStorage.setItem("maDanhMucMoi", newCodeCategory);

    axios
      .post(`${process.env.REACT_APP_BASE_URL}category`, {
        maDanhMuc: newCodeCategory,
        tenDanhMuc: data.tenDanhMuc,
        hinhAnh: data.hinhAnh,
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
          window.location.href = "/admin/category";

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
        <h4>Vui lòng nhập thông tin để tạo danh mục mới.</h4>
        <div className={cx("form")}>
          <form id="registerForm">
            <div className={cx("input-tenDanhMuc")}>
              <FormControl sx={{ width: "100ch" }} variant="outlined">
                <InputLabel
                  sx={{ fontSize: "15px" }}
                  htmlFor="outlined-adornment-tenDanhMuc"
                >
                  Tên danh mục
                </InputLabel>
                <OutlinedInput
                  id="tenDanhMuc"
                  sx={{ fontSize: "15px" }}
                  value={data.tenDanhMuc}
                  onChange={(e) => handleSubmit(e)}
                  label="tenDanhMuc"
                />
              </FormControl>
            </div>
            <br />
            <div className={cx("input-hinhAnh")}>
              <FormControl sx={{ width: "100ch" }} variant="outlined">
                <InputLabel
                  sx={{ fontSize: "15px" }}
                  htmlFor="outlined-adornment-hinhAnh"
                >
                  Hình ảnh danh mục
                </InputLabel>
                <OutlinedInput
                  id="hinhAnh"
                  sx={{ fontSize: "15px" }}
                  value={data.hinhAnh}
                  onChange={(e) => handleSubmit(e)}
                  label="hinhAnh"
                />
              </FormControl>
            </div>
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

export default AddCategory;
