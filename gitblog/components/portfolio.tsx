
import data from "@/data.json"
import React, { useEffect, useState } from 'react';

interface PortfolioProps {
    name: string;
    src: string[];
    desc: string;
    };

    const Portfolio: React.FC<PortfolioProps>=({name,src,desc}: PortfolioProps) => {
    
    const [urlData, setUrlData] = useState<any[]>([undefined]);

   
    useEffect(() => {
        const fetchData = async () => {
            let portfolio = src;
      
              const results = portfolio.map((url)=>{
                return fetch(url)
              
              })
      
            setUrlData(results);
          };
      
          fetchData();
    }, []);
    return (
        <>
        <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2lx:grid-cols-5 gap-4">
              
              <img className="rounded-md" width="500px" height="400px" src={data[0].src}/>
              
                
                <embed className="rounded-md"src={data[2].src} width="500px" height="400px" />
                <img className="rounded-md"width="500px" height="400px" src={data[1].src}/>
        <img className="rounded-xl" width="500px" height="400px" src={data[3].src}/>
        </div>

        </>
        
    );
}

export default Portfolio