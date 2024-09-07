export default function Footer() {
  return (
      <footer className="page-footer #4527a0 deep-purple darken-3">
          <div className="footer-copyright">
              <div className="container">
                  © {new Date().getFullYear()} Copyright by Ilya Petrov 
              </div>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                  {/* <li><a href="https://github.com/IlyaPetrovM/cookbook" target="_blank" rel="noreferrer" >Исходный код</a></li> */}
              </ul>
          </div>
      </footer>
  );
}