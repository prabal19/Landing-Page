import { useState } from 'react'
import bag from "./assets/bag.svg";
import menu from "./assets/menu.svg";
import search from "./assets/search.svg";
import user from "./assets/user.svg";
import demo from "./assets/rengoku.png";
import demo2 from "./assets/akaza.jpg";
import './App.css';
import logo from "./assets/logo1.png";
import model from "./assets/model.png";
import demo3 from "./assets/demo3.png";
import insta from "./assets/instagram.svg";
import fb from "./assets/facebook.svg";
import yt from "./assets/youtube.svg";
import Footer from "./assets/footer.png"
import tw from "./assets/twitter.svg";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="mainbox">
    <div className="firstbox">
    <div id="nav1">
      
      <img src={logo} alt="logo" className="logo" />
      <a href="i"><img className='img2'src={search} alt="search" /></a>
      <h3 className="word">
        <a href="#">Home</a>
        </h3>
      <h3 className="word2"><a href="#">Shop</a>
      </h3>
      <h1 className="ZE">ZE</h1>
    </div>
    <div className="line1"><h2 className="fashion">FASHION IS AN ART</h2></div>
    <div className="mainword"><h1>NEW F</h1></div>
    <div className="lines"><para className="words">The Demon Slayer story revolves around Tanjiro Kamado, a young boy who becomes a demon slayer after his family is slaughtered by a demon and his younger sister, Nezuko, is turned into a demon. Tanjiro sets out on a journey to find a cure for Nezuko and to avenge his family’s death.</para></div>


