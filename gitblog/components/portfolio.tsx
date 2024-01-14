"use client";
import data from "@/data.json"
import Image from "next/image";
interface PortfolioProps {
    name: string;
    src: string;
    desc: string;
    };

 const Portfolio = ({name,src,desc}: PortfolioProps) => {
    //  img_src = src;
    // document.getElementById("img")
    // img_src =  "new_img.jpg"

 return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2lx:grid-cols-5 gap-4">
               {data.map((result)=>(
     <embed src={result.src} width="100%" height="100%" />
               ))}
            </div>
 )
}

export default Portfolio