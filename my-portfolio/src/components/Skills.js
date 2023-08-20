import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import SqlServer from "../assets/img/Sql.svg"
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
      breakpoint: { max: 64, min: 0 },
      items: 1
    }
  };

  const skills = [
    { src: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg', label: 'C#' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg', label: 'NodeJs' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg', label: 'Angular' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', label: 'React' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg', label: 'JavaScript' },
    { src: SqlServer, label: 'SQL Server' },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <br /><br />
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map((skill, index) => (
                  <div key={index} className="item d-flex flex-column align-items-center justify-content-center">
                    <img
                      src={skill.src}
                      alt={skill.label}
                      style={{ width: '150px', height: '150px' }}
                    />
                    <h5 className="mt-2">{skill.label}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
