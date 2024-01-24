
"use client"
import "./style.css"
import { EffectCube, Pagination ,Keyboard, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from "@/data.json"
import "swiper/swiper-bundle.css"
import 'swiper/css/effect-cube';
import Image from "next/image";
import { Hint } from "@/components/hint"
import Link from "next/link";
import dynamic from "next/dynamic";
import React from "react";

export const Page = () => {
  const [hover, setHover] = React.useState(false);
  const label = hover ? " 포트폴리오로 이동하기":"포트폴리오로 이동하기";

return(
    <div>

    <section>
      <div className="content">
        <h1>포트폴리오를 <br/>소개합니다</h1>

      </div>

      <Swiper 
      effect={'cube'}
      grabCursor={true}
      loopAdditionalSlides={4}
      speed={1000}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      keyboard={{
        enabled: true,
      }}
      modules={[Autoplay, Pagination, Keyboard,EffectCube]}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      pagination={true}
     
      
      >
      
            {data.map((item, i)=>(
                  <div className="swiper-wrapper"key={i}>
                  <SwiperSlide >
                    <Image src={item.src} width={100} height={100} key={i} alt="data"/>
                    <div 
                className="overlay"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                   <Hint label={label} side="right" asChild >
                    <Link  href={item.link}><div className="overlay" >
                      <h1 className="hover:text-green-400">{item.name}</h1>
                        <p>{item.desc}</p>
                        
                     </div></Link></Hint>
                     </div>
                     </SwiperSlide>
                    </div>
                
            
            ))}
      </Swiper>
    </section>
  </div>
)

}

export default Page