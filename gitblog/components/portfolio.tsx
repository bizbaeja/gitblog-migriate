
import data from "@/data.json"
import type { NextPage } from "next";
import Carousel from "@/components/carousel";
import  Link from "next/link";
import Image from "next/image";

const Portfolio: NextPage = () => {
    return (
      <div className="lg:w-3/4 mx-auto my-2">
        <Carousel>
          {data.map((data, i) => (
            <div className="relative h-96 w-96 flex-[0_0_100%]" key={i}>
              <Link href={data.link}>
                <Image alt="alt" fill className="h-full w-full object-cover opacity-35" src={data.src} />
              <div className="hover:text-green-400 absolute inset-0 flex flex-col justify-center items-center">
                <h2 className="text-xl font-bold text-center">{data.name}</h2>
                <p className="text-muted-foreground text-center">{data.desc}</p>
              </div>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    );
  };

export default Portfolio