import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <div className='bg-gray-800 text-white p-3 gap-5 flex flex-col items-center justify-center md:flex-row '>
        <label className='text-sm'>Copyright <FontAwesomeIcon icon={faCopyright} /> 2025 Peer Mohamed MK</label>
        <label className='hidden md:flex'> | </label>
        <label>All Rights Reserved</label>
    </div>
  )
}

export default Footer