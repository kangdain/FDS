(function(global){
'use strict';
var document = global.document;
var forEach = Array.prototype.forEach;
var input,ul,li,button,trashs,plus;


function init(){
  input = document.getElementById("input");
  ul = document.querySelector("ul");
  li = document.createElement("li");
  button = document.querySelector("button");
  trashs = document.querySelectorAll(".fa-trash-o");
  plus = document.querySelector(".fa-plus");
  addEvent();
  bindEvent();

}



  function bindEvent(){
    
    // forEach.call(trashs,function(trash){
    //   trash.onclick = removeList.bind(trash);  
      
    // });
    for(var i=0,l=trashs.length;i<l;i++){
      trashs[i].onclick = removeList;
    }
  }

  // function removeList(){
  //   //클릭한 휴지통이모티콘 리스트 삭제
  //   var parent = this.parentNode;
  //   console.log(parent);
  //   var list = parent.parentNode;
  //   console.log(list);
  //   // list.remove();
  //   list.parentNode.removeChild(list);
    
    
  // }

  function removeList(){
    
    var parent = this.parentNode;
    var list = parent.parentNode;
    
    list.parentNode.removeChild(list);
  } 
    
  


  function addEvent(){
    plus.onclick = function(){
    if(!input.value.trim()){
        alert("Empty");
    }else{
      var li = document.createElement("li");
      var inputVal = input.value;
      ul.appendChild(li);
      li.insertAdjacentHTML('beforeend','<a><i class="fa fa-trash-o" aria-hidden="true" onclick="bindEvent()"></i></a>');
      trashs = document.querySelectorAll(".fa-trash-o");
      trashs.onclick = removeList;
      // bindEvent();
      var text = document.createTextNode(inputVal);
      li.appendChild(text);
      input.value = "";
      }
    }
  }
  
  // 초기화
  init();

})(window);