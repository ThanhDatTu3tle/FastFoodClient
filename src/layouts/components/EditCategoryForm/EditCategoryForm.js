import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import CloseIcon from '@mui/icons-material/Close';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";

import styles from './EditCategoryForm.module.scss';
import Image from '../../../components/Image/Image';
import ButtonCricle from '../../../components/ButtonCricle/ButtonCricle';
import Button from '../../../components/Button/Button';
import Title from '../../../components/Title/Title';

const cx = classNames.bind(styles)

function EditCategoryForm({ onClick, data }) {

  const [editDataId, setEditDataId] = useState(data.maDanhMuc)
  const [editDataName, setEditDataName] = useState(data.tenDanhMuc)

  const nameRef = useRef()

  useEffect(() => {
    const currentName = nameRef.current.value
    localStorage.setItem('currentNameDanhMuc', currentName)
  })

  const handleDealName = () => {
    const newName = nameRef.current.value
    localStorage.setItem('currentNameDanhMuc', newName)
  }

  const MySwal = withReactContent(Swal);

  const handleEditForm = () => {

    const maDanhMuc = editDataId

    const newName = localStorage.getItem('currentNameDanhMuc')

    axios.patch(`http://localhost:3001/category/${maDanhMuc}`, {
      tenDanhMuc: newName,
      // hinhAnhMonAn:
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
        window.location.href = "/admin/category";
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <ButtonCricle className={cx('btn-close')} onClick={onClick}>
          <CloseIcon className={cx('icon-close')}/>
        </ButtonCricle>

        <h2>CHỈNH SỬA DANH MỤC</h2>
      </div>

      <Title content={'Hình ảnh'}/>
      <div className={cx('container-images')}>
        {data.hinhAnh 
          ? (
            <>
              <Image onClick={onClick} src={data.hinhAnh}></Image>
            </>
          )
          : (
            <>
              <FastfoodIcon className={cx('images')}/>
              Thêm hình ảnh cho danh mục
            </>
          )
        }
      </div>

      <Title content={'Tên danh mục'}/>
      <div className={cx('container-name')}>
        <TextField
          inputRef={nameRef}
          defaultValue={editDataName}
          inputProps={{
            style: {fontSize: 15, width: 560, borderColor: '#ff5b6a'} 
          }}
        />
        <Button small onClick={handleDealName}>Chốt</Button>
      </div>
      <br />
      <Button primary onClick={handleEditForm}>Hoàn tất</Button>
    </div>
  )
}

export default EditCategoryForm;
