import * as React from 'react'
import { Link } from 'gatsby'


import style from './style'
import organizePagesIntoCategories from '../../../utils/organizePagesIntoCategories'

function CategoryList({ icon, label, pages }) {
  const Icon = icon
  return [
    (<h3 className="label" key="label"><Icon className="icon"/> {label}</h3>),
    (
      <ul key="pages">
        {pages.map(page => (<Item key={page.fields.slug} page={page} />))}
      </ul>
    )
  ]
}

function Item({ page: { frontmatter: { title, shortTitle }, fields: { slug } } }) {
  return (
    <li>
      <Link to={slug}>{shortTitle || title}</Link>
    </li>
  )
}

export default function Related({ pages, categories }) {
  const organizedPageCategories = organizePagesIntoCategories({ pages, categories })
  return (
    <div className={style}>{
      organizedPageCategories.map(({ category, pages }) => (
        <CategoryList key={category.name} { ...category } pages={pages} />
      ))
    }</div>
  )
}
