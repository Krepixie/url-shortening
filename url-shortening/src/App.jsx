import { useState } from 'react'
import './assets/styles/App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav>
          <div>
            <img src="/logo.svg" alt="" />
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Resources</a>
          </div>

          <div>
            <a href="#">Login</a>
            <button>Sign Up</button>
          </div>
        </nav>
      </header>
      <main>
        <section>
          <div>
            <div className='container-1'>
              <h2>More than just shorter links</h2>
              <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
              <button>Get Started</button>
            </div>

            <div className='container-2'>
              <img src="/illustration-working.svg" alt="" />
            </div>
          </div>
          <div>
            <input type="text" placeholder='Shorten a link here...'/>
            <button>Shorten It!</button>
          </div>
        </section>
        <section className='section-2'>
          <h3>Advanced Statistics</h3>
          <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>

          {/* card */}
          <p>Brand Recognition</p>
          <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
          {/* card */}
          <p>Detailed Records</p>
          <p> Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
          {/* card */}
          <p>Fully Customizable</p>
          <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
        </section>
        <section>
          <h4>Boost your links today</h4>
          <button>Get Started</button>
        </section>
      </main>
      <footer>
        <img src="/logo.svg" alt="" />
        <div>
          <div>
            <ul>
              Features
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
            <ul>
              Resources
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
            <ul>
              Company
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <ul>
              <li><img src="/icon-facebook.svg" alt="" /></li>
              <li><img src="/icon-twitter.svg" alt="" /></li>
              <li><img src="/icon-pinterest.svg" alt="" /></li>
              <li><img src="/icon-instagram.svg" alt="" /></li>
            </ul>
          </div>
        </div>
        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/Krepixie" target="_blank">Krepixie 💜</a>.
        </div>
      </footer>
    </>
  )
}


