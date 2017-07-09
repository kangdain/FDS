(function(global){
'use strict';

function init(){
    firstClick();
    
}

function firstClick(){
    var a_tags = document.querySelectorAll("a");
    for(var i=0,l=a_tags.length;i<l;i++ ){
        a_tags[i].onclick = secondClick;
        
    }
}

function secondClick(){
    // 첫번째 리스트를 클릭하면 선택
    var old_active = this.parentNode;
    var a_tags = document.querySelectorAll("a");
        for(var i=0,l=a_tags.length;i<l;i++ ){
            a_tags[i].onclick= replaceFn.bind(a_tags[i],old_active);
        }   
    
    };  
    
    
    function replaceFn(old_active){
        
        //첫번째 클릭한 리스트와 두번째 클릭한 리스트의 컨텐츠 내용을 바꾼다.
        var new_active = this.parentNode;
        var first_content = old_active.textContent;
        var second_content = new_active.textContent;
        var a_tags = document.querySelectorAll("a");
        old_active.innerHTML = '<a>'+second_content+'</a>';
        new_active.innerHTML = '<a>'+first_content+'</a>';
           
        firstClick();
        
    };

init();

})(window);