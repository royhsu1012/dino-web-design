// ====================
// 標題的小恐龍動畫
$(document).ready(function(){
    // hover變換圖片
    $("#dino").on('mouseover', function(){
        $(this).attr('src','/images/dino2.png');
    });
    $("#dino").on('mouseout',function(){
        $(this).attr('src', '/images/dino_blink.gif');
    });
    
    //點擊變換圖片
    $("#dino").click(function(){
        $(this).attr('src', '/images/dino_shock.png');
        $(this).addClass('animate__animated animate__bounce');
        setTimeout(function(){
            $("#dino").removeClass("animate__animated animate__bounce");}, 1200);
            // 為什麼下方這樣寫會出問題?
            // $(this).removeClass("animate__animated animate__bounce");}, 1200);
    });
});
// ====================

// ====================
// 右方軸會隨著滑動顯示進度 scroll bar
let progress = document.getElementById('progress_bar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset/totalHeight)*100;
    progress.style.height = progressHeight + "%";
}
// ====================

// ====================
// 左上角的懸浮 menu-btn
$(document).ready(function(){
    // 點擊menu-btn 顯示 menu
    $('.menu-btn').click(function(event){
        event.preventDefault();
        $('.menu').toggle();
    });
    // 滑鼠滑開menu範圍 menu消失
    $('.menu').on('mouseleave', function(){
        $('.menu').hide();
    });
});

$(document).ready(function(){
    $('.menu a').hover(function(event)
    {
        event.preventDefault();
        $('.menu a').hover.toggleClass('active');
        // .parents().siblings().find('a').removeClass('active');
    });
});
// ====================

// ====================
// 右下角的懸浮按鈕
$(document).ready(function(){
    $("#bird").on('mouseover', function(){
        $('#bird_click').show();
    });
    $("#bird").on('mouseout', function(){
        $('#bird_click').hide();
    });
});
// 點擊回到最上方
// 有沒有辦法是別位置 沒在最下方時點擊只會移動到下個section?
$(document).ready(function(){
    $("#bird").click(function(){
        $('html').animate({scrollTop:0},500);
    });
});
// ====================

// ====================
//載入頁面動畫
$(document).ready(function(){
    $('#loading').show();
    window.setTimeout(function(){
        $('#loading').fadeOut("slow");}, 2000);
});
// 頁面動畫 loading (...)的顯示
let originalText = $("#loading_text").text(),
i  = 0;
setInterval(function() {
    $("#loading_text").append(".");
    i++;
    if(i == 4)
    {
        $("#loading_text").html(originalText);
        i = 0;
    }
}, 300);
// ====================

// ====================
//contact hover在icon上 下方換文字
// 這裡有問題是滑鼠從icon1直接移動到icon2動畫顯示會有閃爍?
$(document).ready(function(){
    $('.github').hover(function(){
        $('.text_show').fadeToggle();
        $('.text_show h3').text('Github')
    });
    $('.email').hover(function(){
        $('.text_show').fadeToggle();
        $('.text_show h3').text('Email')
    });
    $('.line').hover(function(){
        $('.text_show').fadeToggle();
        $('.text_show h3').text('Line')
    });
    $('.facebook').hover(function(){
        $('.text_show').fadeToggle();
        $('.text_show h3').text('Facebook')
    });
    $('.website').hover(function(){
        $('.text_show').fadeToggle();
        $('.text_show h3').text('My Website')
    });
    $('.linkedin').hover(function(){
        $('.text_show').fadeToggle();
        $('.text_show h3').text('Linkedin')
    });
});
// ====================