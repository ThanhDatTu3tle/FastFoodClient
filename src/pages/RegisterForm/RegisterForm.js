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

import styles from './RegisterForm.module.scss';
import Button from '../../components/Button/Button';

const cx = classNames.bind(styles)

function RegisterForm({ to, onClick, children, ...props }) {

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

    const label = { 
        inputProps: { 'aria-label': 'Checkbox demo' }, 
        label: 'Ngu'
    };

    return (
        <div className={cx('wrapper')}>

            <div className={cx("container-main")}>
                <div className={cx('left-container')}>
                    <div className={cx("sign-up")}>Create your account</div>
                    <div className={cx("input-name")}>
                        <FormControl sx={{ width: '50ch' }} variant="outlined">
                            <InputLabel sx={{ fontSize: '15px' }} htmlFor="outlined-adornment-name">Full name</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-name"
                                sx={{ fontSize: '15px' }}
                                // type={values.showPassword ? 'text' : 'password'}
                                value={values.name}
                                onChange={handleChange('name')}
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
                        <Button primary>Create an account</Button>
                    </div>
                </div>
            </div>

            
        </div>
    );
}

export default RegisterForm;