<button className="shopnow">Shop Now</button>

    
    </div>
    <div className="secondbox">
      <div id="nav2">
      <h1 className="RO">RO</h1>
      <h3 className="word3">
        <a href="#">Categories</a>
      </h3>
      <h3 className="word4"><a href="#">About</a>
      </h3>
        <a href="i"><img className='img3' src={bag} alt="bag" /></a>
        <a href="i"><img className='img4' src={user} alt="user" /></a>
    
        

        
      </div>
      {<div className="mainword2"><h1>ASHION</h1></div> }
    <div className="line2">
      <h2 className="st">STYLE IS PASSION</h2>
    </div>
      
    </div>
    <div className="mainimage">
    <img src={model} alt="Model" id="im" />
    </div>
      
    </div>


    <div className='main-secondbox'>
      <div className='firstline'>
        <div className='nd'>
          <h3 className='nd-1'>New Drops</h3>
        </div>
        <div className='tp'>
          <h3 className='tp-1'>Top Selling</h3>
        </div>
      </div>

      <div className='secondline'>
          <div className='product'>
            <div className='demoimg'>
             <img className='demo' src={demo} alt='demo'></img>
            </div>
            <div className='democont'>
              <h3 className='title'>Rengoku Flame Shirts</h3>
              <h4>INR 1499</h4>
              <p>S M L XL XXL </p>
            </div>

          </div>
          <div className='product'>
            <div className='demoimg'>
             <img className='demo' src={demo} alt='demo'></img>
            </div>
            <div className='democont'>
              <h3 className='title'>Rengoku Flame Shirts</h3>
              <h4>INR 1499</h4>
              <p>S M L XL XXL </p>
            </div>
          </div>

          <div className='product'>
            <div className='demoimg'>
             <img className ='demo' src={demo} alt='demo'></img>
            </div>
            <div className='democont'>
              <h3 className='title'>Rengoku Flame Shirts</h3>
              <h4>INR 1499</h4>
              <p>S M L XL XXL </p>
            </div>
          </div>

          <div className='product'>
            <div className='demoimg'>
             <img className='demo' src={demo} alt='demo'></img>
            </div>
            <div className='democont'>
              <h3 className='title'>Rengoku Flame Shirts</h3>
              <h4>INR 1499</h4>
              <p>S M L XL XXL </p>
            </div>
          </div>
        </div>
        <div className='thirdline'>
          <h3>VIEW  ALL</h3>
        </div>
    </div>



    <div className='main-thirdbox'>
      <div className='Fourthline'>
        <h1 className='rs'>|| TOP TRENDING ||</h1>
      </div>
      <div className='fifthline'>
        <div className='demo2'>
          <h3>POLOS</h3>
          <img src={demo2} alt='demo2'></img>
        </div>
        <div className='demo2'>
          <h3>SHIRTS</h3>
          <img src={demo2} alt='demo2'></img>
        </div>
        <div className='demo2'>
          <h3 id='hs'>HALF SHIRTS</h3>
          <img src={demo2} alt='demo2'></img>
        </div>
      </div>
    </div>



    <div className='main-fourthbox'>
      <div className='sixthline'>
        <h1 className='rs'>|| RECENTLY STACKED ||</h1>
      </div>
      <div className='seventhline'>
          <div className='product'>
            <div className='demoimg'>
             <img className='demo' src={demo3} alt='demo'></img>
            </div>
            <div className='democont'>
              <h3 className='title'>Rengoku Flame Shirts</h3>
              <h4>INR 1499</h4>
              <p>S M L XL XXL </p>
            </div>

          </div>
          <div className='product'>
            <div className='demoimg'>
             <img className='demo' src={demo3} alt='demo'></img>
            </div>
            <div className='democont'>
              <h3 className='title'>Rengoku Flame Shirts</h3>
              <h4>INR 1499</h4>
              <p>S M L XL XXL </p>
            </div>
          </div>

          <div className='product'>
            <div className='demoimg'>
             <img className ='demo' src={demo3} alt='demo'></img>
            </div>
            <div className='democont'>
              <h3 className='title'>Rengoku Flame Shirts</h3>
              <h4>INR 1499</h4>
              <p>S M L XL XXL </p>
            </div>
          </div>

          <div className='product'>
            <div className='demoimg'>
             <img className='demo' src={demo3} alt='demo'></img>
            </div>
            <div className='democont'>
              <h3 className='title'>Rengoku Flame Shirts</h3>
              <h4>INR 1499</h4>
              <p>S M L XL XXL </p>
            </div>
          </div>
        </div>
        <div className='eigthline'>
          <h3>VIEW  ALL</h3>
        </div>
    </div>
    <div className='Footer'>
      <div className='upperfooter'>
        <div className='column'>
          <h3>Customer care</h3>
          <p>Contact Us</p>
          <p>Size Guide</p>
          <p>My orders</p>
          <p>My Accounts</p>
          <p>Payment</p>
          <p>Authenticity</p>
          <p>Our Services</p>
        </div>

        <div className='column'>
          <h3>Shipping and Returns</h3>
          <p>Shipping</p>
          <p>Track Your Order</p>
          <p>Returns</p>
        </div>

        <div className='column'>
          <h3>Legal Area</h3>
          <p>Terms and Conditions For Sale</p>
          <p>Privacy Policy</p>
        </div>

        <div className='column'>
          <h3>Our Company</h3>
          <p>Find Nearest Store</p>
          <p>Vision</p>
          <p>Careers</p>
        </div>

        <div className='fifthcolumn'>
          <h3>Follow Us</h3>
          <div className='icons'>
            <img src={fb} alt='facebook'></img>
            <img src={insta} alt='instagram'></img>
            <img className='tw' src={tw} alt='twitter' ></img>
            <img src={yt} alt='Youtube'></img>
          </div>
          <div className='payment'>
            <img src={Footer} alt='Payment'></img>
          </div>
        </div>
      </div>

      <div className='lowerfooter'>
        <div className='cl'>
          <h5>CHANGE LOCATION/LANGUAGE</h5>
        </div>
        <div className='copyright'>
        <h6>Copyright © 2024 ZERO - All Rights Reserved</h6>
        </div>
      </div>

    </div>


      
    </>
  )
}

export default App
