import webDevelopmentBanner from "../assets/img/web-development-banner.jpg";
import javaScriptImage from "../assets/img/js-img.png";
import cSSImage from "../assets/img/css-img.png";
import nodeJSImage from "../assets/img/nodeJS-img.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import matrixGIF from "../assets/img/matrix-bg.gif";

export const Skills = () => {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  
    return (
        <section className="skill" id="skills" style={{ background: 'none' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx wow zoomIn">
                <h2>Skills</h2>
                <p>My Skills</p>
                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                  <div className="item">
                    <img src={webDevelopmentBanner} alt="Image" />
                    <h5>Web Development</h5>
                  </div>
                  <div className="item">
                    <img src={javaScriptImage} alt="Image" />
                    <h5>JavaScript</h5>
                  </div>
                  <div className="item">
                    <img src={cSSImage} alt="Image" />
                    <h5>CSS</h5>
                  </div>
                  <div className="item">
                    <img src={nodeJSImage} alt="Image" />
                    <h5>Node.js</h5>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <img className="background-image-left" src={matrixGIF} alt="Image" />
      </section>
    )
  }