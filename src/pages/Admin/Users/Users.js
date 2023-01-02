import { useEffect, useState } from "react";
import classNames from "classnames/bind";

import SideBar from "../SideBar";
import Title from "../../../components/Title/Title";
import Options from "../../../layouts/components/Header/Options";
import CustomerAdmin from "../../../components/CustomerAdmin/CustomerAdmin";
import styles from "./Users.module.scss";

const cx = classNames.bind(styles);

function Users() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}customer`)
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data);
      });
  }, []);

  return (
    <div className={cx("wrapper")}>
      <SideBar></SideBar>

      <div className={cx("content")}>
        <div className={cx("header")}>
          <Options></Options>
        </div>

        <div className={cx("main-content")}>
          <Title content={"DANH SÁCH KHÁCH HÀNG"} />

          <div className={cx("titles")}>
            <div className={cx("phone-number")}>Số điện thoại</div>
            <div className={cx("avatar")}>Ảnh đại diện</div>
            <div className={cx("name")}>Họ và tên</div>
            <div className={cx("email")}>Email</div>
            <div className={cx("active")}>Trạng thái</div>
            <div className={cx("details")}>Chi tiết</div>
          </div>

          <div className={cx("customers")}>
            {customers.map((data) => (
              <CustomerAdmin key={data.email} data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
