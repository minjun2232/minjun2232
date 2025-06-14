https://github.com/minjun2232/minjun2232.git

테마:사진을 뒷배경으로 하고 위에 네비게이션 바를 추가함

1. 다크모드 전환 기능
2) 설명  
버튼을 클릭하면 다크모드(어두운 테마)와 라이트모드(밝은 테마)가 전환됩니다.  
3) 코드 위치  
- HTML: `index.html`  
- JavaScript: `main.js`  
- CSS: `style.css`  
4) 코드 설명  
- `index.html`에서 `id="darkModeToggle"` 버튼이 있습니다.  
- `main.js`에서는 클릭 이벤트를 감지해서 `navbar`에 `dark-mode` 클래스를 추가/제거합니다.  
- `style.css`에서는 `.dark-mode` 클래스에 밝은 배경색과 검정 글자색을 적용해 테마를 바꿉니다.


2. 스킬 애니메이션 효과  
2) 설명  
스킬 페이지에 들어가면 스킬 항목들이 순서대로 하나씩 나타나는 애니메이션이 있습니다.  
3) 코드 위치  
- HTML: `스킬.html`  
4) 코드 설명  
- 페이지 로드시 `window.onload` 함수가 실행됩니다.  
- `setTimeout()`을 이용해 각 스킬 `<li>` 요소에 `visible` 클래스를 순차적으로 추가합니다.  
- `visible` 클래스는 `opacity: 1`로 정의되어 있어서 글자가 서서히 보입니다.


3. 프로젝트 상세 보기  
2) 설명  
프로젝트 이미지를 클릭하면 아래쪽에 해당 프로젝트의 자세한 설명이 나타납니다.  
3) 코드 위치  
- HTML: `프로젝트.html`  
4) 코드 설명  
- 각 프로젝트 카드에 `onclick="showDetails(n)"`이 설정되어 있습니다.  
- 자바스크립트 함수 `showDetails(id)`는 모든 설명을 숨긴 후, 선택된 프로젝트의 설명(`id="details-n"`)을 보여줍니다.


4. 연락처 복사 기능
2) 설명  
이메일과 전화번호를 클릭하면 자동으로 클립보드에 복사됩니다.  
3) 코드 위치  
- HTML + JS: `연락처.html`  
4) 코드 설명  
- `<span class="copy-text">` 요소를 클릭하면 `copyToClipboard(text)` 함수가 실행됩니다.  
- 이 함수는 `navigator.clipboard.writeText()`를 이용하여 복사하고, 복사 완료 알림을 띄웁니다.


5. 텍스트 색상 랜덤 변경 기능  
2) 설명  
희망 직무 페이지에서 버튼을 누르면 글자 색상이 무작위로 바뀝니다.  
3) 코드 위치  
- HTML + JS: `희망직무.html`  
4) 코드 설명  
- `changeTextColor()` 함수에서 미리 정의된 색상 목록 중 하나를 무작위로 선택합니다.  
- 선택된 색상으로 `.main-container p` 요소들의 글자색을 바꿉니다.


6. 반응형 디자인  
2) 설명  
화면 크기가 작아지면 메뉴와 본문이 모바일에 맞게 자동으로 정렬됩니다.  
3) 코드 위치  
- CSS: `style.css`  
4) 코드 설명  
- `@media (max-width: 600px)` 안에 모바일 레이아웃에 맞춘 스타일이 정의되어 있습니다.  
- 메뉴가 수직 정렬로 바뀌고, 글자 크기와 여백도 조정됩니다.


구성 파일 정리

파일명          역할                            

`index.html`    홈페이지                       
`스킬.html`     프로그래밍 스킬 소개            
`프로젝트.html` 프로젝트 5개 소개               
`희망직무.html` 희망 직무 및 색상 변경 기능     
`연락처.html`   이메일 및 전화번호 복사 기능    
`style.css`    전체 디자인과 반응형 스타일 적용
`main.js`      다크모드 버튼 기능 구현         


사용 기술

- HTML5  
- CSS3 (반응형 웹 포함)  
- JavaScript (DOM 조작, 이벤트 처리)

사진주소
- 테마: https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1280&q=80
- ver1.png: https://i.namu.wiki/i/3pF0s44s1qdE1gRRQBb2x9GhKMTDSj8ZZgjb2n2d5VCFxb6eOWNWHicUFs5iQKS46P-wO8Lhnsc_5eZ7Hj1eQA.webp
- ver2.jpg: https://i.namu.wiki/i/3pF0s44s1qdE1gRRQBb2x9GhKMTDSj8ZZgjb2n2d5VCFxb6eOWNWHicUFs5iQKS46P-wO8Lhnsc_5eZ7Hj1eQA.webp(ver1.png에 ver2제목추가)
- rock.png: https://i.namu.wiki/i/J9A5vBE6BuFBd09_MojiggkfWoci1CuuIjNf19nuSnxmfqmx4oYePJh0FWVzCmc5AIHxVoi2QWF8G5yIs_iwRA.webp
- clock.png: https://png.pngtree.com/png-clipart/20211017/original/pngtree-blue-clock-vector-png-image_6857834.png
- boom.png: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_TVtOtGVf8JJBj_qbantNTNhIG5GzMdXv8g&s
