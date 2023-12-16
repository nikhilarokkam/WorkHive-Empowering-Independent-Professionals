import React from 'react'
import "./Home.scss"
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/Slide/Slide'
import {cards} from "../../data"
import CatCard from "../../components/catCard/CatCard";
import "./Home.css";
import "./buttonAnimations.scss";

const Home=()=>{
    return (
        <div className='home'>
            <Featured/>
            <TrustedBy/>
            <Slide slidesToShow={5} arrowsScroll={5}>
                {cards.map(card=>(
                    <CatCard key={card.id} item={card}/>
                ))}
            </Slide>
            <div className="card-container">
        <div className="card">
            <div className="explore">
        <div className="container">
          <center><br /><br /><h1>Explore The Marketplace</h1></center>
          <div className="items">
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt=""
              />
              <div className="line"></div>
              <br />
              <span>Graphics & Design</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt=""
              />
              <div className="line"></div>
                  <br />
              <span>Digital Marketing</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt=""
              />
              <div className="line"></div>
              <br />
              <span>Writing & Translation</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt=""
              />
              <div className="line"></div>
              <br />
              <span>Video & Animation</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt=""
              />
              <div className="line"></div>
              <br />
              <span>Music & Audio</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt=""
              />
              <div className="line"></div>
              <br />
              <span>Programming & Tech</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt=""
              />
              <div className="line"></div>
              <br />
              <span>Business</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt=""
              />
              <div className="line"></div>
              <br />
              <span>Lifestyle</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt=""
               />
              <div className="line"></div>
              <br />
              <span>Data</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                alt=""
              />
              <div className="line"></div>
              <br />
              <span>Photography</span>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>


            <div className="features dark">
                <div className="container">
                
                <div className="item">
                
                  <div className="item floating-animation">
                  <img src="./img/ROCKET.png" alt="" style={{height:200,width:200}}/>
                  </div>
                <h1>
              WorkHive <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <br /><br />
                  <button className="button">
    
    <input type="checkbox" id="button" style={{display:'none'}}/>
    <label htmlFor="button">
        <div className="button_inner q">
            <i className="l ion-log-in"></i>
            <span className="t">Explore WorkHive Business</span>
            <span>
                <i className="tick ion-checkmark-round"></i>
            </span>
            <div className="b_l_quad">
                {[...Array(52)].map((_, index) => (
                    <div key={index} className="button_spots"></div>
                ))}
            </div>
        </div>
    </label>
                </button>
            


            </div>
            <div className="item floating-animation">
                        <img src="./img/background.png" alt=""/>
                    </div>
                </div>









                
                </div>


                





            
        </div>
    );
};












export default Home;