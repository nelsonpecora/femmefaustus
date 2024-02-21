import {
  $h1,
  $blurb,
  $figure,
  $img,
  $figcaptions,
  $list,
  $listholder,
} from "./dev.css.ts";
import headshot from "../components/assets/CharlotteHeadshot.jpeg";
import screenshot from "../components/assets/rxgnosis_screenshot.png";
import "../Charlotte Bush SE Resume (1).pdf";
import { NavLink } from "react-router-dom";

export default function Dev() {
  return (
    <>
      <h1 className={$h1}>Dev</h1>
      <h2>About Me:</h2>
      <section className={$blurb}>
        <figure className={$figure}>
          <img alt="Charlotte Bush headshot" src={headshot} className={$img} />
          <figcaption className={$figcaptions}>A person-first dev</figcaption>
        </figure>
        <p>
          I'm a recent graduate of Flatiron School's full-stack engineering boot
          camp. I also have ten years' worth of experience in Project Managment,
          especially in education and learning. I've designed and run learning
          for everyone from day care students to CEOs. I can pick up a new
          language quickly, but my real superpower is thinking about the how of
          collaboration. Projects I manage succeed because of everyone's
          different learning and work styles, not in spite of them. What other
          devs can do that?
        </p>
      </section>
      <section>
        <h4>The Foundation:</h4>
        <p>JavaScript, React, Python, Flask, SQL, YAML, HTML & CSS</p>
        <h4>I'm Working On:</h4>
        <p>Nodejs, TypeScript, Vanilla Extract, Vite, and Prisma</p>
      </section>
      <h2>Projects</h2>
      <h3>RXGnosis</h3>
      <section className={$blurb}>
        <figure className={$figure}>
          <img
            alt="screenshot of RXGnosis homepage"
            src={screenshot}
            className={$img}
          />
        </figure>
        <p>
          {" "}
          <NavLink to="https://rxgnosis.com">RXGnosis</NavLink> started out as
          my capstone project at Flatiron, but has since blossomed into the
          real-world usable tool of my dreams! It's a full-stack web application
          for patient advocacy in mental health care, empowering patients to
          advocate for themselves in doctor's appointments by providing them
          with peer-reviewed reliable information from a federal database. Check
          out the github{" "}
          <NavLink to="https://github.com/Varlotte/phase-5-project/blob/main/README.md">
            here!
          </NavLink>
        </p>
      </section>
      <section>
        <h3>Blog</h3>
        <figcaption>
          I love writing about the new languages and tools I'm picking up. Check
          out my{" "}
          <NavLink to="https://dev.to/varlotte">dev.to blog here!</NavLink>
        </figcaption>
      </section>
      <section>
        <h3>Resume</h3>
        <p>
          Download my resume{" "}
          <a href="src/Charlotte Bush SE Resume (1).pdf" download>
            here
          </a>
          !
        </p>
      </section>
    </>
  );
}
