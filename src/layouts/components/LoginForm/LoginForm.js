import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';
import classNames from "classnames/bind";
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";

import config from '../../../config';
import styles from './LoginForm.module.scss';
import Image from '../../../components/Image/Image';
import ButtonCricle from '../../../components/ButtonCricle/ButtonCricle';
import Button from '../../../components/Button/Button';

const cx = classNames.bind(styles)

function LoginForm({ to, onClick, children, ...props }) {

    const handleClickShowPassword = () => {
        setData({
            ...data,
            showPassword: !data.showPassword,
        });
    };

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };

    const [data, setData] = useState({
        soDienThoai: '',
        matKhau: '',
    })

    const MySwal = withReactContent(Swal);

    const handleSubmit = (e) => {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        localStorage.setItem('soDienThoai', newData.soDienThoai.toString())
        localStorage.setItem('matKhau', newData.matKhau.toString())
    }

    const phoneNumber = localStorage.getItem('soDienThoai')
    const password = localStorage.getItem('matKhau')

    const handleSignIn = () => {
        axios.get('http://localhost:3001/address')
        .then(function (response) {
            const data = response.data
            const lastIndex = data.length
            const arrCodeAddress = []
            for (let i = 0; i < lastIndex; i++) {
                const codeAddress = data[i].maDiaChi
                arrCodeAddress.push(codeAddress)
            }
            const lastCodeAddress = arrCodeAddress.pop()
            localStorage.setItem('maDiaChiCuoi', lastCodeAddress)
        })
        .catch(function (error) {
            console.log(error);
        })

        axios.get('http://localhost:3001/favorite')
        .then(function (response) {
            const data = response.data
            const lastIndex = data.length
            const arrCodeFavorite = []
            for (let i = 0; i < lastIndex; i++) {
                const codeFavorite = data[i].maMonAnYeuThich
                arrCodeFavorite.push(codeFavorite)
            }
            const lastCodeFavorite = arrCodeFavorite.pop()
            if (lastCodeFavorite === undefined) {
                localStorage.setItem('maMonAnYeuThichCuoi', 'MMAYT-0000')
            } else {
                localStorage.setItem('maMonAnYeuThichCuoi', lastCodeFavorite)
            }
        })
        .catch(function (error) {
            console.log(error);
        })

        axios.get('http://localhost:3001/customer')
        .then(async function (response) {
            // console.log('kết quả: ', response.data);
            if (response.status === 200) {

                response.data.map(async(user) => {
                    if (user.soDienThoai === phoneNumber && user.matKhau === password) {
                        localStorage.setItem('email', user.email)
                        localStorage.setItem('hoTen', user.hoTen)   
                        localStorage.setItem('hinhAnh', 'avatar')  
                        localStorage.setItem('diaChiGiaoHang', '')
                        
                        await MySwal.fire({
                            title: "Đăng nhập thành công",
                            icon: "success",
                            didOpen: () => {
                                MySwal.showLoading();
                            },
                            timer: 2000,
                        });
                        window.location.href = "/home";
                    } else if (user.soDienThoai !== phoneNumber && user.matKhau === password) {
                        // console.log('Sai số điện thoại rồi bạn ei!')
                        await MySwal.fire({
                            title: "Số điện thoại nhập sai, vui lòng nhập lại!",
                            icon: "error",
                            didOpen: () => {
                                MySwal.showLoading();
                            },
                            timer: 3000,
                        });
                        // window.location.href = "/home";
                    } else if (user.soDienThoai === phoneNumber && user.matKhau !== password) {
                        // console.log('Sai mật khẩu rồi bạn ei!')
                        await MySwal.fire({
                            title: "Mật khẩu nhập sai, vui lòng nhập lại!",
                            icon: "error",
                            didOpen: () => {
                                MySwal.showLoading();
                            },
                            timer: 3000,
                        });
                        // window.location.href = "/home";
                    } else if (phoneNumber === '1234567890' && password === '123456') {
                        await MySwal.fire({
                            title: "Đăng nhập thành công",
                            icon: "success",
                            didOpen: () => {
                                MySwal.showLoading();
                            },
                            timer: 2000,
                        });
                        window.location.href = "/admin";
                    }
                    // return user;
                })
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
                    <div className={cx("sign-in")}>Sign into your account</div>
                    <div className={cx("input-phonenumber")}>
                        <FormControl sx={{ width: '40ch' }} variant="outlined">
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
                        <FormControl sx={{ width: '40ch' }} variant="outlined">
                            <InputLabel sx={{ fontSize: '15px' }} htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="matKhau"
                                sx={{ fontSize: '15px' }}
                                type={data.showPassword ? 'text' : 'password'}
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
                                        {data.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </div>

                    <div className={cx('wrapper-btn')}>
                        <div className={cx("sign-in-btn")} onClick={onClick}>
                            <Button primary onClick={handleSignIn}>Sign in</Button>
                        </div>

                        <div className={cx("sign-up-btn")} onClick={onClick}>
                            <span>You do not have an account ?</span>
                            <Link to={config.routes.register} className={cx("sign-up-word")}>Sign up</Link>
                        </div>
                    </div>

                </div>
                
                <ButtonCricle className={cx('btn-close')} onClick={onClick}>
                    <CloseIcon className={cx('icon-close')}/>
                </ButtonCricle>
                        
                <div className={cx('right-container')}>
                    <Image className={cx('image')} src='https://images.unsplash.com/photo-1619221881739-40de2afeaa7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
                </div>
            </div>

        </div>
    );
}

export default LoginForm;
