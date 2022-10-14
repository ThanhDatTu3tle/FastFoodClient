import classNames from 'classnames/bind';
import styles from './News.module.scss';
import Button from '../Button/Button';

const cx = classNames.bind(styles)

function News() {
    return (
        <div className={cx('wrapper')}>
            <div>Image</div>
            <div>Title</div>
            <div>Date</div>
            <Button outline>
                See more
            </Button>
        </div>
    )
}

export default News;
