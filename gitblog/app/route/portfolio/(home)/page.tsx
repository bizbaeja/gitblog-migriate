"use client"
import Portfolio from "@/components/portfolio";
interface PortfolioPageProps {

        name: string;
        src: string;
        desc: string;
    
}

const Page = ({ name, src, desc }: PortfolioPageProps) => {
    return (
        <div >
            <Portfolio 
             
            />
        </div>
    );
}

export default Page