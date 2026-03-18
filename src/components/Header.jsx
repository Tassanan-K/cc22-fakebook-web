import { FacebookLogo, FriendsIcon, HomeIcon, MenuIcon, MessengerIcon, NotificationIcon, PlayIcon, SearchIcon, ShopIcon } from '@/icons'
import useUserStore from '@/stores/userStore'
import React from 'react'
import { Link } from 'react-router'
import Avatar from './Avatar'

function Header() {
    const logout = useUserStore(state => state.logout)
    const user = useUserStore(state => state.user)
    return (
        <div className="flex gap-4 justify-between px-3 text-4xl h-14 bg-white border fixed top-0 z-10 w-full shadow-lg">

            <div className="flex-1 flex gap-2 items-center pe-2 max-md:hidden">
                <FacebookLogo className='w-12' />
                <label className="input rounded-full">
                    <input type="text" />
                    <SearchIcon />
                </label>
            </div>

            <div className="flex-1 flex gap-2 justify-center *:w-20 max-md:*:w-16">
                <Link to='/' className='flex justify-center hover:outline-2 hover:outline-blue-900'>
                    <HomeIcon className='w-1/2' />
                </Link>

                <Link to='/' className='flex justify-center hover:outline-2 hover:outline-blue-900'>
                    <PlayIcon className='w-1/2' />
                </Link>

                <Link to='/' className='flex justify-center hover:outline-2 hover:outline-blue-900'>
                    <ShopIcon className='w-1/2' />
                </Link>

                <Link to='/friends' className='flex justify-center hover:outline-2 hover:outline-blue-900'>
                    <FriendsIcon className='w-1/2' />
                </Link>
            </div>

            <div className="flex-1 flex gap-3 justify-end">
                <div className="avatar justify-center items-center">
                    <div className="w-10 h-10 rounded-full flex! justify-center items-center bg-base-200 hover:bg-base-300">
                        <MenuIcon className='w-5' />
                    </div>
                </div>

                <div className="avatar justify-center items-center">
                    <div className="w-10 h-10 rounded-full flex! justify-center items-center bg-base-200 hover:bg-base-300">
                        <MessengerIcon className='w-5' />
                    </div>
                </div>

                <div className="avatar justify-center items-center">
                    <div className="w-10 h-10 rounded-full flex! justify-center items-center bg-base-200 hover:bg-base-300">
                        <NotificationIcon className='w-5' />
                    </div>
                </div>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1 btn-circle">
                        <Avatar menu right='-10' bottom='-10'
                            imgSrc={user.profileImage}/>
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><Link to='/profile'>Profile</Link></li>
                        <li><a onClick={logout}>Logout</a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Header