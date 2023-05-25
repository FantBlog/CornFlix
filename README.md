# CornFlix

2023 1학기 SSAFY Final 관통프로젝트 : 영화 추천 사이트
<br><br>

## 👨‍💻 <span style="background-color:#ffdb9c; color:000000;">팀원 소개 및 분담 내역 <span> 

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/se0987"><img src="https://avatars.githubusercontent.com/u/122589779?v=4" width="100px;" alt="NEU-chaldea"/><br /><sub><b>백승은(se0987)</b></sub></a><br /><a href="#maintenance-flaxinger" title="Maintenance">🚧</a></td>
      <td align="center"><a href="https://github.com/FantBlog"><img src="https://avatars.githubusercontent.com/u/115213236?v=4?s=100" width="100px;" alt="FantBlog"/><br /><sub><b>박성욱(FantBlog)</b></sub></a><br /><a href="https://github.com/BaekjoonHub/BaekjoonHub/commits?author=cokemania2" title="Code">💻</a></td>    </tr>
  </tbody>
</table>

- 박성욱
> 데이터 베이스 모델링(ERD) 설계, 백엔드 Django api 설계 및 개발, 영화 추천 알고리즘 및 관련 알고리즘 개발, 
> Vue 전체적인 Vuex, api(Axios) 개발

- 백승은
> Views, component 설계 및 개발, router 개발, 페이지 목업 설계 & 전체 프로젝트 디자인

<br>
## ✔ <span style="background-color:#4dd966; color:ffffff;"> 프로젝트 사용방법 <span> 

- 가상환경 생성   
python -m venv .venv
pip install -r requirement.txt

- 장고 실행   
cd final-pjt-back   
python manage.py makemigrations   
python manage.py migrate   
python manage.py loaddata movies.json   
python manage.py runserver   

- vud 실행   
cd final-pjt-front   
서버 주소를 넣을 환경변수 파일 생성 (.env.local)   
VUE_APP_API_URL=http://127.0.0.1:8000/   
VUE_APP_IMG_URL=http://127.0.0.1:8000   
npm i    
npm run serve

<br>

## 🗓️ <span style="background-color:#ffdb9c; color:000000;"> 프로젝트 일정 <span> 

- 2023.05.16 ~ 2023.05.26(총10일)

