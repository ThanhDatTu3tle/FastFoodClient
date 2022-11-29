import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import classNames from "classnames/bind";
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";

import styles from './AddressForm.module.scss';
import Button from '../../../components/Button';

const cx = classNames.bind(styles)

function AddressForm({ onClick }) {

    const [currCodeAddress, setCurrCodeAddress] = useState('')

    const email = localStorage.getItem('email')
    const maDiaChi = localStorage.getItem('maDiaChiCuoi')

    const prefix = maDiaChi.slice(0, 4)
    const suffix = maDiaChi.slice(4, 10)
    const arrSuffix = suffix.split('')
    const lastArrSuffix = arrSuffix[5]

    const [data, setData] = useState({
        diaChi: '',
        tenDiaChi: '',
    })

    const handleSubmit = (e) => {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        localStorage.setItem('diaChi', newData.diaChi.toString())
        localStorage.setItem('tenDiaChi', newData.tenDiaChi.toString())
    }

    const MySwal = withReactContent(Swal);

    const handleSubmitButton = (e) => {

        if (arrSuffix[4] === '0' && arrSuffix[5] !== '9') {
            const last = +arrSuffix[5] + 1
            const newSuffix = suffix.replace(lastArrSuffix, last)
            const arrPrefix = prefix.split('')
            const arrNewSuffix = newSuffix.split('')
            const result = arrPrefix.concat(arrNewSuffix).toString().split(',').join('')
    
            setCurrCodeAddress(result)
        }
    
        console.log(currCodeAddress)

        axios.post('http://localhost:3001/address', {
            maDiaChi: currCodeAddress,
            email: email,
            diaChi: data.diaChi,
            tenDiaChi: data.tenDiaChi,
        })
        .then(async function (response) {
            if (response.status === 201) {
                await MySwal.fire({
                    title: "Thêm thành công",
                    icon: "success",
                    didOpen: () => {
                        MySwal.showLoading();
                    },
                    timer: 1000,
                });
                window.location.href = "/information/shipping-address";
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const handleCancel = () => {

    }
  
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container-main')}>
        <h4>Vui lòng nhập địa chỉ của bạn (địa chỉ này sẽ được dùng làm địa chỉ giao hàng).</h4>
          <div className={cx('form')}>
            <form id='registerForm'>
                <div className={cx("input-address")}>
                    <FormControl sx={{  width: '100ch' }} variant="outlined">
                        <InputLabel sx={{ fontSize: '15px' }} htmlFor="outlined-adornment-diaChi">Địa chỉ</InputLabel>
                        <OutlinedInput
                            id="diaChi"
                            sx={{ fontSize: '15px' }}
                            value={data.diaChi}
                            onChange={(e) => handleSubmit(e)}
                            label="Address"
                        />
                    </FormControl>
                </div>
                <div className={cx("input-name")}>
                    <FormControl sx={{ width: '100ch' }} variant="outlined">
                        <InputLabel sx={{ fontSize: '15px' }} htmlFor="outlined-adornment-tenDiaChi">Tên địa chỉ</InputLabel>
                        <OutlinedInput
                            id="tenDiaChi"
                            sx={{ fontSize: '15px' }}
                            value={data.tenDiaChi}
                            onChange={(e) => handleSubmit(e)}
                            label="Address name"
                        />
                    </FormControl>
                </div>
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

export default AddressForm;