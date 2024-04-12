# Origin에 의한 애플리케이션 간 접근 제한

잘못된 접근을 막기 위한 동일 출처 정책 (Same Origin Policy)의 구조를 알아본다.
그리고 CORS(cross orgin resource sharing)을 살펴본다.
웹 보안의 기본이므로 확실하게 알아둬야한다.

사이드 채널 공격과 쿠키의 전송을 학습한다.

## 애플리케이션 간 접근 제한의 필요성

iframe을 사용해서 피싱 사이트를 만들어서 개인정보를 탈취하는 범죄가 있다.

## 동일 출처 정책에 의한 보호

- 동일 출처 정책 : 브라우저는 "출처"라는 경계를 설정해 서로의 접근을 제한한다.
  출처와 같은 기능을 통해 개발자는 특별한 대책을 세우지 않아도 다른 웹 애플리케이션에서의 접근을 제한할 수 있다.

출처의 예시
"https://example.com:433/path/to/index.html" 의 url이 있을 때, 출처의 경계는 "https://example.com:433" 이다.

- 출처가 같다 -> 동일출처
- 출처가 다르다 -> 교차출처
  스키마명, 호스트명, 포트번호 중 하나라도 다르면 교차출처

### 동일출처 정책 -> 교차 출처 리소스에 접근을 제한하는 방식

자바스크립트, iframe, <canvas>, web storage와 indexedDB 등의 접근에 제한
반대로, 제한되지 않는 사례

- <script>, <link>, <img>, <video>, <embed>, @font-face
  위의 경우에는 cors와 cross orgin 속성을 사용하여 접근을 제한할 수 있다.

## preflight

서버로 바로 요청을 보내는 Simple Request와는 다르게, 지금 보내는 요청이 유효한지를 확인하기 위해 OPTIONS 메서드로 예비 요청을 보내는 것이다.

- Content-Type이 다음과 같은 GET, HEAD, POST 요청
  - application/x-www-form-urlencoded
  - multipart/form-data
  - text/plain
- 요청에 사용된 XMLHttpRequest.upload 객체에 이벤트 리스너가 등록되어 있지 않을 때
- ReadableStream 객체가 요청에서 사용되지 않을 때
