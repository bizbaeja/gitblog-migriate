
"use client"
import "./style.css"
import { EffectCube, Pagination ,Keyboard, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from "@/data.json"
import "swiper/swiper-bundle.css"
import 'swiper/css/effect-cube';
import Image from "next/image";
export const Page = () => {


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
                  <div className="swiper-wrapper">
                  <SwiperSlide >
                    <Image src={item.src} key={i} alt="data"/>
                   
                     <div className="overlay">
                        <h1>{item.name}</h1>
                        <p>{item.desc}</p>
                        
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