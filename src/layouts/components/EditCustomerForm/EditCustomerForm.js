import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import OrderAdmin from "../../../components/OrderAdmin/OrderAdmin";
import Button from "../../../components/Button";
import Title from "../../../components/Title/Title";
import styles from "./EditCustomerForm.module.scss";

const cx = classNames.bind(styles);

function EditCustomerForm({ onClick, data }) {
  const [address, setAddress] = useState([]);
  const [orders, setOrders] = useState([]);
  const [codeOrders, setCodeOrders] = useState([]);

  const divAddress = useRef();

  const email = data.email.replace("@", "%40");
  // const codeAddress =

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}address/${email}`)
      .then((response) => response.json())
      .then((data) => {
        setAddress(data);
      });
  }, [email]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}order/${email}`)
      .then((response) => response.json())
      .then((data) => {
        setCodeOrders(data[0].maChiTietDonHang);
        // console.log(codeOrders)
      });
  }, [email]);
  //   const codeAddress = []

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}order/${email}`)
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
        console.log(orders);
      });
  }, [email]);

  const handleBack = () => {
    window.location.reload();
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("left-container")}>
        <div className={cx("avatar-name")}>
          <div className={cx("image")}>{data.hinhAnh}</div>

          <h3>{data.hoTen}</h3>
        </div>
        <div className={cx("info-detail")}>
          <h3>
            <LocalPhoneIcon
              sx={{ width: "30px", height: "30px", marginRight: "5px" }}
            />
            {data.soDienThoai}
          </h3>
          <h3>
            <EmailIcon
              sx={{ width: "30px", height: "30px", marginRight: "5px" }}
            />
            {data.email}
          </h3>
        </div>
      </div>
      <div className={cx("right-container")}>
        <div className={cx("orders")}>
          <div className={cx("title-order")}>
            <Title content={"Orders:"} />
            <div className={cx("btn-back")}>
              <Button primary small onClick={handleBack}>
                Back
              </Button>
            </div>
          </div>

          <div className={cx("titles")}>
            <div className={cx("code-order")}>M?? ????n h??ng</div>
            <div className={cx("active")}>Tr???ng th??i</div>
            <div className={cx("price")}>Th??nh ti???n</div>
            <div className={cx("product")}>M??n ??n</div>
            <div className={cx("create")}>Th???i gian ?????t</div>
          </div>

          <div className={cx("order")}>
            {orders.map((data) => (
              <OrderAdmin key={data.maChiTietDonHang} data={data} />
            ))}
          </div>
        </div>
        <br />
        <div className={cx("address")}>
          <Title content={"Address:"} />

          <div className={cx("addresses")}>
            {address.map((data) => (
              <>
                <div ref={divAddress} className={cx("info-address")}>
                  <div className={cx("details")}>
                    <h2>{data.tenDiaChi}</h2>
                    <div className={cx("address-name")}>{data.diaChi}</div>
                    <div className={cx("line")}></div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCustomerForm;
