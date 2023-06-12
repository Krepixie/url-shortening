import { useState } from 'react'
import './assets/styles/App.css'
import Button from './assets/components/Button'
import Card from './assets/components/Card'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav>
          <div>
            <img src="/logo.svg" alt="" />
            <div className='hidden'>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Resources</a>
            </div>
          </div>
          <div>
            <div className='hidden'>
              <a href="#">Login</a>
              <button>Sign Up</button>
            </div>
            <button className='menu-icon'></button>
          </div>
        </nav>
      </header>
      <main>
        <section className='section-1'>

            <img src="/illustration-working.svg" alt="" className='main-container-image'/>


          <div className='main-container'>
            <div className='main-container-text'>
              <h2>More than just shorter links</h2>
              <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
              <Button></Button>
            </div>

          </div>
          <div className='shorten'>
            <input type="text" placeholder='Shorten a link here...'/>
            <Button></Button>
          </div>
        </section>
        <section className='section-2'>
          <div className="section-2-description">
            <h3>Advanced Statistics</h3>
            <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
          </div>

          <div className="section-2-bg"></div>
          <Card icon="/icon-brand-recognition.svg" title="Brand Recognition">
            Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.
          </Card>
          <Card icon="/icon-detailed-records.svg" title="Detailed Records">
            Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
          </Card>
          <Card icon="/icon-fully-customizable.svg" title="Fully Customizable">
            Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
          </Card>
        </section>
        <section className='boost'>
          <h4>Boost your links today</h4>
          <Button></Button>
        </section>
      </main>
      <footer>
        <img src="/logo-footer.svg" alt="" />
        <div className='footer-container'>
          <div className='footer-links'>
            <ul>
              <h5>Features</h5>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
            <ul>
              <h5>Resources</h5>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
            <ul>
              <h5>Company</h5>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className='footer-icons'>
            <ul>
              <li><a href="#" target='_blank'><img src="/icon-facebook.svg" alt=""/></a></li>
              <li><a href="#" target='_blank'><img src="/icon-twitter.svg" alt=""/></a></li>
              <li><a href="#" target='_blank'><img src="/icon-pinterest.svg" alt=""/></a></li>
              <li><a href="#" target='_blank'><img src="/icon-instagram.svg" alt=""/></a></li>
            </ul>
          </div>
        </div>
        <div class="attribution">
          <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.</p> 
          <p>Coded by <a href="https://github.com/Krepixie" target="_blank">Krepixie 💜</a></p>
        </div>
      </footer>
    </>
  )
}


