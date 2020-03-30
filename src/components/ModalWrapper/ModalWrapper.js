import styles from './ModalWrapper.module.scss'
import React from 'react'
import cx from 'classnames'

const ModalWrapper = ({ children, className, ...restProps }) => {
  return (
    <div className={cx(styles.root)} {...restProps}>
      {children}
    </div>
  )
}

export default ModalWrapper
