import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper} from '../../../components/Popper';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MoreInfoMenu from './MoreInfoMenu';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles)

const defaultFn = () => {}

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {

  const [history, setHistory] = useState([{ data: items }]) 
  const current = history[history.length - 1] // get last item

  const renderInfo = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children

      return <MoreInfoMenu key={index} data={item} onClick={() => {
        if(isParent) {
          setHistory((prev) => [...prev, item.children])
        } else {
          onChange(item)
        }
      }} />
    })
  }

  return (
    <div>
      <Tippy 
        interactive
        delay={[0, 700]}
        offset={[16, 8]}
        hideOnClick={hideOnClick}
        placement={'bottom-end'}
        onHide={() => setHistory(prev => prev.slice(0, 1))}
        render={(attrs) => (
            <div className={cx('moreinfo-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper className={cx('wrapper-moreinfo')}>
                {history.length > 1 && <Header title={current.title} onBack={() => {
                  setHistory(prev => prev.slice(0, prev.length - 1))
                }} />}
                <div className={cx('menu-body')}>
                  {renderInfo()}
                </div>
              </PopperWrapper>
            </div>
        )}
      >
        {children}
      </Tippy>
    </div>
  )
}

export default Menu;
