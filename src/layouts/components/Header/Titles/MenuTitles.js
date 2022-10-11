
import config from '../../../../config';
import classNames from "classnames/bind";
import styles from './MenuTitles.module.scss';
import Titles, { TitleItem } from '../Titles/Menu';

const cx = classNames.bind(styles)

function MenuTitles() {
  return (
    <div className={cx('wrapper')}>
      <Titles>
        <TitleItem title='Promotion' to={config.routes.promotion} icon={null}  />
        <TitleItem title='Order Now' to={config.routes.ordernow} icon={null}  />
        <TitleItem title='Birthday' to={config.routes.birthday} icon={null}  />
      </Titles>
    </div>
  )
}

export default MenuTitles;
