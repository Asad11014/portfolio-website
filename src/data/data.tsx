import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Portfolio Site',
  description: 'Personal portfolio site built with React',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Asad Rizvi.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a London based <strong className="text-stone-100">Software Developer</strong> graduate from{' '}
        <strong className="text-stone-100">The University of Birmingham</strong> looking to contribute to real world
        projects which make a difference.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me training in <strong className="text-stone-100">the gym</strong>, kicking ball
        with the <strong className="text-stone-100">boys</strong>, or gaming on the{' '}
        <strong className="text-stone-100">PlayStation</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/asadRizviResume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am an enthusiastic software developer who is eager to learn and evolve in this industry. I didn't
  always have an interest in programming, in fact I have had multiple career choice changes throughout my teenage years.
  During those times I wasnt set on what I wanted to do for a career and thought of the stable or well paid jobs,
  however, during lockdown I found an interest for coding while I was killing time playing a game, and decided this is
  what I wanted to do. I tend to pick things up pretty quickly, and so this could be a valuable quality to have
  especially in an industry like this where everything is constantly evolving. So when my work is done for the day I can
  take the intense stressful route and play some competitive video games or relax with some therapeutic origami. `,
  aboutItems: [
    {label: 'Location', text: 'London, United Kingdom', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'British', Icon: FlagIcon},
    {label: 'Interests', text: 'Football, Origami, Gaming', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Birmingham', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Student/Unemployed', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Urdu',
        level: 7,
      },
      {
        name: 'French',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 5,
      },
      {
        name: 'HTML & CSS',
        level: 6,
      },
      {
        name: 'Javascript',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Spring Boot',
        level: 6,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'Java',
        level: 8,
      },
    ],
  },
  {
    name: 'Databases',
    skills: [
      {
        name: 'PostgreSQL',
        level: 5,
      },
      {
        name: 'SQL',
        level: 4,
      },
      {
        name: 'mySQL',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Data Scraping Scripts',
    description:
      'These are scripts tailored for scraping specific data from certain sites and storing them in a csv file. This repo will contain all the scripts for various functions. Languages: Python',
    url: 'https://github.com/Asad11014/DataScraping',
    image: porfolioImage1,
  },
  {
    title: 'Snake Game',
    description: 'Classic snake game built with React. Languages: Javascript, HTML, CSS ',
    url: 'https://github.com/Asad11014/react-snake-game',
    image: porfolioImage2,
  },
  {
    title: 'Robot assistant (Simulation)',
    description:
      'The project simulates a robotic platform in various environments, implementing mapping, static navigation, and dynamic obstacle avoidance. These tasks are executed in a simulated environment using the TurtleBot3 model. Built using python, ROS Noetic and RVIZ',
    url: 'https://github.com/Asad11014/robotics-assistant-project',
    image: porfolioImage3,
  },
  {
    title: 'In development...',
    description: '',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'In development...',
    description: '',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'In development...',
    description: '',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'ANPR Model',
    description: 'Automatic number plate recognition model developed with Yolov8 and easyOCR. Languages: Python',
    url: 'https://github.com/Asad11014/ANPR_Project',
    image: porfolioImage7,
  },
  {
    title: 'Full Stack To-Do List App',
    description:
      'A simple to-do list with add, view and delete functionality. Built with Spring Boot, React and PostgreSQL. Languages: Java, javascript, HTML, CSS',
    url: 'https://github.com/Asad11014/fullStack-toDoList-app',
    image: porfolioImage8,
  },
  {
    title: 'In development...',
    description: '',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'In development...',
    description: '',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'In development...',
    description: '',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2021 - July 2024',
    location: 'University of Birmingham',
    title: 'BSc in Computer Science',
    content: <p>Degree Classification: 2:1</p>,
  },
  {
    date: 'September 2019 - June 2021',
    location: 'Harris Westminster Sixth Form',
    title: 'A-Levels',
    content: <p>Biology: A*, Maths: A, Chemistry: B, Economics: B</p>,
  },
];

export const devExp: TimelineItem[] = [
  {
    date: 'June 2024 - Present',
    location: 'Al-Raza Limited - Online',
    title: 'Web Development Intern',
    content: (
      <p>
        - Languages & technologies: Javascript, HTML, CSS, React<br></br>- Objectives: Help earn potential clients to
        the startup by updating website, attending client meetings, and designing mockup solutions for client needs.
        <br></br>- Skills learnt: (So far) Creating excellent client relations through zoom calls and meetings. Ability
        to work collaboratively by understanding existing code and adding basic features.
      </p>
    ),
  },
  {
    date: 'May 2024 -  Present',
    location: 'Online',
    title: 'FreeCodeCamp - Responsive Web Design',
    content: (
      <p>
        - Languages & technologies: HTML, CSS<br></br>- Objectives: Learn advanced HTML and CSS through guided projects
        as well as certified independant projects.<br></br>- Skills learnt: (So far) Intermediate HTML and CSS
        programming.
      </p>
    ),
  },
  {
    date: 'January 2024 - May 2024',
    location: 'University of Birmingham',
    title: 'ANPR Final Year Project',
    content: (
      <p>
        - Languages & technologies: Python, Jupyter Notebook, VScode<br></br>- Objectives: Trained and programmed a ML
        CV model for automatic number plate recognition using easyOCR and YOLOv8.<br></br>- Skills learnt: Familiar with
        Computer Vision concepts such as Object Detection and Optical Character Recognition. Data handling for fair and
        accurate model training. Python scripts for ML algorithms. AI training processes and evaluation metrics.
        <br></br>- You can find my project in the portfolio section below!
      </p>
    ),
  },
  {
    date: 'December 2022 - May 2023',
    location: 'Hyperiondev - Online',
    title: 'Hyperiondev Software Engineering online Bootcamp',
    content: (
      <div>
        <p>
          - Languages & technologies: Python, HTML, CSS, VSCode<br></br>- Objectives: Learn Python from scratch by
          proactive coding projects as well as basic HTML and CSS implementation.<br></br>- Skills learnt: Intermediate
          level Python programming. Basic HTML and CSS programming. Comfortable with VSCode text editor.<br></br>- Check
          out my HyperionDev portfolio{' '}
          <strong>
            <a className="hover-hyperion" href="https://www.hyperiondev.com/portfolio/101715/">
              here!
            </a>
          </strong>
        </p>
        <style jsx>{`
          .hover-hyperion:hover {
            color: orange;
          }
        `}</style>
      </div>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'October 2021 - May 2022',
    location: 'The Pathways Group - Birmingham',
    title: 'Administrator',
    content: (
      <p>
        - Updated client qualifications using Excel and Pics.<br></br>- Print, post and package client certificates.
        <br></br>- Organise dated files.<br></br>- Scan and upload client qualifications
      </p>
    ),
  },
  {
    date: 'October 2021 - December 2021',
    location: 'Masters - Birmingham',
    title: 'Administrator/Receptionist',
    content: (
      <p>
        - Updated patients medical records after receiving the COVID vaccine.<br></br>- Checked in patients into the
        vaccine centre.<br></br>- Exceptional communication skills with patients and staff.
      </p>
    ),
  },
  {
    date: 'June 2019 - June 2019',
    location: 'Hatch End Dental Practice - London',
    title: 'Receptionist',
    content: (
      <p>
        - Book appointments for patients.<br></br>- Update patients with appointment dates.<br></br>- Cancel
        appointments for patients.
      </p>
    ),
  },
  {
    date: 'May 2018 - May 2018',
    location: 'Santander (Preston Road) - London',
    title: 'Assistant',
    content: (
      <p>
        - Work with sensitive information.<br></br>- Customer service (greetings, offering help with the use of ATMs
        etc.)
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    'Hey there! You can send me a quick message via email and I will be sure to get back to you ASAP! In the meantime, you can check out my Github linked below.',
  items: [
    {
      type: ContactType.Email,
      text: 'asadrz11014@gmail.com',
      href: 'mailto:asadrz11014@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'London, United Kingdom',
      href: 'https://www.google.co.uk/maps/place/London/',
    },
    {
      type: ContactType.Instagram,
      text: '@_ahaydar',
      href: 'https://www.instagram.com/_ahaydar/',
    },
    {
      type: ContactType.Github,
      text: 'Asad11014',
      href: 'https://github.com/Asad11014',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Asad11014'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/25258080/Asad11014'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/asad-rizvi-911276257'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/_ahaydar/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com'},
];
