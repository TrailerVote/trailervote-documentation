import * as React from 'react'
import { Link } from 'gatsby'
import { cx } from 'emotion'

import style from './style'

export default function Branding({ title, subTitle, className = '' }) {
  return (
    <Link className={cx(style, className)} to="/">
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </Link>
  )
}
