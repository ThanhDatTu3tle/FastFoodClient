import { useState, useRef, useEffect } from 'react';
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

    // Input fullName
    const [inputFullNameValue, setFullNameInputValue] = useState("");
    const fullNameRef = useRef()
    useEffect(() => {
        fullNameRef.current = inputFullNameValue;

    }, [inputFullNameValue])
    const handleChangeName = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        setFullNameInputValue(event.target.value);
    };

    // Input phoneNumber
    const [inputPhoneNumberValue, setPhoneNumberInputValue] = useState("");
    const phoneNumberRef = useRef()
    useEffect(() => {
        phoneNumberRef.current = inputPhoneNumberValue;

    }, [inputPhoneNumberValue])
    const handleChangePhone = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        setPhoneNumberInputValue(event.target.value);
    };

    // Input email
    const [inputEmailValue, setEmailInputValue] = useState("");
    const emailRef = useRef()
    useEffect(() => {
        emailRef.current = inputEmailValue;

    }, [inputEmailValue])
    const handleChangeEmail = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        setEmailInputValue(event.target.value);
    };

    // Input password
    const [inputPasswordValue, setPasswordInputValue] = useState("");
    const passwordRef = useRef()
    useEffect(() => {
        passwordRef.current = inputPasswordValue;

    }, [inputPasswordValue])
    const handleChangePassword = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        setPasswordInputValue(event.target.value);
    };

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

    const handleSubmit = () => {
        const registerInfo = {
            "hoTen": inputFullNameValue.toString(),
            "soDienThoai": inputPhoneNumberValue.toString(),
            "email": inputEmailValue.toString(),
            "matKhau": inputPasswordValue.toString(),
        }
        const request = new XMLHttpRequest();
        request.open("POST", "http://localhost:3001/customer-test")

        // const registerForm = document.getElementById('registerForm');
        // const formData = new FormData(registerInfo);

        request.send(registerInfo);

        console.log(registerInfo)
    }

    return (
        <div className={cx('wrapper')}>

            <div className={cx("container-main")}>
                <div className={cx('left-container')}>
                    <div className={cx("sign-up")}>Create your account</div>
                    <form id='registerForm'>
                        <div className={cx("input-name")}>
                            <FormControl sx={{ width: '50ch' }} variant="outlined" id="full-name">
                                <InputLabel sx={{ fontSize: '15px' }} htmlFor="outlined-adornment-name">Full name</InputLabel>
                                <OutlinedInput
                                    id="full-name"
                                    sx={{ fontSize: '15px' }}
                                    // type={values.showPassword ? 'text' : 'password'}
                                    value={inputFullNameValue}
                                    onChange={handleChangeName('name')}
                                    label="Full name"
                                    ref={fullNameRef}
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
                                    value={inputPhoneNumberValue}
                                    onChange={handleChangePhone('phone')}
                                    label="Phone number"
                                    ref={phoneNumberRef}
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
                                    value={inputEmailValue}
                                    onChange={handleChangeEmail('email')}
                                    label="Email"
                                    ref={emailRef}
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
                                    value={inputPasswordValue}
                                    onChange={handleChangePassword('password')}
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
                                    ref={passwordRef}
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
                        <Button primary onClick={handleSubmit}>Create an account</Button>
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
