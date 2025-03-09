
function Footer() {
  return (
    <footer className="footer section__padding">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="Images/white-logo.svg" alt="Little Lemon Logo" />
        </div>

        <div className="footer-section">
          <h3>Reach out to us</h3>
          <div className="contact-info">

            <div className="contact-section">
              <h5>Address:</h5>
            <p>Little Lemon Restaurant
              <br />
            123 Main Street
            <br />
            Anytown, USA 12345</p>
            </div>


            <div className="contact-section">
              <h5>Email Address:</h5>
            <p>info@littlelemon.com</p>
            </div>


            <div className="contact-section">
              <h5>Phone Number:</h5>
            <p>(555) 123-4567</p>
            </div>            
          </div>
        </div>

        <div className="footer-section">
          <h3>Get to know us</h3>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#careers">Careers</a>
            </li>
            <li>
              <a href="#press">Press Releases</a>
            </li>
            <li>
              <a href="#recipes">Exclusive Recipes</a>
            </li>
            <li>
              <a href="#kitchen">Our Kitchen</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect with us</h3>
          <ul>
            <li>
              <a href="#facebook">Facebook</a>
            </li>
            <li>
              <a href="#instagram">Instagram</a>
            </li>
            <li>
              <a href="#linkedin">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

