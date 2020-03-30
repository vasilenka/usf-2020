import styles from './Dialog.module.scss'
import React from 'react'
import cx from 'classnames'

const Dialog = React.forwardRef(
  (
    { children, light, dark, hidden, scroll, className, ...restProps },
    forwardedRef
  ) => {
    return (
      <div
        ref={forwardedRef}
        className={cx({
          [styles.root]: true,
          [styles.light]: light || !dark,
          [styles.hidden]: hidden,
          [styles.scroll]: scroll || !hidden,
          [styles.dark]: dark,
        })}
        {...restProps}>
        {children}
      </div>
    )
  }
)

export default Dialog
