import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode,setIsDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
        
            <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2'/>

            <div className='w-max flex items-center gap-2 mx-auto font-Arvo text-darkText dark:text-lightText'>
                <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>       
                    manas03verma@gmail.com
            </div>

        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-darkPartial mx-[10%] mt-12 py-6 dark:border-lightPartial'>
            <p className='font-Arvo text-darkText dark:text-lightText'>
                © 2025 Manas Verma. All rights reserved.
            </p>

            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0 font-Arvo text-darkText font-semibold dark:text-lightText'>
                <li><a target='_blank' href="https://github.com/Manasv03">GitHub</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/manas-verma-6174ab289/">LinkedIn</a></li>
            </ul>
        </div>

    </div>
  )
}

export default Footer
