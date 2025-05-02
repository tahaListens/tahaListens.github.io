import { useEffect } from 'react';
import { Footer } from './elements/Footer';
import { Navbar } from './elements/Navbar';

//layout is a wrapper component that provides a consistent layout for the application

interface LayoutProps {
    title: string;
    children: React.ReactNode;
}

export const Layout = ({title, children}: LayoutProps) => {
    //runs when Layout is mounted or when title changes
    useEffect(() => {
        document.title = title;
    }, [title]);

    return <>
        <Navbar />

        <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden" >   
        {children}
         </main>
         
        <Footer />
    </>
    

    
};