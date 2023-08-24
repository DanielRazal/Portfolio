import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import PacMan from "../assets/img/PacMan.png";
import PetShop from "../assets/img/PetShop.png";
import TalkBack from "../assets/img/TalkBack.png";
import FootballTables from "../assets/img/Football-Tables.png";
import FootballQuiz from "../assets/img/Football Quiz.png";
import Users from "../assets/img/Users.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Pacman",
      description: "Developed using WPF, With 6 opponents aiming to catch you, while you aim to collect all coins for victory.",
      imgUrl: PacMan,
      githubRepository: "https://github.com/DanielRazal/Pac-Man"
    },
    {
      title: "PetShop",
      description: "Developed using ASP.NET MVC with Sql Server, Customers access animal details and share reviews. Meanwhile, admins wield streamlined control: add, delete, and edit animals.",
      imgUrl: PetShop,
      githubRepository: "https://github.com/DanielRazal/PetShop"
    },
    {
      title: "Football Tables",
      description: "Developed using React , It has Leagues and Standings sections.Leagues: See soccer leagues with images and names from an API.Standings: View team standings. Filter by leagues and seasons for easy navigation.",
      imgUrl: FootballTables,
      githubRepository: "https://github.com/DanielRazal/Football-App"
    },
    {
      title: "Talk Back",
      description: "Developed using C# Web API, Angular and Sql Server, TalkBack is a messaging system that allows users to chat with each other and play Tic-Tac-Toe against each other.The system consists of clients that connect to a central application server, enabling them to see who is online and choose with whom to talk or play Tic-Tac-Toe.",
      imgUrl: TalkBack,
      githubRepository: "https://github.com/DanielRazal/Talk-Back"
    },
    {
      title: "Football Quiz",
      description: "Developed using C# WEB API, Angular, and SQL Server. User-friendly site spotlighting football's greatest players, Explore Legends: Top 10 chosen by the creator, detailed career info, achievements , Quick Quizzes: Timed quizzes, score, and Top Score ranking , Compare Players: Matchup based on stats.",
      imgUrl: FootballQuiz,
      githubRepository: "https://github.com/DanielRazal/Football-History"
    },
    {
      title: "Users",
      description: "Developed using C# Web API, Angular and Sql Server, This project allows you to perform registration and login operations using a RESTful API. It also supports email functionality with SendGrid integration and enables file uploads to the wwwroot directory.",
      imgUrl: Users,
      githubRepository: "https://github.com/DanielRazal/Users"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  <h2>Projects</h2>
                  <br /><br />
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    </Nav>
                    <Tab.Pane eventKey="first">
                      <Row className="text-center">
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
