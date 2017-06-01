// 1. 두 수를 입력받아 큰 수를 반환 하는 함수 function
function max(a,b){
    if(a>b)
    return console.log(a);
    else
    return console.log(b);
}
// 2. 숫자를 입력하면 요일을 반환하는 함수
function day(num){
    switch(num){
        case 1:
        console.log('Monday');
        break;
        case 2:
        console.log('Tuesday');
        break;
        case 3:
        console.log('Wedesday');
        break;
        case 4:
        console.log('Thusday');
        break;
        case 5:
        console.log('Friday');
        break;
        case 6:
        console.log('Saturday');
        break;
        case 7:
        console.log('Sunday');
        break;
        default:
        console.log('7이하의 수를 입력세요');
        break;
    }
}
// 3. 짝수.홀수.판단하는 함수 
 function oddeven(n){
    if(n%2 === 0){
        console.log('even');
    }
    else
    console.log('odd');
 }
// 4.숫자를.배열로.전달받아.숫자들의 평균을.반환하는 .함수
    
    function average(arr){
    var sum =0;
    for(i=0;i=arr.length;i++)
    {
        sum += arr[i];
    }
    console.log(sum/arr.length);
    }
// 5.문자를 배열로 전달 받아 문자열 하나로 반환하는 함수
    function String(str)
    
    {
        var sum=[];
        for(i=0;i<str.length;i++)
        {
            sum += str[i];
        }
        consolr.log(sum);
    }
// 6.세 수를 입력받아 큰수를 반환하는 함수
function Maximum(a,b,c){
    if(a<b && a<c && b<c){
        return c;
    }
    if(a<b && a<c && b>c){
        return b;
    }
    if(a>b && a<c&&b<c){
        return c;
    }
    if(a<b && a>c){
    return b;
    }
    

    if(a>b && a>c){
        return a;
    }
   
}
// 7.전화번호를 입력하면 뒤에 4자리를 제외하고 *로 바꾸는 함수
    function Phonenumber(arr){
        var num =[];
        for(i=0;i<arr.length;i++){
            if(i>6){
                num += '*';
            
        }
            else{
                num += arr[i];
            }
        }

        return num;
    }
// 8.Email . validation
    function ValitateEmail(email){
        return email.indexOf('@') !== -1;
        }
    
// 9.비밀번호.문자열.validation 여덟글자이상 영어문자.숫자포함


function validatePassword(pw){
  var lowCase = 'abcdefghijklmnopqrstuvwxyz';
  var upCase = lowCase.toUpperCase();
  var numCase = '0123456789';
  var lowCheck = false;
  var upCheck = false;
  var numCheck = false;
  if (pw.length >= 8){
    for(var i = 0, l = lowCase.length; i < l; i++){
      if (pw.indexOf(lowCase[i]) !== -1){
        lowCheck = true;
      }
      if (pw.indexOf(upCase[i]) !== -1){
        upCheck = true;
      }
    }
    for(var i = 0, l = numCase.length; i < l; i++){
      if (pw.indexOf(numCase[i]) !== -1){
        numCheck = true;
      }
    }
  }
  if( lowCheck && upCheck && numCheck){
    return true;
  } else {
    return false;
  }
}
