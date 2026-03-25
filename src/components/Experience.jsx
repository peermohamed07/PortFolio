import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Experience() {
  const experiences = [
    {
      section: 'Experience',
      title: 'Front-End Developer (React JS & React Native)',
      company: 'AutoSec NextGen Pvt Ltd',
      duration: 'Mar 2025 - Present'
    },
    {
      section: 'Experience',
      title: 'Front-End Developer (React JS)',
      company: 'NetCom Computer Pvt Ltd',
      duration: 'Jan 2023 - Sep 2024'
    }
  ]

  return (
    <div data-aos="fade-up" className='p-5 flex-1'>
        <h2 className='text-3xl font-bold text-teal-300 mb-8 flex items-center gap-2'>
          <FontAwesomeIcon icon={faBriefcase} className='h-8 w-8 text-teal-300' /> Experience
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          {experiences.map((exp, idx) => (
            <div key={idx} className='bg-white/10 border-l-4 border-green-300 shadow-md rounded-lg p-5'>
              <p className='text-xl font-semibold text-teal-300'>{exp.title}</p>
              <p className='italic'>{exp.company}</p>
              <p className='mt-1'>{exp.duration}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Experience
