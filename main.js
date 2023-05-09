const firstButtons = document.querySelectorAll('.firstbutton')
const loginDiv = document.querySelector('#loginDiv')
const joinDiv = document.querySelector('#joinDiv')
const inputJoinId = document.querySelector('#inputJoinId')
const inputJoinPassward = document.querySelector('#inputJoinPassword')
const inputLoginId = document.querySelector('#inputLoginId')
const inputLoginPassword = document.querySelector('#inputLoginPassword')
const clock = document.querySelector('div.thisisclock h2#clock')
const quotesDiv = document.querySelector('#quotes')
const quote = document.querySelector('#quotes span:first-child');       //명언
const people = document.querySelector('#quotes span:last-child');
const quotess = [
  {
      quote : '걱정은 죄악이다.',
      people : '오영택',
  },
  {
      quote : '낭떠러지로달려가지말고 5성급호텔로 기어가라',
      people : '오영택',
  },
  {
      quote : '인생은 지나고나서야 깨닳는다',
      people : '오영택',
  },
  {
      quote : '감사하는법을 아는게 중요하다',
      people : '오영택',
  },
  {
      quote : '세상모두가 너를 찐따라 불러도 너 자신만큼은 너를 찐따로 생각해선 안된다.',
      people : '오영택',
  },
  {
      quote : '승리의 키가 나한테 있잖아. 나만 잘하면 되잖아. 그래서 포기 안 할 거야.',
      people : '오영택',
  },
  {
      quote : '킬각재는게 그분들 직업이에요',
      people : '오영택',
  },
  {
      quote : '규칙을 어기는 알잘딱은 없어.',
      people : '오영택',
  },
  {
      quote : '깨지고 부서져라',
      people : '오영택',
  },
  {
      quote : '제발 니인생에 훈수하세요',
      people : '오영택',
  },
  {
      quote : '땅에떨어진피자와 같다',
      people : '오영택',
  }
  ];



//작동순서 1
firstButtons.forEach(element => {                           //로그인버튼과 조인버튼
  element.addEventListener('click',handleButton)            //핸들버튼함수실행
}
);


//작동순서2
function handleButton(event) {                                
const pushButton = event.target.id                        //무슨버튼이 눌렸는지 블록변수에저장
console.log(pushButton)                                   //무슨버튼눌렸는지 저장된 블록변수 출력
if (pushButton == 'loginButton') {                        //만약 눌린버튼이 로그인이라면
  loginDiv.classList.toggle('hidden')                    //로그인디브의 히든을 토글한다
  joinDiv.classList.add('hidden')                        //조인디브에 히든을 추가한다
}
else{ 
  joinDiv.classList.toggle('hidden')                     //조인디브를 토글한다
  loginDiv.classList.add('hidden')                       //로그인디브에 히든을 추가한다
}
}


//작동순서 3
joinDiv.addEventListener('submit',handleJoinSubmit)           //조인디브안에서 섬밋이 발생하는지 탐지하고 핸들러함수 실행
loginDiv.addEventListener('submit',handleLoginSubmit)         //로그인디브에서 섬밋이 발생하는지 탐지하고 핸들러함수 실행


//작동순서4-1
function handleJoinSubmit(params) {                          
  params.preventDefault();                             //섬밋을 무시한다
  const joinId = inputJoinId.value                    //JoinId블록변수에 조인인풋값을 저장한다
  const joinPw = inputJoinPassward.value              //JoinPw블록변수에 인풋값을 저장한다
  if (localStorage.getItem(joinId) == null) {         //만약 아이디가 이미 저장되어있지 않다면
    localStorage.setItem(joinId,joinPw)               //블록변수 JoinId와 JoinPw를 로컬스토리지에 키와 밸류로 저장한다
    alert(`환영합니다 ${joinId}`)                     //환영메시지
    joinDiv.classList.toggle('hidden')               //조인디브의 히든을 토글제거한다
    loginDiv.classList.toggle('hidden')             //로그인디브의 히든을 토글부여한다
    inputJoinId.value = ''                         //입력창을 초기화한다
    inputJoinPassward.value = ''                  
  }
  else{                                             //만약 아이디가 이미 저장되어있다면
  alert('이미 존재하는 아이디입니다')                //경고창
   }
  }

