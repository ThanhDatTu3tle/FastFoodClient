import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./EditForm.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import Image from "../../../components/Image/Image";
import ButtonCricle from "../../../components/ButtonCricle/ButtonCricle";
import Button from "../../../components/Button/Button";
import Title from "../../../components/Title/Title";

const cx = classNames.bind(styles);

function EditForm({ onClick, data }) {
  const [editDataId, setEditDataId] = useState(data.maMonAn);
  const [editDataName, setEditDataName] = useState(data.tenMonAn);
  const [editDataPrice, setEditDataPice] = useState(data.giaTien);

  const nameRef = useRef();
  const priceRef = useRef();

  useEffect(() => {
    const currentName = nameRef.current.value;
    localStorage.setItem("currentName", currentName);

    const currentPrice = priceRef.current.value;
    localStorage.setItem("currentPrice", currentPrice);
  });

  const handleDealName = () => {
    const newName = nameRef.current.value;
    localStorage.setItem("currentName", newName);
  };

  const handleDealPrice = () => {
    const newPrice = priceRef.current.value;
    localStorage.setItem("currentPrice", newPrice);
  };

  const MySwal = withReactContent(Swal);

  const handleEditForm = () => {
    const maMonAn = editDataId;

    const newName = localStorage.getItem("currentName");

    const newPrice = localStorage.getItem("currentPrice");
    const price = newPrice.substring(0, newPrice.length - 1);
    const priceLength = price.length;
    console.log(priceLength);
    let dot = "";
    // console.log(typeof dot)
    if (priceLength === 7) {
      dot = price.substring(3, 4);
    } else if (priceLength === 6) {
      dot = price.substring(2, 3);
    }

    const resultPrice = +price.replace(dot, "");
    setEditDataPice(resultPrice);

    axios
      .patch(`${process.env.REACT_APP_BASE_URL}products/${maMonAn}`, {
        tenMonAn: newName,
        // hinhAnhMonAn:
        giaTien: resultPrice,
      })
      .then(async function (response) {
        if (response.status === 200) {
          await MySwal.fire({
            title: "Cập nhật thành công",
            icon: "success",
            didOpen: () => {
              MySwal.showLoading();
            },
            timer: 1000,
          });
          window.location.href = "/admin/products";
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <ButtonCricle className={cx("btn-close")} onClick={onClick}>
          <CloseIcon className={cx("icon-close")} />
        </ButtonCricle>

        <h2>CHỈNH SỬA MÓN ĂN</h2>
      </div>

      <Title content={"Hình ảnh"} />
      <div className={cx("container-images")}>
        {data.hinhAnhMonAn ? (
          <>
            <Image onClick={onClick} src={data.hinhAnhMonAn}></Image>
          </>
        ) : (
          <>
            <FastfoodIcon className={cx("images")} />
            Thêm hình ảnh cho món ăn
          </>
        )}
      </div>

      <Title content={"Tên món ăn"} />
      <div className={cx("container-name")}>
        <TextField
          inputRef={nameRef}
          defaultValue={editDataName}
          inputProps={{
            style: { fontSize: 15, width: 560, borderColor: "#ff5b6a" },
          }}
        />
        <Button small onClick={handleDealName}>
          Chốt
        </Button>
      </div>

      <Title content={"Giá tiền món ăn"} />
      <div className={cx("container-name")}>
        <TextField
          inputRef={priceRef}
          defaultValue={
            editDataPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ"
          }
          inputProps={{
            style: { fontSize: 15, width: 560, borderColor: "#ff5b6a" },
          }}
        />
        <Button small onClick={handleDealPrice}>
          Chốt
        </Button>
      </div>
      <br />
      <br />
      <Button primary onClick={handleEditForm}>
        Hoàn tất
      </Button>
    </div>
  );
}

export default EditForm;
