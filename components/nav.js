import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Gains McGee' },
  { href: '/create', label: 'Create' },
  { href: '/about', label: 'About' },
  { href: '/login', label: 'Log in' },
  { href: '/create', label: 'Create Account' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      {/* <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li> */}
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <Link href={href}>
          <a>{label}</a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>{`

      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
    
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: black;
        text-decoration: none;
        font-size: 25px;
      }
    `}</style>
  </nav>
)

export default Nav
