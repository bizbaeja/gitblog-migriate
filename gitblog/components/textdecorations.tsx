"use client"
import { useEffect } from "react";



export const useSlide = () => {
useEffect(()=>{
    var sliderCounter = 0;
    var sliderContent = [
      "Web Development",
      "WordPress Development",
      "App Development",
      "Plugin Development",
      "CRM Integrations"
    ];
    var slider = document.querySelector("#slider");
    var sliderValue = document.querySelector("#sliderValue");
    
      if (sliderCounter >= sliderContent.length) {
        sliderCounter = 0;
      }
    
      sliderValue!.innerHTML = "";
      (sliderValue as HTMLElement)!.classList.remove("holder-animation");
      void (sliderValue as HTMLElement)!.offsetWidth;
      (sliderValue as HTMLElement)!.classList.add("holder-animation");
    
      for (let i = 0; i < sliderContent[sliderCounter].length; i++) {
        let letterDiv = document.createElement("div");
        letterDiv.innerHTML = sliderContent[sliderCounter][i];
    
        if (letterDiv.innerHTML == " ") {
          letterDiv.innerHTML = "&nbsp;";
        }
        letterDiv.classList.add("start");
        letterDiv.classList.add("animation");
        letterDiv.style.animationDelay = i / 10 + "s";
        sliderValue!.appendChild(letterDiv);
    }
    
      sliderCounter++;
    
    
    useSlide();
    setInterval(useSlide, 4000);   
},[])
}

export default useSlide;