
import data from "@/data.json"
import React, { useEffect, useState } from 'react';
import  Link from "next/link";
interface PortfolioProps {
    name: string;
    src: string[];
    desc: string;
    };

    const Portfolio: React.FC<PortfolioProps>=({name,src,desc}: PortfolioProps) => {
    

    return (
        <>
        <div className=" pt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2lx:grid-cols-5 gap-4">
            
            <div>
                <img className="rounded-md " width="500px" height="400px" src={data[0].src}/> 
                <Link className="hover:text-green-500" href={data[0].link}>
                    <p className="text-xl font-bold text-center">
                        {data[0].name}
                    </p>
                </Link>
                <p className="text-muted-foreground text-center">
                    {data[0].desc}
                </p>
            </div>
              
              <div>
              <embed className="rounded-md"src={data[2].src} width="500px" height="400px" />
              <Link className="hover:text-green-500"href={data[2].link}>
              <p className="text-xl font-bold text-center">
                    {data[2].name}
                </p>
              </Link>
            
                <p className="text-muted-foreground text-center">
                    {data[2].desc}
                </p>
              </div>
              
              <div>
         
              <img className="rounded-md h-full w-full" width="500px" height="400px" src={data[1].src}/>
              <Link className="hover:text-green-500" href={data[1].link}>
              <p className="text-xl font-bold text-center">
                        {data[1].name}
                    </p>
              </Link>
            
                    <p className="text-muted-foreground text-center">
                        {data[1].desc}
                    </p>
              </div>
              <div>
              <img className="rounded-xl" width="600px" height="400px" src={data[3].src}/>
                <Link className="hover:text-green-500" href={data[3].link}>
                    <p className="text-xl font-bold text-center">
                        {data[3].name}
                    </p>
                </Link>
              
                    <p className="text-muted-foreground text-center">
                        {data[3].desc}
                    </p>
              </div>
        </div>

        </>
        
    );
}

export default Portfolio