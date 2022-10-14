import classNames from 'classnames/bind';
import styles from './News.module.scss';

const cx = classNames.bind(styles)

function News() {
    return (
        <div className={cx('wrapper')}>
            <div>Image</div>
            <div>Title</div>
            <div>Date</div>
            <div>See more</div>
        </div>
    )
}

export default News;
