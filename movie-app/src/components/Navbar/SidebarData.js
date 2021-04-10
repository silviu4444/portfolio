import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        className: 'nav-text '
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <AiIcons.AiFillPhone />,
        className: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <AiIcons.AiFillContacts />,
        className: 'nav-text'
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <AiIcons.AiFillExclamationCircle />,
        className: 'nav-text'
    },
    {
        title: 'Sign Up',
        path: '/signUp',
        icon: <BsIcons.BsFillPersonPlusFill />,
        className: 'nav-text'
    },
]
