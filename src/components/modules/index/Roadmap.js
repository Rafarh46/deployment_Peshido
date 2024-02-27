/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router";

function Roadmap() {
  const route = useRouter()
  return (
    <section className="roadmap roadmap--style1 padding-top  padding-bottom bg-color" id="roadmap">
    <div className="container">
      <div className="section-header section-header--max50">
        <h2 className="mb-15 mt-minus-5">PESHIDO <span> roadmap</span></h2>
        <p>A product roadmap shows the path ahead, helps teams plan, and guides the delivery of the product.</p>
      </div>
      <div className="roadmap__wrapper">
        <div className="row gy-4 gy-md-0 gx-5">
          <div className="col-md-6 offset-md-6">
            <div className="roadmap__item ms-md-4 aos-init aos-animate" data-aos="fade-left" data-aos-duration="800">
              <div className="roadmap__item-inner">
                <div className="roadmap__item-content">
                  <div className="roadmap__item-header">
                    <h3>Step 1: Token Presale</h3>
                    <span>P1</span>
                  </div>
                  <p>Embark on our journey with an exclusive token presale event, offering early 
                    adopters special benefits such as discounted token prices or bonus rewards. 
                    This presale marks the beginning of our mission to unite the communities of PEPE,
                     Doge, and Shiba Inu under the banner of Peshido.</p>
                </div>
              </div>

            </div>
          </div>
          <div className="col-md-6">
            <div className="roadmap__item roadmap__item--style2 ms-auto me-md-4 aos-init aos-animate" data-aos="fade-right"
              data-aos-duration="800">
              <div className="roadmap__item-inner">
                <div className="roadmap__item-content">
                  <div className="roadmap__item-header">
                    <h3>Step 2: Smart Contract Audit</h3>
                    <span>P2</span>
                  </div>
                  <p> Our team conducts rigorous smart contract audits to guarantee the security and functionality of the
                     Peshido ecosystem, providing peace of mind to our community and investors.</p>
                </div>
              </div>

            </div>
          </div>
          <div className="col-md-6 offset-md-6">
            <div className="roadmap__item ms-md-4 aos-init" data-aos="fade-left" data-aos-duration="800">
              <div className="roadmap__item-inner">
                <div className="roadmap__item-content">
                  <div className="roadmap__item-header">
                    <h3>Step 3: Launch and Initial Marketing</h3>
                    <span>P3</span>
                  </div>
                  <p>The moment has arrived as we officially launch the Peshido token to the world! With enthusiasm 
                    and determination, we embark on an extensive marketing campaign to spread awareness and attract 
                    a diverse community of supporters. Through strategic partnerships, influencers and meme 
                     communities alike join us in celebrating the fusion of memes and crypto, amplifying our message 
                     across various platforms.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="roadmap__item roadmap__item--style2 ms-auto me-md-4 aos-init" data-aos="fade-right"
              data-aos-duration="800">
              <div className="roadmap__item-inner">
                <div className="roadmap__item-content">
                  <div className="roadmap__item-header">
                    <h3>Step 4: Community Building and Growth </h3>
                    <span>P4</span>
                  </div>
                  <p>At the heart of Peshido lies a vibrant and inclusive community, united by a shared passion for memes 
                    and cryptocurrency. Over the coming months, we devote ourselves to nurturing this community, 
                    fostering meaningful connections, and empowering individuals to contribute their unique talents 
                    and perspectives.</p>
                </div>
              </div>

            </div>
          </div>
          <div className="col-md-6 offset-md-6">
            <div className="roadmap__item ms-md-4 aos-init" data-aos="fade-left" data-aos-duration="800">
              <div className="roadmap__item-inner">
                <div className="roadmap__item-content">
                  <div className="roadmap__item-header">
                    <h3>Step 5: Exchange Listings and Partnerships</h3>
                    <span>P5</span>
                  </div>
                  <p>As Peshido continues to gain momentum, we expand our presence by securing listings on prominent decentralized
                     and centralized exchanges. These listings enhance liquidity and accessibility, enabling a broader audience to
                      participate in the Peshido ecosystem. Concurrently, we forge strategic partnerships with like-minded projects,
                       influencers, and blockchain platforms, amplifying our reach and credibility within the crypto community.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="roadmap__item roadmap__item--style2 ms-auto me-md-4 aos-init" data-aos="fade-right"
              data-aos-duration="800">
              <div className="roadmap__item-inner">
                <div className="roadmap__item-content">
                  <div className="roadmap__item-header">
                    <h3>Step 6: Continued Development and Expansion</h3>
                    <span>P6</span>
                  </div>
                  <p>Our journey is far from over as we enter a new phase of development and expansion. We explore new 
                     opportunities for utility and integration, including partnerships with decentralized finance (DeFi)
                      protocols and the exploration of real-world applications. Together, we push the boundaries of what's 
                      possible and pave the way for a future where memes and crypto coexist harmoniously.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="roadmap__shape">
      <span className="roadmap__shape-item roadmap__shape-item--1"> <span></span> </span>
      <span className="roadmap__shape-item roadmap__shape-item--2"> <img src="/images/icon/1.png" alt="shape-icon"/>
      </span>
    </div>
  </section>
  );
}

export default Roadmap;
