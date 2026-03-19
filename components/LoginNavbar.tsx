import { Navbar, NavbarBrand, NavbarToggle, NavbarCollapse, } from 'flowbite-react'

const TopNavbar = () => {
    return (
        <Navbar fluid className='dark:bg-white bg-white border-b-mist-200 border-b-2'>
            <NavbarBrand className='ps-25' >
                <img src="/assets/ContactFlow-logo.png" className="mr-3 h-9 sm:h-11" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-black text-black"></span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <img src="/assets/question.png" className='h-4.5 w-4.5 me-4' alt="question mark icon" />
                <p className='pe-30'>Support</p>
            </NavbarCollapse>
        </Navbar>
    )
}

export default TopNavbar