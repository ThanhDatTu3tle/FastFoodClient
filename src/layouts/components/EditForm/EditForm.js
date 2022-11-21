import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './EditForm.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import TextField from '@mui/material/TextField';
import axios from 'axios';

import Image from '../../../components/Image/Image';
import ButtonCricle from '../../../components/ButtonCricle/ButtonCricle';
import Button from '../../../components/Button/Button';
import Title from '../../../components/Title/Title';

const cx = classNames.bind(styles)

function EditForm({ onClick, data }) {

  const [editData, setEditData] = useState(data)

  const handleEditForm = () => {

    const maMonAn = editData.maMonAn

    axios.patch(`http://localhost:3001/products/${maMonAn}`)
    .then(async function (response) {
      console.log(response.data);
      await setEditData(response.data);
      console.log(editData)
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

        <h2>CHỈNH SỬA MÓN ĂN</h2>
      </div>

      <Title content={'Hình ảnh'}/>
      <div className={cx('container-images')}>
        {data.hinhAnhMonAn 
          ? (
            <>
              <Image onClick={onClick} src={editData.hinhAnhMonAn}></Image>
            </>
          )
          : (
            <>
              <FastfoodIcon className={cx('images')}/>
              Thêm hình ảnh cho món ăn
            </>
          )
        }
      </div>

      <Title content={'Tên món ăn'}/>
      <div className={cx('container-name')}>
        <TextField
          defaultValue={editData.tenMonAn}
          inputProps={{
            style: {fontSize: 15, width: 560, borderColor: '#ff5b6a'} 
          }}
        />
      </div>

      <Title content={'Giá tiền món ăn'}/>
      <div className={cx('container-name')}>
        <TextField
          defaultValue={data.giaTien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + 'đ'}
          inputProps={{
            style: {fontSize: 15, width: 560, borderColor: '#ff5b6a'} 
          }}
        />
      </div>
      <br />
      <br />
      <Button primary onClick={handleEditForm}>Hoàn tất</Button>
    </div>
  )
}

export default EditForm;
