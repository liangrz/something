// 1、每5秒消灭一次最后一个Div    
//这个框是通过js的Interval每5秒生成一个Div框，且这个框是最后一个Div，那么直接每5秒消灭这个框就可以了    
$(document).ready(function(){    
    function t(){    
      $('div:last').remove();    
    }    
$('div.last').remove();    
var tt = setInterval(t,5000);    
});    
    
// 2、自动触发按键事件
//上述的方法有点瑕疵，由于机器问题可能会有实名认证框一闪而过的踪影    
//这个框有一个停止Interval的事件，就是按右上角的X，让这个事件自动触发就好了    
window.onload = function(){
	find_kill();
}
function find_kill(){
    var div = document.getElementsByTagName('div');
    for(k in div){
   		var re = /sae.sina.com.cn/;
   		var flag = re.exec(div[k].innerHTML);
    	if(flag){
    		break;
    	}
    }
    var a = div[k].getElementsByTagName('a')[1];
    a.click();
};   

