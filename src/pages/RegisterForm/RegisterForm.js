import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import classNames from 'classnames/bind';
import { styled } from '@mui/material/styles';

import styles from './RegisterForm.module.scss';
import Image from '../../components/Image/Image';

const cx = classNames.bind(styles)

function RegisterForm({ onClick, ...props }) {

    localStorage.setItem('signInClose', 'false')

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

    const [isClosed, setIsClosed] = useState(true)

    console.log('isClosed: ', isClosed)

    const handleCloseBackdrop = () => {
        setIsClosed(true)
    }

    const ButtonCreate = styled(Button)({
        fontSize: 16,
        width: 230,
        height: 60,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#ff5b6a',
        borderColor: 'transparent',
        '&:hover': {
            backgroundColor: '#ce4954',
            borderColor: '#ce4954',
            boxShadow: 'none',
          },
          '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
          },
      });

    return (
        <div className={cx('wrapper')}>

            <div className={cx("container-main")}>
                <div className={cx('left-container')}>
                    <div className={cx("sign-up")}>Sign Up</div>
                    <div className={cx("input-name")}>
                        <FormControl sx={{ width: '50ch' }} variant="outlined">
                            <InputLabel sx={{ fontSize: '15px' }} htmlFor="outlined-adornment-name">Full name</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-name"
                                sx={{ fontSize: '15px' }}
                                // type={values.showPassword ? 'text' : 'password'}
                                value={values.name}
                                onChange={handleChange('name')}
                                endAdornment={
                                <InputAdornment position="end">

                                </InputAdornment>
                                }
                                label="Full name"
                            />
                        </FormControl>
                    </div>
                    <div className={cx("input-phonenumber")}>
                        <FormControl sx={{ width: '50ch' }} variant="outlined">
                            <InputLabel sx={{ fontSize: '15px' }} htmlFor="outlined-adornment-phone">Phone number</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-phone"
                                sx={{ fontSize: '15px' }}
                                // type={values.showPassword ? 'text' : 'password'}
                                value={values.phone}
                                onChange={handleChange('phone')}
                                endAdornment={
                                <InputAdornment position="end">

                                </InputAdornment>
                                }
                                label="Phone number"
                            />
                        </FormControl>
                    </div>
                    <div className={cx("input-email")}>
                        <FormControl sx={{  width: '50ch' }} variant="outlined">
                            <InputLabel sx={{ fontSize: '15px' }} htmlFor="outlined-adornment-email">Email</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-email"
                                sx={{ fontSize: '15px' }}
                                // type={values.showPassword ? 'text' : 'password'}
                                value={values.email}
                                onChange={handleChange('email')}
                                endAdornment={
                                <InputAdornment position="end">

                                </InputAdornment>
                                }
                                label="Email"
                            />
                        </FormControl>
                    </div>

                    <div className={cx("input-password")}>
                        <FormControl sx={{ width: '50ch' }} variant="outlined">
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

                    

                    <div className={cx("create-acc-btn")}>
                        <ButtonCreate size='large' variant="contained">Create account</ButtonCreate>
                    </div>
                </div>

                <CloseIcon onClick={handleCloseBackdrop} className={cx('icon-close')}/>
                                
                <div className={cx('right-container')}>
                    
                    <Image className={cx('image')} src='https://images.unsplash.com/photo-1619221881739-40de2afeaa7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
                </div>
            </div>

            
        </div>
    );
}

export default RegisterForm;
