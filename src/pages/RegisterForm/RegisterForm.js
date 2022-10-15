import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import classNames from 'classnames/bind';

import styles from './RegisterForm.module.scss';
// import fonts from './fonts';
// import vendor from './vendor/jquery/jquery.min.js';

const cx = classNames.bind(styles)

function RegisterForm() {

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    <TextField id="filled-basic" label="Filled" variant="filled" />
                    <TextField id="standard-basic" label="Standard" variant="standard" />
                </Box>
            </div>
        </div>
    );
}

export default RegisterForm;
