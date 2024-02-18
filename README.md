# WebKIT640 부트캠프 홈페이지
![webkit640_thumnail](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdqVnxr%2Fbtstnw3qLub%2F4LYA8TEK4ce3sRy6vWG9E0%2Fimg.png)

* 프로젝트명: WebKIT640 홍보&모집 홈페이지
* 프로젝트 기간: 2022. 10 - 2022. 11
* 팀원: BE - 송민규(팀장), 강승우 | FE - 김다함, 김제윤
* 배포 링크: [https://webkit640.com/](https://webkit640.com/)

<br/>

## 프로젝트 소개
금오공과대학교 학생을 대상으로 웹 개발 부트캠프 WebKIT640을 홍보&모집하는 홈페이지 입니다.

다양한 모집 정보와 학생 후기를 확인할 수 있습니다. 모집 기간일 경우 회원가입을 통해 부트캠프 신청이 가능합니다.

2022년 12월 2기 모집을 시작으로 2023년 6열 3기 모집까지 서비스했습니다.

<br/>

## 💼 Front-end 팀원 & 역할

|  김다함 | 김제윤 |
| :----------------------: | :----------------------: |
| <p align="left"> - 회원가입/로그인 <br/> - 메인페이지 UI 및 기능 <br/> - About us 페이지 UI 및 기능 <br/> - 모집 안내 페이지 <br/> - 행사자료 페이지 <br/> - 관리자 페이지 <br/> -> 메인페이지 관리 </p> | <p align="left">- 관리자 페이지 <br/> -> 지원자 목록 확인 <br/> -> 지원자 선발/합격발표 <br/> -> 게시물 공개 여부 관리 <br/> -> 관리자 권한부여 <br/> - 학생 마이 페이지(지원서 제출, 합격 여부 확인) <br/> - 게시판 페이지 UI 및 기능 - FAQ 페이지 </p> |

<br/>

## ⚙️ Stacks(Front-end)

* **React**
  * 컴포넌트 단위 개발을 위해 React 라이브러리를 사용합니다.
  * 홍보 페이지라는 점에서 검색 엔진 최적화를 위해 SSR(Server Side Rendering)을 고민했으나, 사용 대상이 본교 학생들로 한정적이고, 검색 엔진을 통한 접속보다 대학교 커뮤니티 홍보를 통한 접속이 많을 것이라 판단했습니다.
  * 따라서 빠른 화면 전환으로 사용자 편리를 높이는 데 초점을 두고 CSR(Client Side Rendering)을 선택했습니다.
* **Javascript**
  * 메인 페이지에서 학생들의 눈길을 이끄는 다양한 애니메이션을 구현하기 위해 Javascript로 작성합니다.
* **MUI(Meterial UI)**
  * 2개월 동안 빠르게 구현을 마쳐야한다는 점을 고려해 기본적인 UI는 MUI 라이브러리로 간단하게 구현합니다.

<br/>

## 프로젝트 결과물

<br/>

### 메인 페이지

<br/>

![메인 페이지 이미지1](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FuVI7V%2FbtsteSNXxdt%2F0FIcAvXFYJBFriKL0Ij6M0%2Fimg.png)

* 메인 페이지 모집 카운트다운 UI 입니다.
* 모집 기간 중에는 마감일까지 카운트다운이 실행되고, 모집 기간이 지나면 '교육중' 화면으로 바뀝니다.

<br/>

![메인 페이지 이미지2](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FeuKeXD%2Fbtstg3Bl1tN%2FkQ5POiEggOjpL6g0jfUB8K%2Fimg.png)

* 메인 페이지에서 모집 정보를 확인할 수 있는 화면입니다.
* 스크롤을 따라 움직이는 Navbar를 클릭하면 모집안내/주요일정/교육정보/수강후기 를 빠르게 자동 스크롤합니다.
* 메인 페이지의 경우 태블릿&모바일 버전도 지원합니다.

<br/>

### About us 페이지

![About us 페이지](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FyWlZr%2FbtstfmBkwxP%2FCvvg3aiBXh3Lsc6pLNZgmK%2Fimg.png)

* 맨 위 상단 Navbar의 첫 번째 메뉴인 'About us'를 클릭하였을 때 나타나는 페이지 입니다.
* 부트캠프에 대한 자세한 커리큘럼 등 다양한 정보를 제공합니다.
* 관리자 페이지에서 수료생 취업 정보를 등록하게 되면 페이지 가장 하단부에 '수료생이 취업한 기업들' 란이 생성됩니다.

<br/>

### 관리자 페이지

![지원하기/합격여부확인 이미지](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fn6dXz%2FbtstkUcUowL%2FDQn3iXNOxVR2BsH1OzveKK%2Fimg.png)
* 학생 회원으로 로그인 후 '지원하기' 버튼 클릭 시 사용 가능한 서비스 입니다.
* 지원서 양식을 다운로드 받아 함께 첨부한 뒤 제출하면 부트캠프 지원이 가능합니다.
* 합격 발표 기간에 학생-마이페이지-합격여부에 들어가면 선발 결과를 확인할 수 있습니다.

<br/>

![관리자 권한 부여 이미지](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FblrDC5%2FbtstkXna3zh%2FPW76Z1grbmkfo7fUMZINbk%2Fimg.png)
* 2명 이상의 관리자를 필요로 할 때, 관리자 권한을 부여할 수 있습니다.
* '관리자'회원으로 가입 후, 마스터 계정을 통해 허가 받으면 최종적으로 관리자 권한을 가지게 됩니다.

<br/>

![메인페이지 관리 이미지](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb2vWqR%2FbtstfcyNi0c%2Full1IP0qq9b5Hx9l6XVsK0%2Fimg.png)
* 메인 페이지에 존재하는 모든 모집 정보를 관리자 권한으로 작성/수정할 수 있습니다.
* 홍보 포스터 등 이미지 첨부파일(jpeg, png) 등록 시 메인 화면의 '모집 안내'에서 확인할 수 있습니다.

<br/>

![게시물 열람 관리 이미지](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbvYCkx%2Fbtstlny8rvn%2FB3pgQdzq6jpYxSoETH0Wtk%2Fimg.png)
* 수강 후기 게시판에 작성된 게시물들의 열람을 관리하는 페이지 입니다.
* 부적합한 게시물을 작성할 시 관리자 권한에 따라 게시물을 비공개 처리 할 수 있습니다.

<br/>

![지원자 선발 이미지](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FWlVl3%2FbtstbbmRUF3%2FgX0dGp7H8dUIKSmR4MPEok%2Fimg.png)
* 관리자가 지원자를 선발할 수 있는 페이지 입니다.
* 지원자 선발 -> 지원자 최종 선발 후 합격 발표가 이뤄집니다.

<br/>

### 게시판 페이지(행사자료)

![행사 자료 이미지](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb161aQ%2FbtstlJ9Wh6U%2F4YXtMGRJ6npHd8jxJo76UK%2Fimg.png)
* 관리자 권한으로 운영되는 이미지 갤러리 게시판 입니다.

<br/>

## 시연 영상

[![WebKIT640](http://img.youtube.com/vi/JHYD_qcCGSw/0.jpg)](https://youtu.be/JHYD_qcCGSw)

<br/><br/>
