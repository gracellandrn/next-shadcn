import React from 'react'

export default function Layout({ children }) {
    return (
        <main className='max-w-2xl m-auto'>
            {/* <header className='bg-zinc-100 border border-zinc-200 px-3 rounded-lg w-full py-3'>
                <div>Noteme.</div>
            </header> */}
            <div>
                {children}
            </div>
        </main>
    )
}