
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var streetStr = $('#street').val();
    var cityStr = $('#city').val();
    var address = streetStr +',' + cityStr;

    $greeting.text('So, you want to live at '+ address +'?');
    // YOUR CODE GOES HERE!
    var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x300&location= ' + address +''; 
     $body.append('<img class="bgimg" src="'+ streetviewUrl +'">');
    
    //NY Times AJAX request
    var nytimesUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q='+ cityStr + '&sort=newest&api-key=93e4621272af4ab6ad420178806c4343'
    $.getJSON( nytimesUrl, function( data ) {
    $nytHeaderElem.text('New York Times Articles About' + cityStr);

    articles = data.response.docs;
    for(var i=0;i<articles.length;i++){
        var article = articles[i];
        $nytElem.append('<li class="article">'+
        '<a href= "'+article.web_url+'">'+article.headline.main+'</a>'+'<p>'+article.snippet+ '</p>'+'</li>');
    };


}).error(function(e){
    //error 객체를 인자(e)로 받는 익명 함수
        $nytHeaderElem.text('New York Times Articles Could Not Be Loaded.')
    });

    //Wekipedia Ajax request 
    var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search='+ cityStr + '&format=json&callback=wikiCallback';
    
    $.ajax({
        url: wikiUrl,
        dataType: "jsonp",
        success : function(response){
            var articleList = response[1];

            for(var i =0 ;i < articleList.length; i++){
                articleStr = articleList[i];
                var url = 'http://en.wikipeia.org/wiki/' + articleStr;
                $wikiElem.append('<li><a href="'+url+'">'+
                articleStr + '</a></li>');
            };
        }
    })
    
    return false;

};


$('#form-container').submit(loadData);

