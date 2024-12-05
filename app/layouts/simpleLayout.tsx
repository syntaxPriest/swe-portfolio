import { navItemsProps } from '../page';
import Header from './header'
// import Footer from '../Footer'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    centered?: boolean
    navScroller: (refId: navItemsProps) => void;
}

export default function SimpleLayout({ children, className, centered = true, navScroller }: IProps) {
    return (
        <div
            className="min-h-[100vh]"
        >
            <main className={'w-[100%] max-w-[1440px] mx-auto'}>
                <Header 
                    navScroller={navScroller}
                />
                {children}
                {/* <Footer /> */}
            </main>
        </div>
        
    )
}