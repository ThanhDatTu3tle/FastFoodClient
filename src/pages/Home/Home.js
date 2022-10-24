import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Title from '../../components/Title/Title';
import Product from '../../components/Product/Product';
import News from '../../components/News/News';

const cx = classNames.bind(styles)

function Home() {

  const [products, setProducts] = useState([])

  useEffect(() => {
      fetch('http://localhost:3001/products')
          .then((response) => response.json())
          .then((data) => {
              setProducts(data)
              console.log(data)
          });
  }, [])

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <Title content={'SPECIAL PROMOTION'}/>
        <div className={cx('products')}>
          {products.map((data) => (
            <Product key={data.maMonAn} data={data}/>
          ))} 
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
