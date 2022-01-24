import * as React from "react"
import Logo from "../icons/logo"
import {
  footerStyle,
  copyright,
  links,
  logos,
  footerNavList,
  footerNavListItem,
} from "./footer.module.css"

export function Footer() {
  return (
    <footer className={footerStyle}>
        <div className={logos}>
          <Logo />
        </div>
      <nav className={links} aria-label="footer">
        <ul className={footerNavList}>
          <li className={footerNavListItem}>
            <a href="https://www.instagram.com/sourisaband">
              Instagram
            </a>
           </li>
           <li className={footerNavListItem}>
            <a href="mailto:slplott8@gmail.com">
              Contact
            </a>
           </li>
          </ul>
      </nav>
      <div className={copyright}>
        Copyright &copy; {new Date().getFullYear()} · All rights reserved
      </div>
    </footer>
  )
}
