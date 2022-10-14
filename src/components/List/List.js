import classNames from 'classnames/bind';
import styles from './List.module.scss';
import Catalogue from '../Catalogue/Catalogue';
import Image from '../Image/Image';

const cx = classNames.bind(styles)

function List() {
    return (
        <div className={cx('wrapper')}>
            <Catalogue content={'Gà rán'}>
                <Image 
                    className={cx('chicken-fried')} 
                    src="https://www.lotteria.vn/media/catalog/tmp/category/BG-Menu-Chicken-01-01_2.jpg"
                    alt="chicken-fried"
                />
            </Catalogue>
            <Catalogue content={'Burger'}>
                <Image 
                    className={cx('burger')} 
                    src="https://www.lotteria.vn/media/catalog/tmp/category/Promotion-04_2.jpg"
                    alt="burger"
                />
            </Catalogue>  
            <Catalogue content={'Cơm - Mì Ý'}>
                <Image 
                    className={cx('rice-pasta')} 
                    src="https://www.lotteria.vn/media/catalog/tmp/category/Promotion-08_2.jpg"
                    alt="rice-pasta"
                />  
            </Catalogue>  
            <Catalogue content={'Món ăn thêm'}>
                <Image 
                    className={cx('extra-dishes')} 
                    src="https://www.lotteria.vn/media/catalog/tmp/category/BG-Menu-09_2.jpg"
                    alt="extra-dishes"
                />
            </Catalogue>  
            <Catalogue content={'drink'}>
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