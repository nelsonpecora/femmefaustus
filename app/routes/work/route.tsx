import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import styles from './styles.css';
import Slideshow from '~/components/Slideshow';

export const meta: MetaFunction = () => [
  { title: 'Charlotte Lang-Bush | Work' },
];

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

type ResumeItem = {
  title: string;
  where: string;
  when: string;
  desc: string;
};

type ResumeSection = {
  hed: string;
  items?: ResumeItem[];
  flatItems?: string[];
};

export const loader: LoaderFunction = () => {
  return json([
    {
      hed: 'Produced Work',
      items: [
        {
          title: 'Playwright and Post-Production Editor, The Screenlit Series',
          where: 'Match:Lit, NYC',
          when: 'Oct 2020 – Present',
          desc: 'Wrote screenplay and did post-production on a short horror film for the first <a target="_blank" href="https://youtu.be/cQ3LRESHgs4?t=1900">Screenlit Series</a>',
        },
        {
          title: 'Playwright, SHOTZ!',
          where: 'AMIOS, NYC',
          when: 'May 2018 – May 2020',
          desc: 'Wrote original short pieces for <em>CryptoSHOTZ</em>, <em>SHOTZ Talks</em>, <em>SHOTZ Madness</em>, <em>Green New SHOTZ</em>, <em>Buffy the Vampire SHOTZ!</em>, <em>SHOTZ Trek</em>, and <em>...And SHOTZ For Something <s>Completely</s> VIRTUALLY Different!</em> festivals',
        },
        {
          title: 'Playwright, Drunk 24 and "Site" Specific',
          where: 'Exquisite Corpse Company, Brooklyn',
          when: 'Feb 2020 – May 2020',
          desc: 'Collaborated with other playwrights to create short pieces in 24 hours, including one on Zoom',
        },
        {
          title: 'Playwright',
          where: 'All Out Arts, Inc., NYC',
          when: 'Feb 2018 – July 2019',
          desc: 'Wrote a full-length play, <em>Parlor Tricks</em>, which had a developmental reading at South Oxford Space and opened the 17th annual Fresh Fruit Festival, winning four “Fruitie” awards',
        },
        {
          title: 'Playwright',
          where: 'Turn to Flesh Productions, NYC',
          when: 'Nov 2018 & June 2019',
          desc: 'Commissioned to write <em>þæt wæs gōd cyning</em> to showcase four femme+ artists as part of the first annual Beyond the Ingenue Festival. Also wrote a monologue, <em>Lachesis</em>, for Cocktails and Classics Festival',
        },
        {
          title: 'Playwright',
          where: 'Undiscovered Countries’ Magic Time, NYC',
          when: 'Jan 2019',
          desc: 'Short piece <em>…and that’s how I got burnt</em> performed at Judson Memorial Church',
        },
        {
          title: 'Playwright',
          where: 'CAPS LOCK Theatre, NYC',
          when: 'April 2017 & Jan 2019',
          desc: 'Wrote monologues with and for various artists for PUSSYFESTs 4 and 6',
        },
      ],
    },
    {
      hed: 'Dramaturgy Experience',
      items: [
        {
          title: 'Literary Manager, SHOTZ!',
          where: 'AMIOS, NYC',
          when: 'March – May 2018',
          desc: 'Served as dramaturg for multiple festivals of short plays written under specific guidelines',
        },
        {
          title: 'Founder and Teacher',
          where: 'P.S. 8 Playwriting Club, Brooklyn',
          when: 'Sept 2016 – June 2017',
          desc: 'Wrote curricula and taught a playwriting and dramaturgy club for children in grades 1-5 which culminated in staged readings of each child’s plays by professional actors',
        },
        {
          title: 'Dramaturg',
          where: 'The Inkwell, Washington, DC',
          when: 'Mar 2013 – Jan 2016',
          desc: 'Assisted emerging playwrights in preparing their plays for public staged readings',
        },
        {
          title: 'Dramaturgical and Production Intern',
          where: 'Synetic Theater, Washington, DC',
          when: 'Nov 2013 – Jan 2014',
          desc: 'Assisted with production and dramaturgical processes for an experimental theater company',
        },
      ],
    },
    {
      hed: 'Narrative Design',
      items: [
        {
          title: 'Writer & Script Doctor',
          where: 'Deconstructeam',
          when: 'Oct 2020 – Mar 2021',
          desc: 'Worked as writer, editor, and joke-doctor on an indie game about standup comedians',
        },
        {
          title: 'Letters From Otherwhere',
          where: 'Co-Designer',
          when: 'June – Aug 2020',
          desc: 'Co-designed and led (with <a href="https://elizabethballou.squarespace.com/#/letters-from-otherwhere/" target="_blank">Elizabeth Ballou</a>) a 10-session, zoom-based game design / playwriting workshop for tweens and teens. It incorporated these academic elements into the narrative of a letter-writing RPG, which we also built for the kids. Want us to run it for you? <a href="#contact">Contact me!</a>',
        },
        {
          title: 'Narrative Designer',
          where: '1492 Studios and Ubisoft, NYC',
          when: 'Aug 2019 – Jan 2020',
          desc: 'Wrote the script for a choice-based romance video game for a major studio',
        },
      ],
    },
    {
      hed: 'Skills and Interests',
      flatItems: [
        'Proficient in French, with a reading knowledge of Latin, Old English, Medieval French, and Old Norse',
        'Member in good standing of the Dramatists’ Guild',
        'Member of various interdisciplinary writing groups since 2015',
        'M.S. Childhood Special Education from CUNY Hunter College, New York City Teaching Fellowship (2017)',
        'B.A. Medieval Studies from University of Virginia (2012)',
      ],
    },
  ]);
};

export default function Work() {
  const resume = useLoaderData<ResumeSection[]>();

  return (
    <>
      <h1>Work</h1>

      <section className="artist-statement">
        <p>
          <strong>I love:</strong> unsolved things, archival research,
          world-building, queering genre fiction, complicated women+, dalliances
          with unlikeability, mysteries, the monstrous, magical realism, and the
          tragedy of ghosts. Learning to be a better intersectional feminist.
          Constructivism and different brains. Languages in all their twisty
          graftings and illogical roots. I love humor, games, and the way
          children tell stories. Consent. Exuberance. Revenge. Punch lines and
          poptimism.
        </p>
        <p>
          <strong>I know:</strong> that I’m not done yet. Not even close. I’m
          always looking for new collaborators who I can learn from and create
          with. If you want to be one of those people please{' '}
          <a href="#contact">contact me</a>.
        </p>
      </section>

      <Slideshow />

      <h2>Résumé</h2>

      {resume.map((section) => (
        <section className="resume-section" key={section.hed}>
          <h3>{section.hed}</h3>
          <ul>
            {!!section.items &&
              section.items.map((item) => (
                <li className="item" key={`${item.where}|${item.when}`}>
                  <span className="title">{item.title}</span>
                  <span className="where">{item.where}</span>
                  <span className="when">{item.when}</span>
                  <p
                    className="desc"
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  />
                </li>
              ))}

            {!!section.flatItems &&
              section.flatItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
      ))}
    </>
  );
}
