import { useState } from 'react';
import classNames from 'classnames/bind';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";

import styles from './AddProduct.module.scss';
import Button from '../../../components/Button';

const cx = classNames.bind(styles)

function AddProduct({ onClick }) {

  const [data, setData] = useState({
    maMonAn: '',
    maDanhMuc: '',
    tenMonAn: '',
    hinhAnhMonAn: '',
    moTaChiTiet: '',
    giaTien: 0,
    yeuThich: false,
  })

  const handleSubmit = (e) => {
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
    localStorage.setItem('diaChi', newData.diaChi.toString())
    localStorage.setItem('tenDiaChi', newData.tenDiaChi.toString())
  }

  const handleSubmitButton = (e) => {
      // axios.post(`http://localhost:3001/products`, {
      //   maMonAn: data.maMonAn,
      //   maDanhMuc: data.maDanhMuc,
      //   tenMonAn: data.tenMonAn,
      //   hinhAnhMonAn: data.hinhAnhMonAn,
      //   moTaChiTiet: data.moTaChiTiet,
      //   giaTien: data.giaTien,
      //   yeuThich: data.yeuThich,
      // })
      // .then(function (response) {

      //   if(response.status === 201) {
      //     const arrFavoriteProducts = response.data
      //     return arrFavoriteProducts
      //   }
      // })
      // .catch(function (error) {
      //   console.log(error);
      // })
  }

  const handleCancel = () => {

  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container-main')}>
        <h4>Vui lòng nhập địa chỉ của bạn (địa chỉ này sẽ được dùng làm địa chỉ giao hàng).</h4>
          <div className={cx('form')}>
            <form id='registerForm'>
                <div className={cx("input-maDanhMuc")}>
                    <FormControl sx={{  width: '100ch' }} variant="outlined">
                        <InputLabel sx={{ fontSize: '15px' }} htmlFor="outlined-adornment-maDanhMuc">Mã Danh mục</InputLabel>
                        <OutlinedInput
                            id="maDanhMuc"
                            sx={{ fontSize: '15px' }}
                            value={data.maDanhMuc}
                            onChange={(e) => handleSubmit(e)}
                            label="maDanhMuc"
                        />
                    </FormControl>
                </div>
                <br />
                <div className={cx("input-tenMonAn")}>
                    <FormControl sx={{ width: '100ch' }} variant="outlined">
                        <InputLabel sx={{ fontSize: '15px' }} htmlFor="outlined-adornment-tenMonAn">Tên món ăn</InputLabel>
                        <OutlinedInput
                            id="tenMonAn"
                            sx={{ fontSize: '15px' }}
                            value={data.tenMonAn}
                            onChange={(e) => handleSubmit(e)}
                            label="tenMonAn"
                        />
                    </FormControl>
                </div>
                <br />
                <div className={cx("input-hinhAnhMonAn")}>
                    <FormControl sx={{ width: '100ch' }} variant="outlined">
                        <InputLabel sx={{ fontSize: '15px' }} htmlFor="outlined-adornment-hinhAnhMonAn">Hình ảnh món ăn</InputLabel>
                        <OutlinedInput
                            id="hinhAnhMonAn"
                            sx={{ fontSize: '15px' }}
                            value={data.hinhAnhMonAn}
                            onChange={(e) => handleSubmit(e)}
                            label="hinhAnhMonAn"
                        />
                    </FormControl>
                </div>
                <br />
                <div className={cx("input-moTaChiTiet")}>
                    <FormControl sx={{ width: '100ch' }} variant="outlined">
                        <InputLabel sx={{ fontSize: '15px' }} htmlFor="outlined-adornment-moTaChiTiet">Mô tả chi tiết</InputLabel>
                        <OutlinedInput
                            id="moTaChiTiet"
                            sx={{ fontSize: '15px' }}
                            value={data.moTaChiTiet}
                            onChange={(e) => handleSubmit(e)}
                            label="moTaChiTiet"
                        />
                    </FormControl>
                </div>
                <br />
                <div className={cx("input-giaTien")}>
                    <FormControl sx={{ width: '100ch' }} variant="outlined">
                        <InputLabel sx={{ fontSize: '15px' }} htmlFor="outlined-adornment-giaTien">Giá tiền</InputLabel>
                        <OutlinedInput
                            id="giaTien"
                            sx={{ fontSize: '15px' }}
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
                <Button primary onClick={(e) => handleSubmitButton(e)}>Thêm mới</Button>
                <br />
            </div>
            <div className={cx("delete-address-btn")}>
                <Button primary onClick={onClick}>Hủy bỏ</Button>
                <br />
            </div>
          </div>
          
      </div>
    </div>
  )
}

export default AddProduct
