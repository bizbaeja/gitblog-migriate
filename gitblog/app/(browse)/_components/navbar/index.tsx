import { Actions } from "./actions";
import { Logo } from "./logo";
export const NavBar = () => {

    return(
        <>
          <nav className="fixed top-0 w-full h-[100px] z-[49] bg-[#6bb1ef] px-2 lg:px-4 flex justify-between items-center shadow-sm">
            <Logo />
            <Actions />
        </nav>
        </>
      
    )
}