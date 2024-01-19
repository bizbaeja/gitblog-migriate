"use client"
import { useEffect } from "react";
import "./style.css";

export const About = () => {
  useEffect(() => {
    var sliderCounter = 0;
    var sliderContent = [

      "지체하지 않고 바로 도전하는 열정",
      "소통할 줄 아는 개발자.",
      "함께 성장하는 가치를 추구합니다."
    ];
    var slider = document.querySelector("#slider");
    var sliderValue = document.querySelector("#sliderValue");

    const slide = () => {
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
    };

    slide(); // 첫 렌더링 시에만 호출

    const intervalId = setInterval(slide, 4000);

    // 컴포넌트가 언마운트될 때 clearInterval을 호출하여 setInterval을 정리
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div id="slider">
        <div className="span mr-10">배자현</div>
        <div className="span" id="sliderValue"></div>
      </div>

      <div className="youtube">youtube.com/@AdamCurzonDev</div>
    </>
  );
};

export default About;