import classNames from 'classnames/bind';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';

import styles from './Information.module.scss';
import SideBar from './SideBar';

const cx = classNames.bind(styles)

function Information() {

  const userName = localStorage.getItem('hoTen')
  const avatar = localStorage.getItem('hinhAnh')
  const email = localStorage.getItem('email')
  const phoneNumber = localStorage.getItem('soDienThoai')

  return (
    <div className={cx('wrapper')}>
      <SideBar />
      <div className={cx('content')}>
        <div className={cx('title')}>
          ACCOUNT INFORMATION
        </div>

        <div className={cx('details')}>
          <InputLabel sx={{ fontSize: '18px', fontWeight: '500' }}>Họ tên:</InputLabel>
          <TextField
            defaultValue={`${userName}`}
            size='medium'
            sx={{ marginLeft: '50px', fontSize: '25px', width: '700px' }}
          />
        </div>

        <div className={cx('details')}>
          <InputLabel sx={{ fontSize: '18px', fontWeight: '500' }}>Email:</InputLabel>
          <TextField
            defaultValue={`${email}`}
            size='medium'
            sx={{ marginLeft: '50px', fontSize: '25px', width: '700px' }}
          />
        </div>

        <div className={cx('details')}>
          <InputLabel sx={{ fontSize: '18px', fontWeight: '500' }}>Số điện thoại:</InputLabel>
          <TextField
            defaultValue={`${phoneNumber}`}
            size='medium'
            sx={{ marginLeft: '50px', width: '700px' }}
          />
        </div>
      </div>
    </div>
  )
}

export default Information;
