import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Title from '../../components/Title/Title';

const cx = classNames.bind(styles)

function Home() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>

        <Title content={'SPECIAL PROMOTION'}/>


        <div className={cx('products')}>
          Products
        </div>

        <Title content={'NEWS'}/>
      </div>
    </div>
  )
}

export default Home;
