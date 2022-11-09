import { useState, useRef } from 'react';
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

import config from '../../../config';
import styles from './LoginForm.module.scss';
import Image from '../../../components/Image/Image';
import ButtonCricle from '../../../components/ButtonCricle/ButtonCricle';
import Button from '../../../components/Button/Button';

const cx = classNames.bind(styles)

function LoginForm({ to, onClick, children, ...props }) {

    const phoneNumberRef = useRef()

    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className={cx('wrapper')}>

            <div className={cx("container-main")}>
                <div className={cx('left-container')}>
                    <div className={cx("sign-in")}>Sign into your account</div>
                    <div className={cx("input-phonenumber")}>
                        <FormControl sx={{ width: '40ch' }} variant="outlined">
                            <InputLabel sx={{ fontSize: '15px' }} htmlFor="outlined-adornment-phone">Phone number</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-phone"
                                sx={{ fontSize: '15px' }}
                                // type={values.showPassword ? 'text' : 'password'}
                                value={values.phone}
                                onChange={handleChange('phone')}
                                label="Phone number"
                                ref={phoneNumberRef}
                            />
                        </FormControl>
                    </div>

                    <div className={cx("input-password")}>
                        <FormControl sx={{ width: '40ch' }} variant="outlined">
                            <InputLabel sx={{ fontSize: '15px' }} htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                sx={{ fontSize: '15px' }}
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
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

                    <div className={cx('wrapper-btn')}>
                        <div className={cx("sign-in-btn")} onClick={onClick}>
                            <Button primary>Sign in</Button>
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
