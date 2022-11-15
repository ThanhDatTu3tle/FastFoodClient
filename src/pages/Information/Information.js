import classNames from 'classnames/bind';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';

import styles from './Information.module.scss';
import SideBar from './SideBar';
import Button from '../../components/Button';

const cx = classNames.bind(styles)

function Information() {

  const userName = localStorage.getItem('hoTen')
  const email = localStorage.getItem('email')
  const phoneNumber = localStorage.getItem('soDienThoai')

  return (
    <div className={cx('wrapper')}>
      <SideBar />
      <div className={cx('content')}>
        <div className={cx('title')}>
          ACCOUNT INFORMATION
        </div>
        <div className={cx('line')}></div>
        <h3>USER INFORMATION</h3>

        <div className={cx('details')}>
          <InputLabel sx={{ fontSize: '18px', fontWeight: '500', color: 'black' }}>Họ tên:</InputLabel>
          <TextField
            defaultValue={`${userName}`}
            inputProps={{
              style: {fontSize: 15, width: 580} 
            }}
          />
        </div>

        <div className={cx('details')}>
          <InputLabel sx={{ fontSize: '18px', fontWeight: '500', color: 'black' }}>Email:</InputLabel>
          <TextField
            defaultValue={`${email}`}
            inputProps={{
              style: {fontSize: 15, width: 580} 
            }}
          />
        </div>

        <div className={cx('details')}>
          <InputLabel sx={{ fontSize: '18px', fontWeight: '500', color: 'black' }}>Số điện thoại:</InputLabel>
          <TextField
            defaultValue={`${phoneNumber}`}
            inputProps={{
              style: {fontSize: 15, width: 580} 
            }}
          />
        </div>

        <h3>CHANGE YOUR PASSWORD</h3>
        <div className={cx('details')}>
          <InputLabel sx={{ fontSize: '18px', fontWeight: '500', color: 'black' }}>Mật khẩu cũ:</InputLabel>
          <TextField
            placeholder='Nhập mật khẩu cũ của bạn'
            inputProps={{
              style: {fontSize: 15, width: 580} 
            }}
          />
        </div>

        <div className={cx('details')}>
          <InputLabel sx={{ fontSize: '18px', fontWeight: '500', color: 'black' }}>Mật khẩu mới:</InputLabel>
          <TextField
            placeholder='Nhập mật khẩu mới của bạn'
            inputProps={{
              style: {fontSize: 15, width: 580} 
            }}
          />
        </div>

        <div className={cx('details')}>
          <InputLabel sx={{ fontSize: '18px', fontWeight: '500', color: 'black' }}>Nhập lại mật khẩu:</InputLabel>
          <TextField
            placeholder='Nhập lại mật khẩu mới của bạn'
            inputProps={{
              style: {fontSize: 15, width: 580} 
            }}
          />
        </div>

        <Button large primary>Lưu thông tin</Button>
      </div>      
    </div>
  )
}

export default Information;
