import * as React from 'react'
import { cx } from 'emotion'

import Heading from './Heading'
import Body from './Body'
import Related from './Related'

import style from './style'

function Article(props) {
  const { children, className = '' } = props

  return (
    <article className={cx(style, className)}>{children}</article>
  )
}

Article.Heading = Heading
Article.Body = Body
Article.Related = Related

export default Article
