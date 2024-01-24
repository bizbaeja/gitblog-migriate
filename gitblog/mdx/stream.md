### 

<aside>
💡 데이터를 불러오는 시간이 길어 UX 가 저해될 우려가 있어, `Skeleton UI Component` 를 사용하여, 로딩시간동안  시각화 효과를 줌

</aside>

<aside>
💡 livekit 의 ingress API 사용법에 대한 이해의 어려움과 컴포넌트와 서비스 연결에 대한 고민들이 있었음.

</aside>

- lib폴더에 db 서비스를 분류함으로  메소드를 재사용 할 수 있게끔 함 .
- ‘@ 경로’ 를 사용하기 위해 components.json에 아래와 같이 정의함.
    
    ```
    "aliases": {
        "components": "@/components",
        "utils": "@/lib/utils"
      }
    ```
    
- clerk 라이브러리의  authMiddleware 의 debug:true 옵션을 사용하여 NextJS 에서 좀처럼 힘든 auth debugging 을 할 수 있었다.