//작동순서 4-2
function handleLoginSubmit(params) {
  params.preventDefault();                         //섬밋을 무시한다
  console.log(params);
  const loginId = inputLoginId.value                  //LoginId블록변수에 입력창의 값을저장한다
  const loginPassword = inputLoginPassword.value      //LoginPassword블록변수에 입력창의 값을 저장한다
  console.log(loginId);                               //입력창의 값을다
  console.log(loginPassword);                              //입력창의 값을 출력한다
  if (localStorage.getItem(loginId) === null) {             //만약 아이디 입력창의 값이 저장되어있지않다면 
    alert("존재하지않는 아이디입니다")                       //경고창
  }
  else if(localStorage[loginId] !== loginPassword){         //만약 로컬스토리지에 id입력창 값의 키와 비밀번호 입력창 입력값이 같지않다면
    alert('비밀번호가 틀렸습니다');                          //비밀번호가 틀렸습니다
  }
  else{
    alert('환영합니다잉' + loginId)                         //로그인됨
    inputLoginId.value = ''                                 //입력창리셋
    inputLoginPassword.value = ''                           
    loginDiv.classList.toggle('hidden')                     //로그인디브 히든 토글제거
    chooseDiv.classList.add('hidden')                       //선택창디브 히든부여
    clockDiv.classList.remove('hidden')                    //시계디브 히든제거 
    quotes.classList.remove('hidden')   
    todoDiv.classList.remove('hidden')
  }
}



refreshTime();                                            //refreshTime 함수 실행                      
setInterval(refreshTime,1000)                             //시간을 1초마다 동기화

function refreshTime () {                 //clock     
  const time = new Date();                                             //현재 시간정보를 변수값에 저장
  const Hours = ((time.getHours()).toString()).padStart(2,'0')          //
  const minutes = ((time.getMinutes()).toString()).padStart(2,'0')     
  const seconds = ((time.getSeconds()).toString()).padStart(2,'0')
  clock.innerText = `${Hours} : ${minutes} : ${seconds}`
  // console.log(typeof((time.getSeconds()))); 
}



console.log(quote);           //명언
console.log(people);
const todayQuotes = quotess[Math.floor(Math.random()*quotess.length)]
console.log(todayQuotes)
quote.innerHTML = todayQuotes.quote
people.innerHTML = todayQuotes.people




const img = ['메시씻기는왁두.png','메시씻기는왁두2.png','메시왁두밤에보트.png','심해두.png','심해두2.png','심해두3.png','왁두그리는팬치.png','왁두그리는팬치2.png','왁두메시노을까꿍.png','왁두메시바닷가달리기.png','피리부는왁두.png','피리부는왁두2.png','해변가엔젤왁두메시.png'];
const chooseImg = img[Math.floor(Math.random()*img.length)]     //배열의길이만큼 랜덤숫자를 배열의 인덱스값으로 임의의 사진을 한장 선택한다
console.log(chooseImg);                                         //선택된 임의의 사진의 이름을 로그찍는다
const backgroundImg = document.createElement("img");            //새로만들어지는 img태그의 html을 backgroundImg 에 대입한다
backgroundImg.src = `img/${chooseImg}`                          //이미지html의 소스는 img파일안에 chooseImg값에 해당되는 이미지
console.log(backgroundImg);                                     //완성된 backgroundImg의 html코드를 출력한다
document.body.appendChild(backgroundImg)                        //만들어진 backgroundImg의 html코드를 document.body안으로 이동시킨다.




const todoInput = todoForm.querySelector('input')              //todoInput전역변수에 inputHtML을 대입함

todoForm.addEventListener('submit',handleTodoSubmit)                  //todo  todoForm안아서 submit 이 발생하는지 확인하여 handletodoSubmit 함수를 실행함

function handleTodoSubmit(event) {                             //handleTodoSubmit함수를 선언함
  event.preventDefault();                                      //submit을 무시함
  const todoInputVal = todoInput.value                         //블록변수todoInputVal에 입력값을 대입함
  todoInput.value = '';                                        //입력값을 초기화함
  paintTodo(todoInputVal)                                      //paintTodo함수를 파라미터(입력저장값) 실행함 
  console.log(todoInputVal);

}

function paintTodo(todoInputVal) { 
  console.log("리스트추가됨");
  const todoList = document.createElement('li')               //만들어진 todoList블록변수에 만들어진 list 태그의 html을 할당한다
  todoUl.appendChild(todoList)

  const todoText = document.createElement('span')             //만들어진 todoText블록변수에 만들어진 spna 태그의 html을 할당한다
  todoText.innerText = todoInputVal;                          //list태그의 html innerText 에 입력창 입력값을 대입한다.
  todoList.appendChild(todoText)  

  const todoRemoveButton = document.createElement('button')   //만들어진 todoButton블록변수에 만들어진 button태그의 html을 할당한다
  todoRemoveButton.innerText = '❌'                           //방금 만든 버튼의 html에 X를 삽입한다
  todoRemoveButton.className = 'remove버튼'
  todoList.appendChild(todoRemoveButton)                          //todoUl안에 아까만든 todoList를 넣는다
  todoRemoveButton.setAttribute('type', 'button');
}

todoUl.addEventListener('click',listRemove)


function listRemove(params) {
  const target = params.target.parentElement
  console.log(params.target.tagName);
  // console.log(target.tagName);
  if (params.target.tagName != 'BUTTON') {
    
  }
  else{
    target.remove();
  }





}





