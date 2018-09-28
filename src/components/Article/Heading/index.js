import * as React from 'react'
import { cx } from 'emotion'

import style from './style'

export default function Heading({ title, children, className = '' }) {
  return (
    <header className={cx(style, className)}>
      {title ? <h1>{title}</h1> : children}
    </header>
  )
}
