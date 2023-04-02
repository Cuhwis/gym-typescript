import React from 'react'
import { SelectedPage } from '@/shared/types'
import Logo from '@/assets/Logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import HText from '@/shared/HText';
import Link from '../navbar/Link';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Footer = ({setSelectedPage}: Props) => {
    return (
        <footer className='bg-primary-100 py-14'>
            <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
                <div className='mt-16 basis-1/2 md:mt-0'>
                <img src={Logo} alt="logo" />
                <p className='my-5'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                </div>
                {/* links */}
                <div className='my-5 basis-1/4 md:mt-0 flex flex-col gap-2'>
                    <h4 className='font-bold'>Links</h4>
                    <Link to='https://www.google.com'>
                        The Google link
                    </Link>
                    <a href='https://www.bing.com'>
                        The Bing link
                    </a>
                    <a href='https://www.duckduckgo.com'>
                        The DuckDuckGo link
                    </a>
                </div>
                {/* Contact Us */}
                <div className=' flex flex-col mx-auto gap-2'>
                    <h4 className='font-bold'>Contact Us</h4>
                    <p>lorem ipsum random words</p>
                    <p>(333)333-3333</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer