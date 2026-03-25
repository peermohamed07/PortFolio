import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Education() {
  const education = [
    {
      title: 'Master of Computer Applications',
      institution: 'Alagappa University',
      duration: '2024 – 2026'
    },
    {
      title: 'Bachelor of Computer Science',
      institution: 'Sadakathullah Appa College',
      duration: '2018 – 2021'
    }
  ]

  return (
    <div data-aos="fade-up" className='p-5 flex-1'>
        <h2 className='text-3xl font-bold text-teal-300 mb-8 flex items-center gap-2'>
          <FontAwesomeIcon icon={faUserGraduate} className='h-8 w-8 text-teal-300' /> Education
        </h2>
        <div className='flex flex-col md:flex-row gap-5'>
          {education.map((exp, idx) => (
            <div key={idx} className='bg-white/10 border-l-4 border-green-300 shadow-md rounded-lg p-5 flex-1'>
              <p className='text-xl font-semibold text-teal-300'>{exp.title}</p>
              <p className='italic'>{exp.institution}</p>
              <p className='mt-1'>{exp.duration}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Education