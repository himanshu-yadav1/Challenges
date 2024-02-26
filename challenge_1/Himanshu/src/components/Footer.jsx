import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div className='footer'>
        <div className="first-row">
          <p>Get connected us on social networks</p>
          <div className="social-icons">
            <FontAwesomeIcon className='icons' icon={faFacebook} />
            <FontAwesomeIcon className='icons' icon={faTwitter} />
            <FontAwesomeIcon className='icons' icon={faLinkedin} />
            <FontAwesomeIcon className='icons' icon={faGoogle} />
            <FontAwesomeIcon className='icons' icon={faGithub} />
            <FontAwesomeIcon className='icons' icon={faInstagram} />
          </div>
        </div>


        <div className="second-row">
            <div className="second-row-brand-area">
              <h2>Brand</h2>
              <p>Positioning is finding the right parking space inside the consumer mind and going for it before someone else takes it. lrem ehlo hey fd</p>
            </div>

            <div className="second-row-info-area">
              <h2>Info</h2>
              <div className="footer-links">
                <a className='footer-link' href="#">Service</a>
                <a className='footer-link' href="#">About Us</a>
                <a className='footer-link' href="#">Collection</a>
                <a className='footer-link' href="#">Customers</a>
              </div>
            </div>

            <div className="second-row-contact-area">
              <h2>Contact Us</h2>
              <div className="contacts">
                <p> 
                  <FontAwesomeIcon icon={faLocationDot} /> 
                  New Delhi, 110011, IN
                </p>                  
                <p> 
                  <FontAwesomeIcon icon={faEnvelope} />
                  brand@gmail.com
                </p>                  
                <p> 
                  <FontAwesomeIcon icon={faPhone} />
                  +91 987654321
                </p>
              </div>
            </div>
        </div>


        <div className="third-row">
            <p>© 2024 Copyright: Himanshu Yadav</p>
        </div>
    </div>
  )
}

export default Footer
