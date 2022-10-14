import classNames from 'classnames/bind';
import styles from './List.module.scss';
import Catalogue from '../Catalogue/Catalogue';

const cx = classNames.bind(styles)

function List() {
    return (
        <div className={cx('wrapper')}>
            <Catalogue image={null} content={'Gà rán'}/>   
            <Catalogue image={null} content={'Burger'}/>   
            <Catalogue image={null} content={'Cơm - Mì Ý'}/>   
            <Catalogue image={null} content={'Món ăn thêm'}/>   
            <Catalogue image={null} content={'Nước uống'}/>   
        </div>
    )
}

export default List;