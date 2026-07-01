import AdminShell from '@/features/admin/components/admin-shell'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <AdminShell>
            {children}
        </AdminShell>
    )
}

export default layout