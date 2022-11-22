import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import classNames from 'classnames/bind';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";

import styles from './RegisterForm.module.scss';
import Button from '../../components/Button/Button';

const cx = classNames.bind(styles)

function RegisterForm({ to, onClick, children, ...props }) {

    const [data, setData] = useState({
        email: '',
        hoTen: '',
        soDienThoai: '',
        matKhau: '',
    })

    const handleSubmit = (e) => {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        localStorage.setItem('email', newData.email.toString())
        localStorage.setItem('hoTen', newData.hoTen.toString())
        localStorage.setItem('soDienThoai', newData.soDienThoai.toString())
        localStorage.setItem('matKhau', newData.matKhau.toString())
    }

    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const label = { 
        inputProps: { 'aria-label': 'Checkbox demo' }, 
        label: 'Ngu'
    };

    const MySwal = withReactContent(Swal);

    const handleSubmitButton = (e) => {

        axios.post('http://localhost:3001/customer', {
            email: data.email,
            hoTen: data.hoTen,
            soDienThoai: data.soDienThoai,
            matKhau: data.matKhau,
        })
        .then(async function (response) {
            // console.log(response);
            if (response.status === 201) {
                localStorage.setItem('hinhAnh', 'avatar')
                await MySwal.fire({
                    title: "Đăng ký tài khoản thành công",
                    icon: "success",
                    didOpen: () => {
                        MySwal.showLoading();
                    },
                    timer: 1000,
                });
                window.location.href = "/home";
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div className={cx('wrapper')}>

            <div className={cx("container-main")}>
                <div className={cx('left-container')}>
                    <div className={cx("sign-up")}>Create your account</div>
                    <form id='registerForm'>
                        <div className={cx("input-email")}>
                            <FormControl sx={{  width: '50ch' }} variant="outlined">
                                <InputLabel sx={{ fontSize: '15px' }} htmlFor="outlined-adornment-email">Email</InputLabel>
                                <OutlinedInput
                                    id="email"
                                    sx={{ fontSize: '15px' }}
                                    value={data.email}
                                    onChange={(e) => handleSubmit(e)}
                                    label="Email"
                                />
                            </FormControl>
                        </div>
                        <div className={cx("input-name")}>
                            <FormControl sx={{ width: '50ch' }} variant="outlined" id="full-name">
                                <InputLabel sx={{ fontSize: '15px' }} htmlFor="outlined-adornment-name">Full name</InputLabel>
                                <OutlinedInput
                                    id="hoTen"
                                    sx={{ fontSize: '15px' }}
                                    value={data.hoTen}
                                    onChange={(e) => handleSubmit(e)}
                                    label="Full name"
                                />
                            </FormControl>
                        </div>
                        <div className={cx("input-phonenumber")}>
                            <FormControl sx={{ width: '50ch' }} variant="outlined">
                                <InputLabel sx={{ fontSize: '15px' }} htmlFor="outlined-adornment-phone">Phone number</InputLabel>
                                <OutlinedInput
                                    id="soDienThoai"
                                    sx={{ fontSize: '15px' }}
                                    value={data.soDienThoai}
                                    onChange={(e) => handleSubmit(e)}
                                    label="Phone number"
                                />
                            </FormControl>
                        </div>
                        <div className={cx("input-password")}>
                            <FormControl sx={{ width: '50ch' }} variant="outlined">
                                <InputLabel sx={{ fontSize: '15px' }} htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="matKhau"
                                    sx={{ fontSize: '15px' }}
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={data.matKhau}
                                    onChange={(e) => handleSubmit(e)}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                        </div>
                        
                    </form>
                
                    

                    <div className={cx("checkbox")}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    {...label}
                                    defaultChecked
                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, margin: '0px 0px 0px 100px' }}
                                />
                            }
                        />
                        <span>Do you agree to the terms? </span> 
                        <p>Privacy Policy</p>
                    </div>

                    <div className={cx("create-acc-btn")}>
                        <Button primary onClick={(e) => handleSubmitButton(e)}>Create an account</Button>
                        <br />
                        <span>
                        © Tu3tle · Privacy & terms
                        </span>
                    </div>

                </div>
            </div>

            
        </div>
    );
}

export default RegisterForm;
