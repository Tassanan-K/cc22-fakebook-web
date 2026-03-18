import Header from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router'

function UserLayout() {
    return (
        <div className='min-h-screen'>
            <Header />
            <div className="pt-14 relative flex gap-2 bg-gray-100 border">
                <Outlet />
            </div>
        </div>
    )
}

export default UserLayout