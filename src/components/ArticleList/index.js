import * as React from 'react'
import style from './style'
import { Link } from 'gatsby'

const NO_MATCHING_CATEGORIES_CATEGORY = {
  name: '__no-matching-categories-category',
  label: 'Other'
}

function CategoryList({ icon, label, pages }) {
  const Icon = icon
  return [
    (<h3 className="label" key="label"><Icon className="icon"/> {label}</h3>),
    (
      <ul key="pages">
        {pages.map(page => (<CategoryList.Item key={page.fields.slug} page={page} />))}
      </ul>
    )
  ]
}

CategoryList.Item = function({ page: { frontmatter: { title, shortTitle }, fields: { slug } } }) {
  return (
    <li>
      <Link to={slug}>{shortTitle || title}</Link>
    </li>
  )
}

function organizePagesIntoCategories({ pages, categories }) {
  const mapped = pages.reduce((results, page) => {
    const pageCategories = page.frontmatter.categories || []
    const matchedCategories = categories.filter((category => pageCategories.indexOf(category.name) !== -1)) || [NO_MATCHING_CATEGORIES_CATEGORY]

    matchedCategories.forEach((category) => {
      results[category.name] = results[category.name] || { category, pages: [] }
      results[category.name].pages.push(page)
    })

    return results
  }, {})

  return Object.keys(mapped).map(category => mapped[category])
}

export default function ArticleList({ pages, categoryList: categories }) {
  const organizedPageCategories = organizePagesIntoCategories({ pages, categories })
  return (
    <div className={style}>{
      organizedPageCategories.map(({ category, pages }) => (
        <CategoryList key={category.name} { ...category } pages={pages} />
      ))
    }</div>
  )
}
