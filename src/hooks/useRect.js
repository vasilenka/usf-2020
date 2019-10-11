/**
 * Modified from Reach UI (https://ui.reach.tech) by Ryan Florence
 */

import React from 'react'
import { ObserveRect } from './../utils/observeRect'

const useRect = (nodeRef, observe = true) => {
  let [rect, setRect] = React.useState(null)
  let observerRef = React.useRef(null)

  React.useLayoutEffect(() => {
    if (!observerRef.current) {
      observerRef.current = ObserveRect(nodeRef.current, setRect)
    }
    if (observe) {
      window.requestAnimationFrame(() => observerRef.current.observe())
    }
    return () => observerRef.current.unobserve()
  }, [observe])

  return rect
}

export { useRect }
