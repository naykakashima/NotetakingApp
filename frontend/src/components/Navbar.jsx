import React from 'react'
import { Link } from 'react-router-dom'
import { PlusIcon } from 'lucide-react'

const Navbar = () => {
  return <header className="bg-primary border-b border-base-content/10">
    <div className="mx-auto max-w-6xl p-4">
        <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-bold text-white font-mono tracking-tighter'>notes</h1>
            <div className="flex items-center gap-4">
                <Link to={"/createpage"} className="btn btn-neutral">
                    <PlusIcon className="size-5" />
                    <span>new note</span>
                </Link>
            </div>
        </div>
    </div>
  </header>

}

export default Navbar