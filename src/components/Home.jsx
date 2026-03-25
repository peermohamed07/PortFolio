import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from './Footer'
import profileImg from '../assets/Profile.jpeg';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Contact from './Contact';
import Resume from '../assets/Resume.pdf'

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false, // animation only once on scroll
    });
  }, []);
  return (
    <div className='flex flex-col min-h-screen bg-[#102A43] text-white'>
      <div className='flex flex-col flex-1 overflow-auto md:px-[5rem]'>
        <div className='flex flex-col-reverse md:flex-row p-5 gap-5 md:min-h-screen md:gap-[5rem]'>

          <div data-aos="fade-right" className='flex flex-col flex-1 items-center justify-center text-center md:items-start md:text-start'>

            <label className='text-[2rem] font-medium'>
              I’m Peer Mohamed
            </label>

            <label className='text-[2rem] text-teal-300 font-bold'>
              Front-End Developer | Mobile App Developer
            </label>

            <label className='text-[1.2rem] mt-5 text-justify'>
              Front-End Engineer with 3 years of experience in ReactJS, React Native, Redux, JavaScript, and TypeScript. Strong expertise in
              RESTful API integration, state management, responsive design, and performance optimization. Experienced in building scalable,
              real-time, data-driven applications for web and mobile platforms
            </label>

            <label className='text-[1.2rem] mt-5 text-justify'>
              I enjoy translating ideas into functional, intuitive digital experiences. My strengths include building reusable components,
              optimizing UI performance, collaborating with backend teams, and solving real-world problems through clean code.
              I continuously learn new technologies to improve my craft and contribute to impactful, production-ready solutions.
            </label>

            <a
              download='Resume.pdf'
              href={Resume}
              className='text-center text-[1.2rem] bg-teal-500 hover:bg-teal-400 hover:shadow-xl hover:shadow-teal-300/50 text-white rounded-lg mt-5 p-3 w-[10rem] cursor-pointer'
            >
              Resume
            </a>

          </div>

          <div data-aos="fade-left" className='flex justify-center items-center'>
            <img className='w-[15rem] h-[20rem] object-cover rounded-md bg-white' src={profileImg} alt='Profile Image' />
          </div>

        </div>
        <div className='flex flex-col pb-5 '>
          <Experience />
          <Education />
        </div>
        <Skills />
        <Contact />
      </div>

      <Footer />
    </div>
  )
}

export default Home