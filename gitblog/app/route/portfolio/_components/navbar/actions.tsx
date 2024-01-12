import { 
    SignInButton,
    currentUser ,
    UserButton} from "@clerk/nextjs"
import { Button } from "@/components/ui/buttons"
import Link from "next/link"


export const Actions = async () => {
    const user = await currentUser();
    return (
        <div className="flex items-center justify-end gap-x-2 ml-4">
           {!user && (
            <SignInButton>
                <Button
                 size="sm"
                 variant-="primary"   
                >
                    Login
                </Button>
            </SignInButton>
            )}
            {!!user && (
                <>
                         <div className="flex items-center gap-x-4"> 
                    <Button
                        size="sm"
                        variant="ghost"
                        className="text-muted-foreground hover:text-primary"
                        asChild
                    >
                        <Link href={`/route/portfolio`}>
                           
                            <span className="hidden lg:block">
                                포트폴리오
                            </span>
                        </Link>
                    </Button>
                 
                </div>
                <div className="flex items-center gap-x-4"> 
                    <Button
                        size="sm"
                        variant="ghost"
                        className="text-muted-foreground hover:text-primary"
                        asChild
                    >
                        <Link href={`/route/about`}>
                           
                            <span className="hidden lg:block">
                            about
                            </span>
                        </Link>
                    </Button>
                 
                </div>
                <div className="flex items-center gap-x-4"> 
                    <Button
                        size="sm"
                        variant="ghost"
                        className="text-muted-foreground hover:text-primary"
                        asChild
                    >
                        <Link href={`/route/contact`}>
                           
                            <span className="hidden lg:block">
                            Contact
                            </span>
                        </Link>
                    </Button>
                 
                </div>
                </>
       
                
            )}
        </div>
    )
}