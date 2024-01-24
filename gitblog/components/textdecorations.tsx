import { useEffect } from "react";

export const useSlide = () => {
  useEffect(() => {
    let sliderCounter = 0;
    const sliderContent = [
      "Web Development",
      "WordPress Development",
      "App Development",
      "Plugin Development",
      "CRM Integrations"
    ];

    const updateSlider = () => {
      const sliderValue = document.querySelector("#sliderValue");

      if (sliderCounter >= sliderContent.length) {
        sliderCounter = 0;
      }

      if (sliderValue) {
        sliderValue.innerHTML = "";
        sliderValue.classList.remove("holder-animation");
        (sliderValue as HTMLElement).offsetWidth;
        sliderValue.classList.add("holder-animation");

        for (let i = 0; i < sliderContent[sliderCounter].length; i++) {
          let letterDiv = document.createElement("div");
          letterDiv.innerHTML = sliderContent[sliderCounter][i] === " " ? "&nbsp;" : sliderContent[sliderCounter][i];
          letterDiv.classList.add("start", "animation");
          letterDiv.style.animationDelay = `${i / 10}s`;
          sliderValue.appendChild(letterDiv);
        }
      }

      sliderCounter++;
    };

    const intervalId = setInterval(updateSlider, 4000);

    // 첫 업데이트를 위해 한 번 호출
    updateSlider();

    // 컴포넌트 언마운트 시 인터벌 정리
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // 아무것도 반환하지 않음
};

export default useSlide;