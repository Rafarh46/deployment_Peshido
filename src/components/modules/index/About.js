/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import CountUp from "react-countup";
function About() {
  return (
    <section className="about about--style1 ">
      <div className="container">
        <div className="about__wrapper">
          <div className="row gx-5  gy-4 gy-sm-0  align-items-center">
            <div className="col-lg-6">
              <div
                className="about__thumb pe-lg-5"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <div className="about__thumb-inner">
                  <div className="about__thumb-image floating-content">
                    <img
                      className="dark"
                      src="/images/about/pesh.jpg"
                      alt="about-image"
                    />
                    
                    <div className="floating-content__bottom-right">
                      <div className="floating-content__item">
                        <h3>
                          {" "}
                          <span
                            className="purecounter"
                            data-purecounter-start="0"
                            data-purecounter-end="30"
                          >
                            <CountUp end ={100} duration={5} />
                          
                          </span>
                          K+
                        </h3>
                        <p>Community Members</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about__content"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <div className="about__content-inner">
                  <h2>
                    Meet <span>$PESH</span> Mission: Unity Through Diversity{" "}
                  </h2>

                  <p className="mb-0">
                  At Peshido, we believe in the strength of diversity and the power
                  of collaboration. By bringing together the passionate communities of 
                  PEPE, Doge, and Shiba Inu, we aim to create a platform where everyone 
                  can come together, share ideas, and support each other's growth. Whether 
                  you're a seasoned crypto enthusiast or a meme aficionado, there's a place 
                  for you in the Peshido community.{" "}
                  </p>
                  <Link href="about"
                    className="trk-btn trk-btn--border trk-btn--primary"
                  >
                    Explore More{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
