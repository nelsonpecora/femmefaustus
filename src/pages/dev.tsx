import {
  $hcenter,
  $blurb,
  $figure,
  $img,
  $figcaptions,
  $blockquote,
  $blockquotep,
  $blockquotecite,
  $icon,
} from "./dev.css.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faPython,
  faGit,
  faGithub,
  faHtml5,
  faCss3,
  faNodeJs,
  faCloudflare,
} from "@fortawesome/free-brands-svg-icons";
import headshot from "../components/assets/CharlotteHeadshot.png";
import screenshot from "../components/assets/rxgnosis_screenshot.png";
import "../Charlotte Bush SE Resume (1).pdf";
import { NavLink } from "react-router-dom";
import {
  faFlask,
  faDatabase,
  faCode,
  faComputer,
  faNetworkWired,
  faT,
  faV,
  faFire,
  faRainbow,
  faCodeCommit,
} from "@fortawesome/free-solid-svg-icons";

export default function Dev() {
  return (
    <>
      <h1 className={$hcenter}>Charlotte Bush.</h1>
      <h1 className={$hcenter}>Person-First Developer.</h1>
      <section className={$blurb}>
        <figure className={$figure}>
          <img alt="Charlotte Bush headshot" src={headshot} className={$img} />
          <figcaption className={$figcaptions}>
            Full-stack and fabulous
          </figcaption>
        </figure>
        <blockquote className={$blockquote}>
          <p className={$blockquotep}>
            Wow, what a relevant quote about dev philosophy
          </p>
          <cite className={$blockquotecite}>
            &mdash; A cool Developer, who said something cool
          </cite>
        </blockquote>
      </section>
      <h2 className={$hcenter}>About Me</h2>
      <p>
        I'm a recent graduate of Flatiron School's full-stack engineering boot
        camp. I also have ten years' worth of experience in Project Managment,
        especially in education, accessibility, and learning. I've designed and
        led successful and scalable education programs for everyone from day
        care students to CEOs, and love learning about how people think.{" "}
      </p>
      <p>
        I love to learn, and can pick up a new tool quickly, but my{" "}
        <em>real </em>
        superpower is that I program as a person first. I scope projects, write
        code and docs, and design apps with real human users in mind first,
        writing everything to be understood. I'd rather write something helpful
        than something flashy, but I don't think they're mutually exclusive. No
        matter who signs my checks, I love being part of a team creating
        something that meaningfully helps real people.
      </p>
      <h2 className={$hcenter}>Projects</h2>
      <NavLink to="https://rxgnosis.com">
        <h3>RXGnosis</h3>{" "}
      </NavLink>
      <section className={$blurb}>
        <img
          alt="screenshot of RXGnosis homepage"
          src={screenshot}
          className={$img}
          style={{ marginRight: "10px" }}
        />

        <p>
          {" "}
          <NavLink to="https://rxgnosis.com">RXGnosis</NavLink> started out as
          my capstone project at Flatiron, but has since blossomed into the
          real-world usable tool of my dreams! It's a full-stack web application
          for patient advocacy in mental health care, empowering patients to
          with peer-reviewed reliable treatment information from a federal
          database. Check out the github{" "}
          <NavLink to="https://github.com/Varlotte/phase-5-project/blob/main/README.md">
            here!
          </NavLink>
        </p>
      </section>
      <section>
        <h4>The Foundation</h4>
        <p>
          <FontAwesomeIcon icon={faJs} className={$icon} />
          JavaScript, <FontAwesomeIcon icon={faReact} className={$icon} />
          React, <FontAwesomeIcon icon={faPython} className={$icon} />
          Python, <FontAwesomeIcon icon={faFlask} className={$icon} />
          Flask, <FontAwesomeIcon icon={faDatabase} className={$icon} />
          SQL, <FontAwesomeIcon icon={faCode} className={$icon} />
          YAML, <FontAwesomeIcon icon={faDatabase} className={$icon} />
          SQLite, <FontAwesomeIcon icon={faGit} className={$icon} />
          Git, <FontAwesomeIcon icon={faComputer} className={$icon} />
          VSCode, <FontAwesomeIcon
            icon={faGithub}
            className={$icon}
          /> Github, <FontAwesomeIcon icon={faNetworkWired} className={$icon} />
          Restful APIs, <FontAwesomeIcon icon={faHtml5} className={$icon} />
          HTML & <FontAwesomeIcon icon={faCss3} className={$icon} />
          CSS
        </p>
        <h4>In Progress</h4>
        <p>
          <FontAwesomeIcon icon={faNodeJs} className={$icon} />
          Nodejs, <FontAwesomeIcon icon={faT} className={$icon} />
          TypeScript, <FontAwesomeIcon icon={faV} className={$icon} />
          Vanilla Extract,{" "}
          <FontAwesomeIcon icon={faCodeCommit} className={$icon} />
          Vite, <FontAwesomeIcon icon={faCloudflare} className={$icon} />
          Cloudflare, <FontAwesomeIcon icon={faRainbow} className={$icon} />
          Prisma, <FontAwesomeIcon icon={faFire} className={$icon} /> Firebase
        </p>
      </section>
      <section>
        <h2 className={$hcenter}>Learn More</h2>
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
        <h3>The Total Package</h3>
        <p>
          As well as writing code, I also write award-winning off-off Broadway
          plays and scripts for major video game studios! Check out my{" "}
          <NavLink to="https://femmefaust.us/art">art site </NavLink>
          to learn more!
        </p>
      </section>
    </>
  );
}
