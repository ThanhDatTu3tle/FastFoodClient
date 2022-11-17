import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './EditForm.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import axios from 'axios';

import ButtonCricle from '../../../components/ButtonCricle/ButtonCricle';
import Title from '../../../components/Title/Title';
import { auto } from '@popperjs/core';

const cx = classNames.bind(styles)

function EditForm({ onClick, data }) {

  axios.get('http://localhost:3001/products')
  .then(function (response) {
    const infoProduct = response.data
    console.log('kết quả: ', infoProduct);
  })
  .catch(function (error) {
      console.log(error);
  });

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

        <FastfoodIcon className={cx('images')}/>
   
        Thêm hình ảnh cho món ăn
      </div>

      <Title content={'Tên món ăn'}/>
      <div className={cx('container-name')}>
        <TextField
          defaultValue={`${data}`}
          inputProps={{
            style: {fontSize: 15, width: 560, borderColor: '#ff5b6a'} 
          }}
        />
      </div>

      <Title content={'Giá tiền món ăn'}/>
      <div className={cx('container-name')}>
        <TextField
          defaultValue={`${data}`}
          inputProps={{
            style: {fontSize: 15, width: 560, borderColor: '#ff5b6a'} 
          }}
        />
      </div>
    </div>
  )
}

export default EditForm;
