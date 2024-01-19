
import data from "@/data.json"
import type { NextPage } from "next";
import Carousel from "@/components/carousel";
import  Link from "next/link";
import Image from "next/image";
import Page from "./_components/swiper"
const Portfolio: NextPage = () => {
    return (
      <>
      <Page />
      <div className="lg:w-3/4 mx-auto my-2">
        <Carousel >
          {data.map((data, i) => (
            <div className="relative h-96 w-96 flex-[0_0_100%]" key={i}>
                <Image alt="alt" fill className="h-full w-full object-cover opacity-35" src={data.src} />
              <div className=" absolute inset-0 flex flex-col justify-center items-center">
              <Link href={data.link}>
                <h2 className="hover:text-green-400 text-xl font-bold text-center">{data.name}</h2>
              </Link>
                <p className="text-muted-foreground text-center">{data.desc}</p>
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