import { Container } from "../shared/Container.tsx";     
import logo from "../../assets/icon.svg";
import { NavItem } from "../shared/NavItem.tsx";
import { BtnLink } from "../shared/BtnLink.tsx";

const navItems = [
    // '#' allows to scroll to a section since it is an SPA
    {href:"#", text:"Home"},
    {href:"#services", text:"Services"},
    {href:"#About Us", text:"About Us"},
    {href: "#Features", text:"Features"},
    {href:"#contact", text:"Contact"},

];

export const Navbar = () => {
    return ( <header className="absolute inset-x-0 top-0 z-50 py-6">
        <Container>
            <nav className="w-full flex justify-between gap-6 relative">
                {/* Logo */}
                <div className="min-w-max inline-flex relative">
                    <a href="/" className="relative flex items-center gap-3">
                        <img src={logo} alt="tahaListens Logo" className="w-10 h-10" />
                        <div className="inline-flex text-lg font-semibold text-heading-1" >tahaListens</div>
                    </a>
                    </div>
                    {/* Links */}
                    <div className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center 
                    absolute top-full left-0 lg:static lg:top-0 bg-body lg:bg-transparent 
                    border-x border-x-box-border lg:border-x-0 lg:h-auto h-0 overflow-hidden">
                    
                    <ul className="border-t border-box-border lg:border-t-0 px-6 lg:px-0 
                                pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg text-heading-2 
                                w-full lg:justify-center lg:items-center" >
                        {navItems.map((item, key)=>(
                            <NavItem href={item.href} text={item.text} key={key}/>
                        ))}
                    </ul>
                    {/* Get Started Button */}
                    <div 
                    className="lg:min-w-max flex iteems-center sm:w-max w-full pb-6 
                    lg:pb-0 border-b border-box-border lg:border-0
                    px-6 lg:px-0" 
                    >
                        <BtnLink text="Get Started" href="#cta" className="" />
                    </div>
                </div>
            </nav>
        </Container>
    </header>
    );
};