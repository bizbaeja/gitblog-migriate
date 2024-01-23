<aside>
💡 유저관리 : 일시적으로 필요한 데이터(일회성 로그인) 저장을 위해`sessionStorage`에 저장된 로그인 정보를 불러와 조건에 따라 페이지를 `/main`으로 이동할 수 있게 함.

</aside>

- 컴포넌트 렌더링 중 form 값이 초기화되는 문제 발생.
→`useRef` 로 입력받은 값을 참조하여 리렌더링이 되어도 값을 받을 수 있도록 조치.
- 새로고침 후 store state 가 유지되지 않는 현상 해결
    
    → `redux-persist` 를 이용해 App 컴포넌트를 PersistGate로 매핑함.
    

streamJam