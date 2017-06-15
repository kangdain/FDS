(function(global,context){
'use strict';
//전체 이미지 ui을 포함은 변수 container 
var container = context.selector('.photo-showcase-container',);
// 클릭 이벤트를 받은 이미지를 담을 변수 photo_showcase
var showcase = context.selector('.showcase',container);
//모든 이미지를 담고 있는 a태그를 indicator 변수에 할당
var indicator = context.selectorAll('.photo-showcase-indicator',container);
var img = context.selector('img',showcase);

// indicator을 클릭했을때
//해당 사진을 photo-showcase로 반환
var fnPhotoShowCase = function(){
    var indicator_img = context.selector('img', this);
    
}

})(window,window.FDS);