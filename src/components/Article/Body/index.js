import * as React from 'react'
import { cx } from 'emotion'

import style from './style'

export default function Body({ html, children, className = '' }) {
  if (!html) {
    return (<div className={style}>{children}</div>)
  }

  return (
    <div
      className={cx(style, className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
