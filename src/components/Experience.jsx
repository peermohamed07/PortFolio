import { faArrowUpRightFromSquare, faBriefcase, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Experience() {
  const experiences = [
    {
      section: 'Experience',
      title: 'Front-End Developer (React JS & React Native)',
      company: 'AutoSec NextGen Pvt Ltd',
      duration: 'Mar 2025 - Present',
      projectUrl: 'https://play.google.com/store/apps/details?id=com.AutoSec.Security',
      linkLabel: 'View app on Google Play',
      linkAriaLabel: 'View AutoSec app on Google Play (opens in a new tab)',
      linkIcon: faGooglePlay
    },
    {
      section: 'Experience',
      title: 'Front-End Developer (React JS)',
      company: 'NetCom Computer Pvt Ltd',
      duration: 'Jan 2023 - Sep 2024',
      projectUrl: 'https://dev.gillgall.com/',
      linkLabel: 'View GillGall website',
      linkAriaLabel: 'View GillGall website (opens in a new tab)',
      linkIcon: faGlobe
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
              {exp.projectUrl && (
                <a
                  href={exp.projectUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={exp.linkAriaLabel}
                  className='mt-4 inline-flex items-center gap-2 rounded-lg border border-teal-300/40 px-4 py-2 text-teal-300 transition-colors hover:bg-teal-300/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300'
                >
                  <FontAwesomeIcon icon={exp.linkIcon} aria-hidden='true' />
                  {exp.linkLabel}
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='h-3 w-3' aria-hidden='true' />
                </a>
              )}
            </div>
          ))}
        </div>
    </div>
  )
}

export default Experience
