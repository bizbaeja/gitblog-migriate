import { Actions } from "./actions";
import { Logo } from "./logo";
export const NavBar = () => {

    return(
        <>
          <nav className="fixed top-0 w-full h-[100px] z-[49] bg-[#1e293b] opacity-95 px-2 lg:px-4 flex justify-between items-center shadow-sm">
            <Logo />
            <Actions />
        </nav>
        </>
      
    )
}