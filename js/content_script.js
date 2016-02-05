$(document).ready(function(){

    //get url
    var tabUrl = document.URL
    var scrwidth = 0;
    //hover enable
    var en = 0;
    var products_done = 0;
    var show;
    $.ajax({
        url: 'http://localhost/videoshopping/check.php',
        dataType: 'JSON',
        type: 'GET',
        data: { url: tabUrl },
        success: function(show){
            if(show !== null){
                parseProduct(show.name);
                parseNews(show.news);
            }
            parseChat();
        }
        
    });

    //product
    $(document).on('mouseover','#product-container', function () {
        $(this).animate({height:"120px"},"fast");
        $(this).find('a').animate({height:"120px"},"fast");
    });

    $(document).on('mouseover','#wrap', function(){
        $('#product-container').animate({height:"15px"},"fast");
        $('#product-container').find('a').animate({height:"15px"},"fast");
    });

    $(document).on('mouseover','#product-container a', function () {
        $(this).find('img').css({"opacity":"1"});
        $(this).find('p').animate({opacity : "1",backgroundcolor: "rgba(0, 0, 0, 0.39)"}, "fast");
        
    });
    $(document).on('mouseout','#product-container a', function () {
        $(this).find('img').css({"opacity":"0.7"});
        $(this).find('p').animate({opacity : "0",backgroundcolor: "rgba(0, 0, 0, 0)"}, "fast");

    });
        

    $(document).on('mouseover','#product-container', function(){
        $('#product-container').scrollingCarousel();
    });

    //news
        $(document).on('mouseover','#news-container', function () {
        $(this).animate({height:"120px"},"fast");
        $(this).find('a').animate({height:"120px"},"fast");
    });


    $(document).on('mouseover','#wrap', function(){
        $('#news-container').animate({height:"15px"},"fast");
        $('#news-container').find('a').animate({height:"15px"},"fast");
    });

    $(document).on('mouseover','#news-container a', function () {
        $(this).find('img').css({"opacity":"1"});
        $(this).find('p').animate({opacity : "1",backgroundcolor: "rgba(0, 0, 0, 0.39)"}, "fast");
        
    });
    $(document).on('mouseout','#news-container a', function () {
        $(this).find('img').css({"opacity":"0.7"});
        $(this).find('p').animate({opacity : "0",backgroundcolor: "rgba(0, 0, 0, 0)"}, "fast");

    });


    $(document).on('mouseover','#chat-container', function () {
    $(this).animate({height:"350px"},"fast");
    });

    $(document).on('mouseover','#wrap', function(){
    $('#chat-container').animate({height:"50px"},"fast");
    });


    $(document).on('mouseover','#news-container', function(){
        $('#news-container').scrollingCarousel();
    });
    
    
});


var addProduct = function(product, img, title){
    //$('#scroll-bar').append('<a href=' + product + ' class="product" target="_blank"><img src=' + img + ' alt=""><p class="overlay-title" style="position: absolute;color: rgba(255, 255, 255, 0.8);top: 540%;left: 0;height: 120px;width: 150px;margin: 0;background-color: rgba(0, 0, 0, 0.39);">' + title + '</p></a>');
    $('#scroll-bar').append('<a href=' + product + ' class="product" target="_blank" style=" z-index: 1000; position: relative"><p class="overlay-title" style="position: absolute;top: 0; left: 0;color: rgba(255, 255, 255, 0.8);height: 150px;width: 150px;margin: 0;background-color: rgba(0, 0, 0, 0.5);border-radius: 10px">' + title + '</p><img src=' + img + ' style = "opacity: 0.7; height: 120px; width : 150px; margin-right: 5px;border-radius: 10px"></a>');
};


var addNews = function(news, img, title){
    //$('#scroll-bar').append('<a href=' + product + ' class="product" target="_blank"><img src=' + img + ' alt=""><p class="overlay-title" style="position: absolute;color: rgba(255, 255, 255, 0.8);top: 540%;left: 0;height: 120px;width: 150px;margin: 0;background-color: rgba(0, 0, 0, 0.39);">' + title + '</p></a>');
    $('#scroll-bar1').append('<a href=' + news + ' class="news" target="_blank" style=" z-index: 1000; position: relative"><p class="overlay-title" style="position: absolute;top: 0; left: 0;color: rgba(255, 255, 255, 0.8);height: 150px;width: 150px;margin: 0;background-color: rgba(0, 0, 0, 0.5);border-radius: 10px">' + title + '</p><img src=' + img + ' style = "opacity: 0.7; height: 120px; width : 150px; margin-right: 5px;border-radius: 10px"></a>');
};


var parseProduct = function(show){


    //add product-container
    $('body').append('<div class="product-container" id="product-container" style="overflow: scroll; z-index: 100; position: fixed !important;bottom: 0;left: 0;width: 40%;background-color: rgba(128, 128, 128, 0.47);height: 15px"> </div>');
    
    //define scroll bar width
    $('#product-container').append('<div id="scroll-bar" style="height: 33%; width: 3100px"><div>');
    
    //addproduct
    $.ajax({
        url: 'http://yefistar.mousems.com/temp.php',
        dataType: 'JSON',
        type: 'GET',
        data: { show_name: show },
        success: function( products ){
            console.log(products.length);
            for(var i = 0; i < products.length; i++){
                addProduct(products[i].url, products[i].img, products[i].title);
            }
        }
        
    });
}

var parseNews = function(show){


    //add news-container
    $('body').append('<div class="news-container" id="news-container" style="overflow: scroll; z-index: 100; position: fixed !important;bottom: 0;left: 40%;right: 78%;width: 38%;background-color: rgba(128, 128, 128, 0.47);height: 15px"> </div>');
    
    //define scroll bar width
    $('#news-container').append('<div id="scroll-bar1" style="height: 33%; width: 1240px"><div>');

    //addnews
    $.ajax({
        url: 'http://yefistar.mousems.com/temp1.php',
        dataType: 'JSON',
        type: 'GET',
        data: { show_news: show },
        success: function( news ){
            console.log(news.length);
            for(var i = 0; i < news.length; i++){
                addNews(news[i].url, news[i].img, news[i].title);
            }
        }
        
    });
 
}
var parseChat = function(){

    $('body').append('<div class="chat-container" id="chat-container"style=" background-image : url(http://i.imgur.com/9Apzd4n.png);overflow: scroll; z-index: 100; position: fixed !important; bottom: 0;left:78% ;right: 0%;width: 20%;background-color: rgba(192, 128, 0, 0.5);height: 350px"> </div>');
    
    $('#chat-container').append('<div id="scroll-bar" style="height: 33%; width: 100px"><div>');

   // $('#scroll-bar').append(' <div class="chat-container" id="chat-container"style="= ');




}