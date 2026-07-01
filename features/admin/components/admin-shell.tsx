import React from 'react'
import AdminSidebar from './admin-sidebar'

const AdminShell = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex'>
            <AdminSidebar />
            <main>
                {children}
            </main>
        </div>
    )
}

export default AdminShell