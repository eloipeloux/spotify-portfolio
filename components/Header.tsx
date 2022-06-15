import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Profile from "./Profile";

const cn = (...classes: string[]) => (classes.filter(Boolean).join(' '))

const NavItem: React.FC<{ href: string, text: string }> = ({ href, text }) => {
    const router = useRouter();
    const isActive: boolean = router.asPath === href;

    return (
        <Link href={href}>
            <a
                className={cn(
                    isActive
                        ? 'activeNav'
                        : 'text-white',
                    'block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0'
                )}>
                {text}
            </a>
        </Link>
    )
}

const Header: React.FC = () => (
    <nav className="px-2 sm:px-4 py-2.5 rounded">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Profile />
            <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-white-500 rounded-lg md:hidden hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-white-200" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <li>
                        <NavItem href="/" text="Home" />
                    </li>
                    <li>
                        <NavItem href="/about" text="About" />
                    </li>
                    <li>
                        <NavItem href="/experiences" text="Experiences" />
                    </li>
                    <li>
                        <NavItem href="/tastes" text="Tastes" />
                    </li>
                    <li>
                        <NavItem href="/contact" text="Contact" />
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Header