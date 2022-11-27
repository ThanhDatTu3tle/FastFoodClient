import { Link } from 'react-router-dom';
import classNames from "classnames/bind";

import styles from './ButtonCricle.module.scss';

const cx = classNames.bind(styles)

function ButtonCricle({ to, href, children, onClick, outline = false, disable = false, ...passProps }) {

  let Comp = 'button'

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
    outline,
  })

  return (
    <Comp className={classes} {...props}>
      <span>{children}</span> 
    </Comp>
  )
}

export default ButtonCricle;
