import * as React from 'react'
import style from './style'

export default function Footer() {
  return (
    <footer className={style}>
      <div className="links">
        <ul>
          <li><a href="https://github.com/TrailerVote" target="_blank" rel="nofollow noopener noreferrer">Github</a></li>
          <li><a href="https://www.trailervote.com" target="_blank" rel="nofollow noopener noreferrer">Website</a></li>
        </ul>
      </div>
      <div className="copyright"><p>Copyright 2018 TrailerVote</p></div>
    </footer>
  )
}
