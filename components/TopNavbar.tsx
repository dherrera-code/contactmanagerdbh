import { Navbar, NavbarBrand, NavbarToggle, NavbarCollapse, } from 'flowbite-react'

const TopNavbar = () => {
    return (
        <Navbar fluid className='dark:bg-white bg-white border-b-mist-200 border-b-2'>
            <NavbarBrand className='ps-2' >
                <img src="/assets/ContactFlow-logo.png" className="mr-3 h-9 sm:h-11" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-black text-black">Contact Manager</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                {/* <TextInput className='' size={33} placeholder='Search contacts...'></TextInput> */}
                <form className="max-w-md mx-auto">
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            
                            <img src="/assets/Search-icon.png" className='w-4.5 h-4.5 text-gray-500' alt="Search Icon!" />
                        </div>
                        <input type="search" id="search" className="block w-80 h-10 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search contacts..." required />
                    </div>
                </form>
            </NavbarCollapse>
        </Navbar>
    )
}

export default TopNavbar