import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Title from '../../components/Title/Title';
import Product from '../../components/Product/Product';
import News from '../../components/News/News';

const cx = classNames.bind(styles)

function Home() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <Title content={'SPECIAL PROMOTION'}/>
        <div className={cx('products')}>
          <Product />
          <Product />
          <Product />
        </div>

        <Title content={'NEWS'}/>
        <div className={cx('news')}>
          <News />
          <News />
          <News />
          <News />
        </div>
      </div>
    </div>
  )
}

export default Home;
