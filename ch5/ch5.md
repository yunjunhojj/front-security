# XSS - cross site scripting

수동적 기법의 대표 기법

## 능동적 기법 vs 수동적 기법

- 능동적 기법 : SQL인젝션, OS 명력인젝션 처럼 직접 공격 코드를 보내는 방식
- 수동적 기법 : 공격자가 미리 준비한 피싱 사이트를 이용해 웹 어플리케이션에 방문한 사용자가 공격 코드를 실행하도록 하는 공격

## 수동적 기법의 대표적 예시

- XSS : (cross site scripting) 악성 스크립트를 실행하는 공격 / 공격자의 페이지에서 진행되므로 동일출처정책에 위반하지 않음
- CSRF : (cross site request forgery)
- 클릭지킹 : (click jacking)
- 오픈 리다이렉트 : (open redirect)

## XSS 구조

XSS는 사용자가 입력한 문자열을 그대로 HTML에 삽입할 때 방생하는 취약점이다.

https://site.example/search?keyword=보안 -> 이라는 url 을 갖고 이를 화면에 보여줄 때

```html
<!-- keyword의 값 '보안'이 삽입됨 -->
<div id="keyword">검색 키워드 : 보안</div>
```

위 처럼 그대로 삽입하면 문제가 발생한다 예를 들면 url을 아래와 같이 바꿀 경우, 강제로 웹사이트를 이동시킬 수 있다.
(이 밖에 다양한 데이터를 다른 곳으로 이동시킬 수 있다.)

https://site.example/search?keyword=(img src onerror="location.href="https://attacker.example"/)

```html
<div id="keyword">
  검색 키워드 : (img src onerror="location.href="https://attacker.example"/)
</div>
```

## XSS 종류

- 반사형 : 공격자가 준비한 함정에서 발생하는 요청에 잘못된 스크립트를 포함하는 HTML을 서버에서 생성해 발생하는 XSS (비지속형)
- 저장형 : 공격자가 폼 등으로 부터 제출한 악성 스크립트를 포함하는 데이터가 서버에 저장되고 저장된 데이터 내 악성 스크립트가 웹 애플리케이션 페이지에 반영되어 발생하는 XSS이다 (지속형)
- DOM 기반 : 자바스크립트로 DOM을 조작할 때 발생하는 XSS 이다.

## XSS 대책
