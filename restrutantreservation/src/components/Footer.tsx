const Footer: React.FC = () => {
    return (
      <div>
        <footer className="footer mt-auto py-1 text-black  fs-5">
          <div className="container mt-3 text-center">
            <div className="row">
              <div className="col-4">
                <h4 className="header-footer-bg">Address</h4>
                <p className="text-white">hi</p>
                <p className="text-white">unterhching</p>
              </div>
              <div className="col-4">
                <h5 className="header-footer-bg">Follow Us</h5>
                <ul className="list-unstyled d-flex justify-content-evenly">
                  <li>
                    <a className="text-white"
                      href="https://facebook.com"
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label="Go to our Facebook, opens in a new tab"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a className="text-white"
                      href="https://twitter.com"
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label="Go to our Twitter, opens in a new tab"
                    >
                      <i className="bi bi-twitter-x"></i>
                    </a>
                  </li>
                  <li>
                    <a className="text-white"
                      href="https://instagram.com"
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label="Go to our Instagram, opens in a new tab"
                    >
                      <i className="bi bi-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-4">
                <h5 className="header-footer-bg">Links</h5>
                <ul className="list-unstyled">
                  <li><a className="text-white" href="/" aria-label="Go to our home page">Home</a></li>
                  <li><a className="text-white" href="/reservation" aria-label="Go to our reservation page">What we offer</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  };

export default Footer;