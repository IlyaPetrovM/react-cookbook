export default function Header() {
  return (
      <nav className="green darken-1">
          <div className="nav-wrapper">
              <a href="#" className="brand-logo">CookBook</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="https://github.com/IlyaPetrovM/cookbook" target="_blank" rel="noreferrer" >Исходный код</a></li>
              </ul>
          </div>
      </nav>
  );
}