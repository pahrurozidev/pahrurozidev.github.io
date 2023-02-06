import React from 'react'
import { Link } from 'react-router-dom'
import User from '../../../assets/user.png'

export default function Header() {
    return (
        <nav class="bg-white w-full border-b fixed top-0 z-50">
            <div class="w-11/12 lg:w-3/4 h-14 lg:h-16 m-auto flex justify-between items-center box-border">
                <Link to={'/app/meta-wallet'} class="font-bold">META WALLET</Link>
                <div><img src={User} class="w-2/3 shadow border rounded-full" alt="" /></div>
            </div>
        </nav>
    )
}
