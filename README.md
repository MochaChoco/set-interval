# set-interval
자바스크립트의 setInterval 함수는 브라우저를 최소화하거나 탭을 이동한 뒤 일정 시간이 지나면 브라우저가 유휴 상태로 진입하여 타이머가 느리게 동작한다는 문제점이 있는데,  이 프로젝트에서는 그 문제점의 해결방법을 다루고 있습니다.

# 명령어
- dependency 설치 : yarn install
- 로컬 실행 : yarn start

# 페이지 구성
- /example1 : 단순히 setInterval 함수만 사용한 페이지로 브라우저를 focus out하면 문제점이 발생하는 것을 확인할 수 있습니다.
- /example2 : 위 페이지의 문제점을 수정한 페이지입니다.

# 테스트 방법
- 별도의 스탑 워치와 타이머 시작 버튼을 동시에 누르고, 창을 최소화하거나 다른 탭으로 이동 한 뒤 적어도 2분 ~ 3분 후에 스탑 워치와 현재 창의 초를 비교합니다.

# How to fix it
- 처음에 타이머를 시작할때 시간을 저장해놓고, 브라우저를 focus in하면 현재 시간과 타이머의 시간을 계산하여 올바른 시간을 표기하게 처리했습니다.
