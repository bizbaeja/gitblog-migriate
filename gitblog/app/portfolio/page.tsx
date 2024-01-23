import React, { useState } from 'react';

import data from "@/data.json"
import type { MDXComponents } from 'mdx/types'
import Carousel from "@/components/carousel";
import dynamic from "next/dynamic";
import  Link from "next/link";
import Image from "next/image";
import Page from "./_components/swiper"
import MDXLayout from "@/components/mdx";
import classNames from "classnames";
export interface MDXProps {
   
  [key: string]: unknown;

  components?: MDXComponents;
}
type Props = {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev(): void;
  onNext(): void;
};

export function Portfolio(components: MDXComponents,props:Props): React.ReactElement<any, any> {
  
  const MDXContent0 = dynamic(() => import(`/mdx/stream.mdx`));
  const MDXContent1 = dynamic(() => import(`/mdx/aljal.md`));
  const MDXContent2 = dynamic(() => import(`/mdx/hitch.md`));
  const MDXContent3 = dynamic(() => import(`/mdx/popify.md`));

  const [currentMDX, setCurrentMDX] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const handlePrev = () => {
    const newMDX = (currentMDX - 1 + 4) % 4; // 이전 MDX 컴포넌트로 이동
    setCurrentMDX(newMDX);
    setCurrentImage(newMDX); // 이미지도 동기화
  };

  const handleNext = () => {
    const newMDX = (currentMDX + 1) % 4; // 다음 MDX 컴포넌트로 이동
    setCurrentMDX(newMDX);
    setCurrentImage(newMDX); // 이미지도 동기화
  };

  const renderMDXContent = () => {
    switch (currentMDX) {
      case 0:
        return <MDXContent0 />;
      case 1:
        return <MDXContent1 />;
      case 2:
        return <MDXContent2 />;
      case 3:
        return <MDXContent3 />;
      default:
        return null;
    }
  };

    return (
      <>
      
      <Page />
     
      <div className="lg:w-3/4 h-full mx-auto my-2 min-w-[1100px]">
        <Carousel>
        {data.map((item, i) => (
            <div 
              className={classNames("relative h-full w-full flex-[0_0_100%] aspect-video", {
                "hidden": i !== currentImage // 현재 이미지만 표시
              })} 
              key={i}>
              <Image alt="alt" fill className="h-full w-full object-cover opacity-25 rounded-xl mb" src={item.src} />
              <Link href={item.link}>
                <h1 className="hover:text-green-400 text-xl font-bold text-center p-6">{item.name}</h1>
              </Link>
              <MDXLayout>
                {i === currentMDX && renderMDXContent()} // 현재 MDX 컴포넌트만 렌더링
              </MDXLayout>
            </div>
          ))}
        </Carousel>
        <button onClick={handlePrev}  className={classNames({
          "px-3 py-1 mt-3 text-white rounded-md": true,
          "hover:bg-rose-300": true ,
          "variant":"ghost"
           
        })} >Prev</button> {/* Carousel 외부에 버튼 배치 */}
        <button  onClick={handleNext}  className={classNames({
          "px-3 py-1 mt-3 text-white rounded-md": true,
          "variant":"ghost",
          "hover:bg-rose-300": true,
  
        })}>Next</button> {/* Carousel 외부에 버튼 배치 */}
      </div>


 
      </>
    );
  };

export default Portfolio