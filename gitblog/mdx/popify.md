<aside>
💡 Kakao map API 기본 map에서 팝업스토어의 위치를 마킹하고, 스토어별 정보를 제공하기 위하여 장소 검색, 목록으로 표출 기능 추가 구현

</aside>

<aside>
💡 유저 상태관리 이슈 : localStorage에 로그인 정보를 저장, 어떤 컴포넌트에서든지 유저의 상태정보를 전달할 수 있는 방법이 필요.

→ AuthProvider를 사용, 전역 상태관리를 통해 해결

</aside>

- 회원별 이미지 리뷰 등록, 수정, 삭제 기능구현 중 이미지 업로드가 안되는 현상
    
    →  폼을 전송할 때 HTTP 메시지의 `Content-Type` 속성은 항상 `multipart/form-data` 여야 함.
    

        →  `new FormData()`.를 통해 배열인 `images` 를 `post`하여 해결.