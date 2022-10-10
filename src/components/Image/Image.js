import { useState, forwardRef } from "react";
import styles from './Image.module.scss';
import classNames from 'classnames';

// fallback: customFallback = images.icon_profile,
const Image = forwardRef(({ src, alt, className, ...props }, ref) => {

  // const [fallback, setFallback] = useState('')

  // const handleError = () => {
  //   setFallback(customFallback)
  // }

  return (
    <img 
      className={classNames(styles.wrapper, className)} 
      ref={ref} 
      // src={fallback || src} 
      src={src} 
      alt={alt} 
      {...props} 
      // onError={handleError} 
    />
  )
})

export default Image;
