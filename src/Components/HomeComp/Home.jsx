// src/components/Home.js
import "./Homesty.css";

const Home = () => {
    return (
      <section className="home">
        <div className="information">
            <p>Hii! I  AM <strong>Kirtiraj Kumbhar</strong></p>
            <h2 className="title">Java Fullstack Developer / Frontend Developer / Web Developer etc.</h2>
            <p>Passionate about software development, I enjoy creating efficient and scalable applications.  With a focus on full-stack development, I aim to build impactful solutions while continuously  learning and improving my skills in the tech industry.</p>
            <a href="./KirtirajResume.pdf" download>
              <button  className="btn">Resume</button>
            </a>
            <div className="socialicon">
              <a href="www.linkedin.com/in/kirtiraj-kumbhar-853308247" target="_black"><img src="../img/linkedin.svg" alt="" /></a>
              <a href="https://www.instagram.com/kirtiraj2899/" target="_black"><img src="../img/instagram.svg" alt="" /></a>
              <a href="https://www.facebook.com/kirtiraj.kumbhar.9" target="_black"><img src="../img/facebook.svg" alt="" /></a>
            </div>
        </div>
        <div className="profile">
            <div className="profileimg">
                 <img src="../img/profile.png" alt="profile picture" />
            </div>
            <div className="box"></div>
        </div>
      </section>
    );
  };
  
  export default Home;
  