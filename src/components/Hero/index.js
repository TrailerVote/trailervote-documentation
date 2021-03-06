import * as React from 'react'
import style from './style'

const Hero = function Hero({ children }) {
  return (
    <section className={style}>
      {children}
    </section>
  )
}

Hero.Html = function({ children }) {
  return (
    <div className="section" dangerouslySetInnerHTML={{ __html: children }} />
  )
}

Hero.Navigation = function({ children }) {
  return (
    <nav className="navigation" dangerouslySetInnerHTML={{ __html: children }} />
  )
}

Hero.Logo = function() {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 617.3 128.9" className="w-100 logo" xmlSpace="preserve">
      <g>
        <path className="st0" d="M25.6,7.6l-20,113.7h586L611.7,7.6H25.6z M586.2,115.9H350.6L368.5,13h236L586.2,115.9z"></path>
        <g>
          <g>
            <path className="st0" d="M411.5,85.8H399l-10.8-45.7h14.2l2.8,13.6l2.7,16.8l8.8-16.8l7.6-13.6h14.2L411.5,85.8z"></path>
            <path className="st0" d="M456.4,86.7c-13.1,0-21.7-7.1-21.9-19.6C434.1,49.9,447,39,463.9,39c13.1,0,21.7,7.2,21.9,19.6
                C486.1,76.1,473.4,86.7,456.4,86.7z M462.6,50c-8.3,0-15,6.5-15.1,15.1c-0.1,6.3,3.8,10.7,10.1,10.7c8.6,0,15.1-6.6,15.2-15.3
                C472.9,54.1,469.2,50,462.6,50z"></path>
            <path className="st0" d="M503,50.7h-13.3l1.9-10.6H531l-1.9,10.6h-13.3l-6.2,34.9h-12.8L503,50.7z"></path>
            <path className="st0" d="M565,85.6h-36.4l8-45.5h34.6l-1.9,10.8h-22l-1.1,6.5h20.7L565,67.9h-20.7l-1.2,6.9h23.7L565,85.6z"></path>
          </g>
        </g>
        <g>
          <path className="st1" d="M58,50.7H44.8l1.9-10.6H86l-1.9,10.6H70.8l-6.2,34.9H51.8L58,50.7z"></path>
          <path className="st1" d="M125.7,85.6h-13.6l-8-14.7h-5l-2.6,14.7H83.6l8-45.5h22.2c10.3,0,15.2,6.2,15.2,13.3c0,7.9-3.8,13.4-12.3,16
              l9.1,15.3L125.7,85.6z M102.7,50.4l-1.9,10.9h9.5c6.6-0.5,9-10.9,1.8-10.9H102.7z"></path>
          <path className="st1" d="M164.9,78.1h-20.3l-4.3,7.5h-14l28.4-45.5h13L180,85.6h-13.4L164.9,78.1z M159.2,53.2l-8.4,14.2h11.6
              L159.2,53.2z"></path>
          <path className="st1" d="M183.6,85.6l8-45.5h12.8l-8,45.5H183.6z"></path>
          <path className="st1" d="M226.5,40.1l-6,34.6h21.8l-1.9,10.9h-34.6l8-45.5H226.5z"></path>
          <path className="st1" d="M282.2,85.6h-36.4l8-45.5h34.6l-1.9,10.8h-22l-1.1,6.5h20.7l-1.9,10.5h-20.7l-1.2,6.9h23.7L282.2,85.6z"></path>
          <path className="st1" d="M331.2,85.6h-13.6l-8-14.7h-5L302,85.6h-12.9l8-45.5h22.2c10.3,0,15.2,6.2,15.2,13.3c0,7.9-3.8,13.4-12.3,16
              l9.1,15.3L331.2,85.6z M308.2,50.4l-1.9,10.9h9.5c6.6-0.5,9-10.9,1.8-10.9H308.2z"></path>
        </g>
      </g>
    </svg>
  )
}

export default Hero
