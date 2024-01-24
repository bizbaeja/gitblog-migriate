"use client"
import { Button } from "@/components/ui/buttons"



export const Actions =  () => {
    const handleAbout = (e:any) => {
        e.preventDefault();
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    const handlePortfolio = (e:any) => {
        e.preventDefault();
        const portfolioSection = document.getElementById('portfolio');
        if (portfolioSection) {
            portfolioSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    const handleContact = (e:any) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }


    };

    return(
        <div className="flex items-center justify-end gap-x-2 m-20">
    
       
           
  
    
           
                <>
                  <div className="flex  items-center gap-x-4"> 
                    <Button
                        size="sm"
                        variant="ghost"
                        className="text-xl font-bold hover:text-primary"
                        asChild
                        onClick={handleAbout}
                    >
                     
                            <span className="hidden lg:block">
                            about
                            </span>
                        
                    </Button>
                 
                </div>
                         <div className="flex items-center gap-x-4"> 
                    <Button
                        size="sm"
                        variant="ghost"
                        className="text-xl font-bold hover:text-primary m-5"
                        asChild
                        onClick={handlePortfolio}
                    >
                  
                           
                            <span className="hidden lg:block">
                                포트폴리오
                            </span>
                      
                    </Button>
                 
                </div>
              
                <div className="flex items-center gap-x-4"> 
                    <Button
                        size="sm"
                        variant="ghost"
                        className="text-xl font-bold hover:text-primary m-5"
                        asChild
                        onClick={handleContact}
                    >
                       
                           
                            <span className="hidden lg:block">
                            Contact
                            </span>
                   
                    </Button>
                 
                </div>
                </>
       
                
            
        </div>
    )
        
    
}