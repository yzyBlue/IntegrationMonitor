$(document).ready(function(){function a(a){$(a.target).prev(".panel-heading").find(".panel-title a").toggleClass("active").find("i.fa").toggleClass("fa-plus-square fa-minus-square")}function b(){var a=$(document).width();a>1024?$("header ul  li.dropdown a.dropdown-toggle").attr("data-toggle",""):$("header ul  li.dropdown a.dropdown-toggle").attr("data-toggle","dropdown")}function c(){var a=$(window).width();a>767?$("#ci-video video").attr("loop","loop"):$("#ci-video video").removeAttr("loop")}function d(){var a=$(window).width();768>a?$("#ci-video video").attr("autoplay","autoplay"):$("#ci-video video").removeAttr("autoplay")}var e={videoId:null,beforescroll:0,stateOfVideo:1,browser:function(){{var a=navigator.userAgent;navigator.appVersion}return{trident:a.indexOf("Trident")>-1,presto:a.indexOf("Presto")>-1,webKit:a.indexOf("AppleWebKit")>-1,gecko:a.indexOf("Gecko")>-1&&-1==a.indexOf("KHTML"),mobile:!!a.match(/AppleWebKit.*Mobile.*/),ios:!!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:a.indexOf("Android")>-1||a.indexOf("Linux")>-1,iPhone:a.indexOf("iPhone")>-1,iPad:a.indexOf("iPad")>-1,webApp:-1==a.indexOf("Safari"),mqq:a.indexOf("MQQ")>-1}}()},f=new Date;$("#cr-end-time").text(f.getFullYear()),e.browser.trident&&$("html").addClass("gt-ie11"),$(function(){$('[data-hover="dropdown"]').dropdownHover(),$('[data-toggle="tooltip"]').tooltip()}),$(window).bind("scroll",function(){var a=$("#header"),b=a.height(),c=a.parent().find("section").first(),d=$(document).width();d>767&&($(window).scrollTop()>0?$(window).scrollTop()<e.beforescroll?($("#header").addClass("navbar-fixed-top"),c.css("margin-top",b),setTimeout(function(){$("#header").addClass("navbar-fixed-top-show")},200),e.beforescroll=$(window).scrollTop()):($("#header").removeClass("navbar-fixed-top-show"),e.beforescroll=$(window).scrollTop()):($("#header").removeClass("navbar-fixed-top"),e.browser.trident?c.css("margin-top",1):c.css("margin-top",0),e.beforescroll=$(window).scrollTop())),$(".imgslider-container").each(function(){var a=$(document).scrollTop(),b=$(this).offset().top;a>b-$(window).height()/2&&$(this).find(".img-wrapper").removeClass("folded")})}),$(document).on("click","a[data-pjax]",function(){$("#header").removeClass("navbar-fixed-top-show")}),$("input, textarea").placeholder(),$(".panel").on("hidden.bs.collapse",a),$(".panel").on("shown.bs.collapse",a),$(".page-1,.sp1").click(function(){$(this).hasClass(".sp1")?setTimeout(function(){$(".page,.section-wrapper,.sp").removeClass("active"),$(".page-1").addClass("active"),$(".p1,.sp1").addClass("active")},5e3):(setTimeout(function(){$(".page,.section-wrapper,.sp").removeClass("active"),$(".page-1").addClass("active"),$(".p1,.sp1").addClass("active")},0),console.log("5000"))}),$(".page-2,.sp2").click(function(){$(this).hasClass(".sp2")?setTimeout(function(){$(".page,.section-wrapper,.sp").removeClass("active"),$(".page-2").addClass("active"),$(".p2,.sp2").addClass("active")},5e3):setTimeout(function(){$(".page,.section-wrapper,.sp").removeClass("active"),$(".page-2").addClass("active"),$(".p2,.sp2").addClass("active")},0)}),$(".page-3,.sp3").click(function(){$(this).hasClass(".sp3")?setTimeout(function(){$(".page,.section-wrapper,.sp").removeClass("active"),$(".page-3").addClass("active"),$(".p3,.sp3").addClass("active")},5e3):setTimeout(function(){$(".page,.section-wrapper,.sp").removeClass("active"),$(".page-3").addClass("active"),$(".p3,.sp3").addClass("active")},0)}),$(".page-4,.sp4").click(function(){$(this).hasClass(".sp4")?setTimeout(function(){$(".page,.section-wrapper,.sp").removeClass("active"),$(".page-4").addClass("active"),$(".p4,.sp4").addClass("active")},5e3):setTimeout(function(){$(".page,.section-wrapper,.sp").removeClass("active"),$(".page-4").addClass("active"),$(".p4,.sp4").addClass("active")},0)}),$(".page-5,.sp5").click(function(){$(this).hasClass(".sp5")?setTimeout(function(){$(".page,.section-wrapper,.sp").removeClass("active"),$(".page-5").addClass("active"),$(".p5,.sp5").addClass("active")},5e3):setTimeout(function(){$(".page,.section-wrapper,.sp").removeClass("active"),$(".page-5").addClass("active"),$(".p5,.sp5").addClass("active")},0)}),$(".page-6,.sp6").click(function(){$(this).hasClass(".sp6")?setTimeout(function(){$(".page,.section-wrapper,.sp").removeClass("active"),$(".page-6").addClass("active"),$(".p6,.sp6").addClass("active")},5e3):setTimeout(function(){$(".page,.section-wrapper,.sp").removeClass("active"),$(".page-6").addClass("active"),$(".p6,.sp6").addClass("active")},0)}),$(".sp").click(function(){var a=$(".nav-tab").offset().top-30-$("#header").height();$("body,html").animate({scrollTop:a},400)}),$(".play-btn").click(function(){$(this).hide();var a=$(this).parent().find("video");a[0].play(),a.attr("controls","controls")}),$(".reover").click(function(){var a=$(this).parent().find("video");a[0].load(),a[0].play()}),$(".modal.modal-video button.close").click(function(){var a=$(e.videoId);a[0].pause(),a.closest(".modal-dialog").removeClass("active"),setTimeout(function(){$(".modal-backdrop").trigger("click")},800)}),$(document).delegate(".modal-backdrop","click",function(){var a=$(e.videoId);a[0].pause(),a.closest(".modal-dialog").removeClass("active")}),$("#video-btn,#video-btn2,#video-btn3").click(function(){var a=$(this).attr("data-source");e.videoId=a;var b=$(a);b[0].play(),setTimeout(function(){b.closest(".modal-dialog").addClass("active")},100)}),$(".lang-button a").click(function(){var a=$("#header").height(),b=$(".lang-content .last-item").offset().top-a;$("body").animate({scrollTop:b},600)}),b(),c(),d(),$(window).resize(function(){b(),c(),d(),$(window).width()<767&&($("#header").parent().find("section").first().removeAttr("style"),$(".carousel .container").removeAttr("style"))}),$(".prev-btn").click(function(){var a=$(this).closest(".imgslider-container"),b=a.find(".img-prev"),c=a.find(".img-current"),d=a.find(".img-next"),e=a.find(".indicator"),f=e.find(".prev"),g=e.find(".cur"),h=e.find(".next");b.removeClass("img-prev").addClass("img-current"),c.removeClass("img-current").addClass("img-next"),d.removeClass("img-next").addClass("img-prev"),f.removeClass("prev").addClass("cur"),g.removeClass("cur").addClass("next"),h.removeClass("next").addClass("prev")}),$(".next-btn").click(function(){var a=$(this).closest(".imgslider-container"),b=a.find(".img-prev"),c=a.find(".img-current"),d=a.find(".img-next"),e=a.find(".indicator"),f=e.find(".prev"),g=e.find(".cur"),h=e.find(".next");b.removeClass("img-prev").addClass("img-next"),c.removeClass("img-current").addClass("img-prev"),d.removeClass("img-next").addClass("img-current"),f.removeClass("prev").addClass("next"),g.removeClass("cur").addClass("prev"),h.removeClass("next").addClass("cur")}),$(".indicator li").click(function(){var a=$(this).closest(".imgslider-container");$(this).hasClass("prev")&&a.find(".prev-btn").trigger("click"),$(this).hasClass("next")&&a.find(".next-btn").trigger("click")}),$(".img-wrapper").click(function(){var a=$(this).closest(".imgslider-container"),b=$(document).width();992>b&&a.find(".next-btn").trigger("click")}),$(".imgslider").click(function(){var a=$(this).closest(".imgslider-container");$(this).hasClass("img-prev")&&a.find(".prev-btn").trigger("click"),$(this).hasClass("img-next")&&a.find(".next-btn").trigger("click")}),$(".scroll-down").click(function(){var a=$("#middle").height(),b=$("#header").height(),c=a+b;$("body,html").animate({scrollTop:c},600)}),$(".navbar-toggle").click(function(){$(window).width()<767&&($(".global-header-overlay").hasClass("overlay-show")?($(".overlay-show").css("opacity","0"),setTimeout(function(){$(".global-header-overlay").removeClass("overlay-show")},500)):($(".global-header-overlay").addClass("overlay-show"),setTimeout(function(){$(".overlay-show").css("opacity","1")},100)),$("#navbar-collapse").hasClass("in")?($(".chuxian").css({opacity:"0",transition:"0.5s left ease-in-out"}),setTimeout(function(){$("#navbar-collapse").removeClass("chuxian")},500)):($("#navbar-collapse").addClass("chuxian"),setTimeout(function(){$(".chuxian").css("opacity","1")},100),setTimeout(function(){$(".chuxian").css("transition","0.5s left ease-in-out")},500)))}),$(window).resize(function(){$(window).width()>767&&$("#navbar-collapse").css("opacity",1)}),$(".global-header-overlay").click(function(){$(".navbar-toggle").trigger("click"),$(".product").removeClass("open"),$(".solution").removeClass("open"),$("#navbar-collapse").css("left","0"),$(".subnav-container").css("left","100%")}),$("#navbar-toggle-btn").click(function(){$(".product").hasClass("open")&&($(".product").removeClass("open"),$("#navbar-collapse").css("left","0"),$(".subnav-container").css("left","100%")),$(".solution").hasClass("open")&&($(".solution").removeClass("open"),$("#navbar-collapse").css("left","0"),$(".subnav-container").css("left","100%"))}),$(".subnav #back").click(function(){$("#navbar-collapse").css("left","0"),$(".subnav-container").css("left","100%"),setTimeout(function(){$(".product").removeClass("open"),$(".subnav-container").removeAttr("style")},500)}),$(".subnav #back_s").click(function(){$("#navbar-collapse").css("left","0"),$(".subnav-container").css("left","100%"),setTimeout(function(){$(".solution").removeClass("open"),$(".subnav-container").removeAttr("style")},500)}),$(".drop-down").on("click",function(a){var b=$(window).width();if(768>b){var c=$(this);$(".drop-down").each(function(){$(this).get(0)!==c.get(0)&&$(this).removeClass("open")}),c.toggleClass("open"),a.preventDefault()}}),$(".drop-down .pro-content a").click(function(a){a.stopPropagation()}),e.browser.mobile||$(".drop-down").on("mouseenter",function(a){var b=$(window).width();if(768>b){var c=$(this);$(".drop-down").each(function(){$(this).get(0)!==c.get(0)&&$(this).removeClass("open")}),c.toggleClass("open"),a.preventDefault()}});var g=$("#friend-link-container");$('[data-toggle="1"]').on("click",function(){g.data("collapse")?(g.css("height","20px"),g.data("collapse",!1),$(this).removeClass("active")):(g.css("height","auto"),g.data("collapse",!0),$(this).addClass("active"))}),$("#picture-1").click(function(){$(".picture-1").removeClass("hide").addClass("occur"),$(".picture-2").removeClass("occur").addClass("hide"),$(".picture-3").removeClass("occur").addClass("hide"),$("#picture-1").addClass("active"),$("#picture-2").removeClass("active"),$("#picture-3").removeClass("active")}),$("#picture-2").click(function(){$(".picture-1").removeClass("occur").addClass("hide"),$(".picture-2").removeClass("hide").addClass("occur"),$(".picture-3").removeClass("occur").addClass("hide"),$("#picture-2").addClass("active"),$("#picture-1").removeClass("active"),$("#picture-3").removeClass("active")}),$("#picture-3").click(function(){$(".picture-1").removeClass("occur").addClass("hide"),$(".picture-2").removeClass("occur").addClass("hide"),$(".picture-3").removeClass("hide").addClass("occur"),$("#picture-3").addClass("active"),$("#picture-2").removeClass("active"),$("#picture-1").removeClass("active")})}),function(a){var b=function(a){return encodeURIComponent((new RegExp("[?|&]"+a+"=([^&;]+?)(&|#|;|$)").exec(location.search)||[,""])[1].replace(/\+/g,"%20"))||null}("from");b&&(a.cookie="from="+b+";Path=/; Domain=oneapm.com")}(document),$(document).ready(function(){var a={open:!1,lastState:!1,content:"",processing:!1},b=function(){var b=$(".product"),c=$(".solution"),d=$(".subnav-container"),e=($(".subnav"),$(".subnav .container")),f=$("#product strong"),g=$("#solution strong"),h=$(".subnav-container .string");1==a.open&&(a.processing=!0,d.hasClass("showSub")||d.addClass("showSub"),setTimeout(function(){h.addClass("active"),e.addClass("active"),a.processing=!1},200)),1==a.open&&"product"==a.content&&(a.processing=!0,b.hasClass("open")||b.addClass("open"),c.hasClass("open")&&c.removeClass("open"),f.hasClass("active")||(a.lastState?f.addClass("active"):f.addClass("active",150)),g.hasClass("active")&&g.removeClass("active")),1==a.open&&"solution"==a.content&&(a.processing=!0,c.hasClass("open")||c.addClass("open"),b.hasClass("open")&&b.removeClass("open"),g.hasClass("active")||(a.lastState?g.addClass("active"):setTimeout(function(){g.addClass("active"),a.processing=!1},150)),f.hasClass("active")&&f.removeClass("active")),0==a.open&&(a.processing=!0,c.hasClass("open")&&setTimeout(function(){c.removeClass("open"),a.processing=!1},200),b.hasClass("open")&&b.removeClass("open"),g.hasClass("active")&&g.removeClass("active"),f.hasClass("active")&&f.removeClass("active"),d.hasClass("showSub")&&d.removeClass("showSub"),h.hasClass("active")&&h.removeClass("active"),e.hasClass("active")&&e.removeClass("active"))};$(".nav-item a,.nav-item a strong,.logo a").mouseenter(function(c){var d=$(window).width();c.target==$(".forward").get(0)||c.target==$(".forward strong").get(0)?d>767&&(a.lastState=a.open,a.open=!0,a.content="product",b()):c.target==$(".sol-nav").get(0)||c.target==$(".sol-nav strong").get(0)?d>767&&(a.lastState=a.open,a.open=!0,a.content="solution",b()):(a.lastState=a.open,a.open=!1,a.content="",b())}),$(".subnav .container").mouseleave(function(c){{var d,e;$("nav.nav-left"),$("nav.nav-right")}$(window).width()>767&&(d=$("#header").height()+$(".subnav").height(),e=$("nav.nav-left").offset().left+$("nav.nav-left").width(),c.screenY>=d?(a.lastState=a.open,a.open=!1,a.content="",b()):c.screenX>=e&&(a.lastState=a.open,a.open=!1,a.content="",b()))}),$("nav a strong").mouseenter(function(a){a.stopPropagation()}),$("nav a strong").mouseleave(function(a){a.stopPropagation()}),$("#product a strong").click(function(){var c=$(window).width();c>767&&(a.open?(a.lastState=a.open,a.open=!1,a.content="",b()):(a.lastState=a.open,a.open=!0,a.content="product",b()))}),$("#product a").click(function(a){var b=$(window).width();a.stopPropagation(),768>b&&($(".subnav-container").show(),setTimeout(function(){$("#navbar-collapse").css("left","-100%"),$(".product").addClass("open"),$(".subnav-container").css("left","0")},10))}),$("#solution a strong").click(function(){var c=$(window).width();c>767&&(a.open?(a.lastState=a.open,a.open=!1,a.content="",b()):(a.lastState=a.open,a.open=!0,a.content="solution",b()))}),$("#solution a").click(function(a){var b=$(window).width();a.stopPropagation(),767>=b&&($(".subnav-container").show(),setTimeout(function(){$("#navbar-collapse").css("left","-100%"),$(".solution").addClass("open"),$(".subnav-container").css("left","0")},10))}),$(".subnav #back").click(function(){$("#navbar-collapse").css("left","0"),$(".subnav-container").css("left","100%"),setTimeout(function(){$(".product").removeClass("open"),$(".subnav-container").removeAttr("style")},500)}),$(".subnav #back_s").click(function(){$("#navbar-collapse").css("left","0"),$(".subnav-container").css("left","100%"),setTimeout(function(){$(".solution").removeClass("open"),$(".subnav-container").removeAttr("style")},500)}),$(".mydropdown .dropdown-link").click(function(c){navigator.userAgent.indexOf("iPad")>-1&&(c.preventDefault(),a.open&&(a.lastState=a.open,a.open=!1,a.content="",b())),c.stopPropagation()}),$(window).bind("scroll",function(){a.open&&(a.lastState=a.open,a.open=!1,a.content="",b())})});var scrolltotop={setting:{startline:100,scrollto:0,scrollduration:1e3,fadeduration:[500,100]},controlHTML:'<i class="fa fa-angle-up"></i>',controlattrs:{offsetx:5,offsety:5},anchorkeyword:"#top",state:{isvisible:!1,shouldvisible:!1},scrollup:function(){this.cssfixedsupport||this.$control.css({opacity:0});var a=isNaN(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto);a="string"==typeof a&&1==jQuery("#"+a).length?jQuery("#"+a).offset().top:0,this.$body.animate({scrollTop:a},this.setting.scrollduration)},keepfixed:function(){var a=jQuery(window),b=a.scrollLeft()+a.width()-this.$control.width()-this.controlattrs.offsetx,c=a.scrollTop()+a.height()-this.$control.height()-this.controlattrs.offsety;this.$control.css({left:b+"px",top:c+"px"})},togglecontrol:function(){var a=jQuery(window).scrollTop();this.cssfixedsupport||this.keepfixed(),this.state.shouldvisible=a>=this.setting.startline?!0:!1,this.state.shouldvisible&&!this.state.isvisible?(this.$control.stop().animate({opacity:1},this.setting.fadeduration[0]),this.state.isvisible=!0):0==this.state.shouldvisible&&this.state.isvisible&&(this.$control.stop().animate({opacity:0},this.setting.fadeduration[1]),this.state.isvisible=!1)},init:function(){jQuery(document).ready(function(a){var b=scrolltotop,c=document.all;b.cssfixedsupport=!c||c&&"CSS1Compat"==document.compatMode&&window.XMLHttpRequest,b.$body=a(window.opera?"CSS1Compat"==document.compatMode?"html":"body":"html,body"),b.$control=a('<div id="topcontrol">'+b.controlHTML+"</div>").css({position:b.cssfixedsupport?"fixed":"absolute",bottom:b.controlattrs.offsety,right:b.controlattrs.offsetx,opacity:0,cursor:"pointer"}).attr({title:"Scroll Back to Top"}).click(function(){return b.scrollup(),!1}).appendTo("body"),document.all&&!window.XMLHttpRequest&&""!=b.$control.text()&&b.$control.css({width:b.$control.width()}),b.togglecontrol(),a('a[href="'+b.anchorkeyword+'"]').click(function(){return b.scrollup(),!1}),a(window).bind("scroll resize",function(){b.togglecontrol()})})}};scrolltotop.init();