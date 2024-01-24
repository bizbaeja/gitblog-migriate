import {Actions} from './actions'
export const Footer = ()=>{
    return(
        <>
       <footer className="relative fixed bottom-0 w-full h-full z-[49] bg-[#1e293b] opacity-95 px-2 lg:px-4 flex justify-between items-center shadow-sm">
            <Actions />
        </footer>
        </>
    )
    }
export default Footer;