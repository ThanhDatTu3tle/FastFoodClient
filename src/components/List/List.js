import classNames from 'classnames/bind';
import styles from './List.module.scss';
import Catalogue from '../Catalogue/Catalogue';
import Image from '../Image/Image';
import config from '../../config';

const cx = classNames.bind(styles)

function List() {
    return (
        <div className={cx('wrapper')}>
            <Catalogue content={'Gà rán'} active to={config.routes.chicken}>
                <Image 
                    className={cx('chicken-fried')} 
                    src="https://www.lotteria.vn/media/catalog/tmp/category/BG-Menu-Chicken-01-01_2.jpg"
                    alt="chicken-fried"
                    href="http://localhost:3002/ordernow/MDM01"
                />
            </Catalogue>
            <Catalogue content={'Burger'} active to={config.routes.hamburger}>
                <Image 
                    className={cx('burger')} 
                    src="https://www.lotteria.vn/media/catalog/tmp/category/Promotion-04_2.jpg"
                    alt="burger"
                />
            </Catalogue>  
            <Catalogue content={'Cơm - Mì Ý'} active to={config.routes.ricepasta}>
                <Image 
                    className={cx('rice-pasta')} 
                    src="https://www.lotteria.vn/media/catalog/tmp/category/Promotion-08_2.jpg"
                    alt="rice-pasta"
                />  
            </Catalogue>  
            <Catalogue content={'Món ăn thêm'} active to={config.routes.dessert}>
                <Image 
                    className={cx('extra-dishes')} 
                    src="https://www.lotteria.vn/media/catalog/tmp/category/BG-Menu-09_2.jpg"
                    alt="extra-dishes"
                />
            </Catalogue>  
            <Catalogue content={'Drink'} active to={config.routes.drink}>
                <Image 
                    className={cx('chicken-fried')} 
                    src="https://www.lotteria.vn/media/catalog/tmp/category/Promotion-10_2.jpg"
                    alt="drink"
                />
            </Catalogue>  
        </div>
    )
}

export default List;