[Final 관통프로젝트 일지](https://www.notion.so/PJT-fcd3fd062f4846aa92f044197db2ef6c?pvs=4)

<br>

## 🎞 <span style="background-color:#ffdb9c; color:000000;"> 목표 서비스 <span> 

### ❇️ 초기구상 목업
![초기구상](src/%EC%B4%88%EA%B8%B0%EA%B5%AC%EC%83%81%EB%AA%A9%EC%97%85.png)


### 🚩 구현 목표 ✅❎
1. 회원 가입 ✅
- 회원가입, 로그인, 로그아웃
- 비로그인 시 특정 페이지 접근 불가, 로그인 페이지 이동
- 회원가입, 로그인, 로그아웃 시 페이지 이동

<br>

2. 영화 정보 ✅
- 영화 데이터 50개 이상 가져오기 
- 영화 리뷰 생성, 수정, 삭제
  - 별점(평점)
  - 프로필 사진 보이기 ⭐
- 영화 추천
- 영화 리스트 회전하며 보여주기 (롤링/캐러셀)

<br>

3. 영화 추천 알고리즘 ✅
- 최신영화
- 추천영화
- 관련영화

<br>

4. 커뮤니티 ✅
- 게시글 생성, 수정, 삭제
- 댓글 생성, 수정, 삭제

<br>

5. 프로필 ✅
- 프로필 사진 ⭐
- 좋아요 한 영화 목록
- 나의 게시글/댓글 목록
- 추천 영화 목록


<br>

## 🎫  <span style="background-color:#ffdb9c; color:000000;"> 데이터베이스 모델링 (ERD) <span>

![ERD_image](src/ERD_image.png)

<br>

## 🎟  <span style="background-color:#ffdb9c; color:000000;">  API 설계 <span>

| HTTP verb | URL패턴            | 설명                                                 |
| --------- | ------------------ | --------------------------------------------------- |
|           | `admin/`           | admin.site.urls                                     |
|           | `movies/`          | include('movies.urls')                              |
|           | `community/`       | include('communitys.urls')                          |
|           | `user/`            | include("accounts.urls")                            |
|           | `accounts/`        | include('dj_rest_auth.urls')                        |
|           | `accounts/signup/` | include('dj_rest_auth.registration.urls')           |



| HTTP verb | URL 패턴                          | 설명                       |
| --------- | --------------------------------- | ------------------------- |
| GET, PUT  | `user/profile/<str:user_name>/`   | 유저 프로필 조회, 수정      |
| POST      | `user/<str:user_name>/follow/`    | 유저 팔로우                |


| HTTP verb        | URL 패턴                                  | 설명                        |
| ---------------- | ----------------------------------------- | -------------------------- |
| GET, POST        | `community/posts/`                        | 게시글 전체 조회, 생성       |
| GET, PUT, DELETE | `community/posts/<int:post_pk>/`          | 상세 게시글 조회, 수정, 삭제 |
| POST             | `community/posts/<int:post_pk>/like/`     | 게시글 좋아요               |
| GET, POST        | `community/posts/<int:post_pk>/comments/` | 댓글 전체 조회, 생성         |
| PUT, DELETE      | `community/comments/<int:comment_pk>/`    | 댓글 수정, 삭제             |



| HTTP verb | URL 패턴                                                     | 설명                              |
| --------- | ------------------------------------------------------------ | --------------------------------- |
| GET       | `movies/`                                                    | 영화 전체 목록 조회                |
| GET       | `movies/<int:movie_pk>/`                                     | 상세 영화 조회                     |
| POST      | `movies/<int:movie_pk>/like/`                                | 유저의 좋아요                      |
| GET, POST | `movies/<int:movie_pk>/reviews/`                             | 리뷰 전체 조회 및 작성             |
| PUT, DELETE | `movies/reviews/<int:review_pk>/`                          | 리뷰 수정 및 삭제                  |
| GET       | `movies/relate/<int:movie_pk>/`                              | 특정 영화의 관련 영화 조회          |
| GET       | `movies/recent/<int:page>/`                                  | 최신 영화 조회                     |
| GET       | `movies/recommend/<int:page>/`                               | 추천 영화 조회                     |
| GET       | `movies/genre/<int:genre_id>/<int:page>/`                    | 특정 장르 영화 조회                |


<br>

## 🎬 <span style="background-color:#ffdb9c; color:000000;"> 영화 추천 알고리즘 <span>

유저가 좋아요 누른 영화 목록을 가져와서 좋아요 영화들의 장르를 합산 합니다.
합산된 장르중에서 가장 많이 뽑힌 장르 3개를 선정해서
그 3개의 장르가 포함되는 영화를 가중치를 반영하여 추천하였습니다


가중치(SCORE)는 아래의 방법으로 구했습니다.

>영화 추천 시스템를 만들기위해 TMDB Ratings를 사용했습니다.
>IMDB의 weighted rating 공식을 사용하여 SCORE를 계산했습니다.   
>수학적으로는 다음과 같이 표현됩니다.   
>Weighted Rating $SCORE =(\frac{v}{v+m}·R)+(\frac{m}{v+m}·C)$   
>v : 영화에 대한 평가 수   
>m : 차트에 표시되어야 하는 최소 평가 수   
>R : 영화의 평점   
>C : 전체 영화에 대한 평균 점수   

이런 SCORE를 사용한 이유는 TMDB에서 제공하는 정보를 그대로 사용하게 되면
수만명에게 80점을 받은 인셉션보다 수십명에게 85점을 받은 무명영화를 추천하기 때문입니다.

<br>

## ✨ <span style="background-color:#ffdb9c; color:000000;"> 서비스 대표 기능 <span>

### 🎬 관련 영화 시스템

서비스 대표 기능중에 하나는 관련 영화 시스템입니다.   
저희는 영화 상세 페이지에서 이 영화와 비슷한 영화를 추천해 주었으면 좋겠다고 생각하였고,
관련 영화 알고리즘을 넣게 되었습니다.

전체적인 알고리즘은 코사인 유사도 방식을 이용하였고,
영화들의 줄거리 설명을 벡터로 변환한뒤 코사인 유사도를 분석하여
줄거리가 비슷한 영화를 관련영화로 추천해 주도록 하였습니다.


### 📷프로필 사진 기능


<br>

## 📕 <span style="background-color:#ffdb9c; color:000000;"> 후기 <span>
- 박성욱
```
느낀점 1. 
여러가지 디자인이나 편의성을 위한 기능을 넣으려고 하다보니, 필요한 정보가 많아지게 되어 BackServer를 건들게 되는경우가 생각보다 자주 발생하였다. 2명이서 진행한 소규모 프로젝트였지만, 대형 프로젝트였으면 처음 기획을 할 때부터 꼼꼼하게 작성해서 프론트에서 백으로 이렇게 바꿔주세요 같은 수정 요청이 생기지 않도록 해야겠다.



어려웠던점 1. 프로젝트 직관성
비슷한 페이지나, 비슷한 기능들끼리 같은 폴더에 모아서 정리를 깔끔하게 하고 싶었지만 완성하고 나니 생각보다 결국 난잡하게 파일들이 나열되어 있었다.
그래도 같은기능을 하는 컴포넌트는 params와 query를 통해 동일 vue파일을 사용하도록 한점은 뿌듯했다.

아쉬웠던점 1 : 미래를 내다보고 기반을 튼튼하게 잡자.
처음 기획한 ERD를 수정하게 된점이 아쉬웠다.
처음 프로젝트를 시작하고 한 일이 프로젝트 끝까지 함께 갈 ERD를 만드는 것이었는데 꼼꼼히 만들었다고 생각했지만 프로젝트를 진행하다보니 새로운 기능을 추가할때 어쩔수 없이 model을 변경하는 경우가 생겼다. 첫 단추를 잘 꿰매고 싶었지만 그렇지 못했던것 같다.

아쉬웠던점 2 : 일단 넣고 넘치면 빼자!
back server api 를 개발하면서 serializer를 통해 전달할 데이터를 자꾸 변경한점이 아쉬웠다. 이런 기능에 사용할 정보를 넘기는 api면 이런 정보는 필요없지 않을까 하고 의도적으로 전달하지 않은 데이터가 필요해지는 상황이 생각보다 많았다.

이쉬웠던점 3 : 도전이 아쉬웠던 프로젝트.
영화 추천을 위해 코사인 유사도 분석을 사용하긴 하였지만, 실제로는 코사인 유사도 분석의 원리, 개념 등을 정확하게 이해하지 못하였다.
그저 파이썬이 지원하는 라이브러리를 사용하여 이렇게 하면 작동한다는 인터넷 글을 `copy`만 하였기 때문이다.
이 코드가 어떤과정이고 이런식으로 진행 하는구나 정도에서 그치지 않고, 실제 코드의 작동원리나 이를 응용한 알고리즘을 만들지 못한점이 아쉬웠다. 
```

- 백승은
> 프론트와 백을 연결하는게 생각대로 되지 않았고, 어려웠다. 덕분에 팀원의 도움을 많이 받았고 그만큼 보답하지 못한 것 같아서 미안했다.
<br><br>
열흘동안 함께 작업하며 나의 부족함을 느꼈고, 많은 것을 배울 수 있었다. 앞으로는 팀원의 도움없이 제 역할을 할 수 있도록 노력해야겠다.
