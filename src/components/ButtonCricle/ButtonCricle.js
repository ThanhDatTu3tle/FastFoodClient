import { Link } from 'react-router-dom';
import classNames from "classnames/bind";

import styles from './Buttoncricle.module.scss';

const cx = classNames.bind(styles)

function Buttoncricle({ to, href, children, onClick, disable = false, ...passProps }) {

  let Comp = 'buttoncricle'

  const props = {
    onClick,
    ...passProps,
  }
  
  // remove even listener when button is disabled
  if (disable) {
    Object.keys(props).forEach(key => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key]
      }
    })
  }
  // 
  if (to) {
    props.to = to
    Comp = Link
  } else if (href) {
    props.href = href
    Comp = 'a'
  }

  const classes = cx('wrapper', {
    disable
  })

  return (
    <Comp className={classes} {...props}>
      <span>{children}</span> 
    </Comp>
  )
}

export default Buttoncricle;
