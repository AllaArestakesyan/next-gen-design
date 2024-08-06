import Link from 'next/link'
import React from 'react'

export const Nav = () => {
    return (
        <nav className='menu'>
            <div>
                <span>NextGen</span>
            </div>
            <ul>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/'}>About us</Link>
                </li>
                <li>
                    <Link href={'/'}>Projects</Link>
                </li>
                <li>
                    <Link href={'/'}>Reviews</Link>
                </li>
            </ul>
            <div className="submenu">
                <div><span></span><span></span></div>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}
