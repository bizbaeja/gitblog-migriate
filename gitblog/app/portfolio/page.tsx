
import data from "@/data.json"
import type { MDXComponents } from 'mdx/types'
import Carousel from "@/components/carousel";
import dynamic from "next/dynamic";
import  Link from "next/link";
import Image from "next/image";
import Page from "./_components/swiper"
import MDXLayout from "@/components/mdx";

export interface MDXProps {
   
  [key: string]: unknown;

  components?: MDXComponents;
}

export function Portfolio(components: MDXComponents): React.ReactElement<any, any> {
  
    //stream.mdx를 불러오는법
    const MDXContent = dynamic(() => import(`/mdx/stream.mdx`))
    return (
      <>
      <Page />
     
    
      <div className="lg:w-3/4 h-full mx-auto my-2 min-w-[1100px]">
        <Carousel >
          {data.map((data, i) => (
            
            <div className="relative h-full w-full flex-[0_0_100%] aspect-video" key={i}>
                <Image alt="alt" fill className="h-full w-full object-cover opacity-25 rounded-xl mb-[100px]" src={data.src} />
              <div className=" absolute inset-0 flex flex-col justify-center items-center">
              <Link href={data.link}>
                <h1 className="hover:text-green-400 text-xl font-bold text-center p-6">{data.name}</h1>
              </Link>
              <MDXLayout>
              <MDXContent  components={components} >{data.desc}</MDXContent>
              </MDXLayout>
              
                <div className="flex">
                    <Link href={data.github} >
                        <Image alt="github" src="/github.svg" width={30} height={30}  style={{backgroundColor:"white", borderRadius:"50%"}}/>
                    </Link>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      </>
    );
  };

export default Portfolio