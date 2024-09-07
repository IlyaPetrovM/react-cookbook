import { Link } from "react-router-dom";

export default function Header() {
  return (
      <nav className=" #4527a0 deep-purple darken-3">
          <div className="nav-wrapper">
              <Link to="/" className="brand-logo">CookBook</Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><Link to="/contacts"  rel="noreferrer" >Contacts</Link></li>
                  <li><Link to="/about"  rel="noreferrer" >About</Link></li>
              </ul>
          </div>
      </nav>
  );
}