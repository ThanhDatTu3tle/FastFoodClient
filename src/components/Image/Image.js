import { useState, forwardRef } from "react";
// import { Link } from "react-router-dom";
import styles from './Image.module.scss';
import classNames from 'classnames';

// fallback: customFallback = images.icon_profile,
const Image = forwardRef(({ children, src, fallback: customFallback = '', alt, href, className, to, ...props }, ref) => {

  const [fallback, setFallback] = useState('')

  const handleError = () => {
    setFallback(customFallback)
  }

  return (
    <img 
      className={classNames(styles.wrapper, className)} 
      ref={ref} 
      src={fallback || src} 
      // src={src} 
      alt={alt} 
      href={href}
      to={to}
      {...props} 
      onError={handleError} 
    >
    </img>
  )
})

export default Image;
