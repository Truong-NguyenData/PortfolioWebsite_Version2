import python from "../assets/img/python.svg";
import r from "../assets/img/r.svg";
import java from "../assets/img/java.svg";
import c from "../assets/img/c.svg";
import sql from "../assets/img/sql.svg";
import pandas from "../assets/img/pandas.svg"
import numpy from "../assets/img/numpy.svg"
import matplotlib from "../assets/img/matplotlib.svg"
import seaborn from "../assets/img/seaborn.svg"
import plotly from "../assets/img/plotly.svg"
import tableau from "../assets/img/tableau.svg"
import powerbi from "../assets/img/powerbi.svg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <h3>Programming Languages</h3>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={r} alt="Image" />
                                <h5>R</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={c} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={sql} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                            
                        </Carousel>
                        <br />
                        <h3>Data Analysis & Visualization Tools</h3>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={pandas} alt="Image" />
                                <h5>Pandas</h5>
                            </div>
                            <div className="item">
                                <img src={numpy} alt="Image" />
                                <h5>NumPy</h5>
                            </div>
                            <div className="item">
                                <img src={matplotlib} alt="Image" />
                                <h5>Matplotlib</h5>
                            </div>
                            <div className="item">
                                <img src={seaborn} alt="Image" />
                                <h5>Seaborn</h5>
                            </div>
                            <div className="item">
                                <img src={plotly} alt="Image" />
                                <h5>Plotly</h5>
                            </div>
                            <div className="item">
                                <img src={tableau} alt="Image" />
                                <h5>Tableau</h5>
                            </div>
                            <div className="item">
                                <img src={powerbi} alt="Image" />
                                <h5>Power BI</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
