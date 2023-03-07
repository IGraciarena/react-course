import "./App.css";
import Feedback from "./components/Feedback.js";
// import { Feedback } from './components/Feedback.js';

function App() {
  return (
    <div className="App">
      <div className="main-app-container">
        <h1>This is what our students says about FreeCodeCamp:</h1>
        <Feedback
          name="Shawn Wang"
          city="Sigapur"
          job="Software Engineer"
          company="Amazon"
          image="shawn"
          alt=""
          feedback="It's scare to change career. I only gain the confidence that I could programming working out throw the hundreds of hours of free courses in FreeCodeCamp. Now since 1 year I'm working as a Software Engineer. FreeCodeCamp change my life."
        />

        <Feedback
          name="Sarah Chima"
          city="Nigeria"
          job="Software Engineer"
          company="ChatDesk"
          image="sarah"
          alt=""
          feedback="FreeCodeCamp was the entrance door for my career as a Software Engineer. The study plan is well structure and bring my knoledge of programming from a begginer to a really safety place. That was all I needed to achieve my first job as a developer in a really awesome company."
        />
        <Feedback
          name="Emma Bostian"
          city="Sweden"
          job="Software Engineer"
          company="Spotify"
          image="emma"
          alt=""
          feedback="I've always have troubles to learn JavaScript. I've taken too many courses, but the one from FreeCodeCamp was the right one!. Study JavaScript, data structures and algorithms in FreeCodeCamp gave me the ability and trust that I needed it to achieve my Dream Job as a Software Engineer at Spotify"
        />
      </div>
    </div>
  );
}

export default App;
