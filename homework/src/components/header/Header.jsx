import "./Header.scss";

function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <a href="#" className="logo">
            <img src="../src/assets/images/logo.png" alt="logo" />
            <h2>Product</h2>
          </a>
          <div className="nav-items">
            <div className="nav-item">
              <a href="#">Product</a>
            </div>

            <div className="nav-item">
              <a href="#">Customers</a>
            </div>

            <div className="nav-item">
              <a href="#">Pricing</a>
            </div>

            <div className="nav-item">
              <a href="#">Resources</a>
            </div>
            <div className="nav-btns">
              <button>Sign In</button>
              <button>Sign Up</button>
              <button>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" rx="16" fill="#F3F3F3" />
                  <path
                    d="M16 26C21.514 26 26 21.514 26 16C26 10.486 21.514 6 16 6C10.486 6 6 10.486 6 16C6 21.514 10.486 26 16 26ZM16 8C20.411 8 24 11.589 24 16C24 20.411 20.411 24 16 24C11.589 24 8 20.411 8 16C8 11.589 11.589 8 16 8Z"
                    fill="#02897A"
                  />
                  <path
                    d="M23 16C23 12.134 19.865 9 16 9V23C19.865 23 23 19.866 23 16Z"
                    fill="#02897A"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
