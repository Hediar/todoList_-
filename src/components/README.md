# Components
## 1. Card.js
### 1.1 brief
투두리스트 카드. 
### 1.2 contents
제목(title), 내용(description)
### 1.3 features
투두리스트 카드를 Done상태로 바꾸거나, 다시 Working상태로 되돌리기.  
투두리스트  카드를 삭제.  
투두리스트 카드를 수정.
### 1.4 functions
#### 1.4.1 moveCard
투두리스트 카드를 Done상태로 만들거나 Working상태로 만들기
#### 1.4.2 deleteCard
투두리스트 카드를 삭제하기
#### 1.4.3 modifyCard
투두리스트 카드를 수정하기
#### 1.4.4 saveCard
수정한 투두리스트 카드를 저장하기


## 2. CardContainer.js
### 2.1 brief
투두리스트 카드를 담아두는 컨테이너
### 2.2 contents
투두리스트 카드들을 렌더링함.  
 isDone=false인 카드는 Working섹션에 렌더링되고, isDone=true인 카드는 Done섹션에 렌더링 된다.
### 2.3 features
위와 동일.
### 2.4 functions
정의하지 않음.


## 3. Header.js
### 3.1 brief
헤더부분
### 3.2 contents
헤더부분에 "die Aufgabenliste." 라는 글이 써져있다.
### 3.3 features
별다른 기능은 존재하지 않음
### 1.4 functions
별다른 함수는 존재하지 않음

## 4. Mybutton.js
### 4.1 brief
커스텀버튼
### 4.2 contents
버튼에 스타일을 수정해서 새로운 버튼을 만들었다.
### 4.3 features
button 태그와 동일
### 4.4 functions
별다른 함수는 존재하지 않음