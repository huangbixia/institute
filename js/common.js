window.onload = function()
{
   var navBar = document.getElementById("navbar");
   var navBarLi = navBar.getElementsByTagName("li");
   var liImg = document.getElementsByClassName("icon");
   var centerPic = document.getElementsByClassName("centerPic")[0];
   var chooseUserLi = centerPic.getElementsByTagName("li");
   var userIcon = document.getElementsByClassName("user");

   var leftTextBox = document.getElementsByClassName("leftTextBox");
   var moveBox = document.getElementsByClassName("moveBox");
   var rightImg = document.getElementsByClassName("img-responsive");

   var loginUser = document.getElementsByClassName("loginImg");
   var loginBox = document.getElementsByClassName("loginBox");
   var i;
   var timer = null;
   var k = 1;

   //自动切换中央图片
   timer = setInterval(function(){
	 
	    for(i=0;i<moveBox.length;i++)
		{		
        if (k == i) {
         moveBox[k].style.display = "block";
         rightImg[k].style.opacity = leftTextBox[k].style.opacity = 0;
         rightImg[k].style.filter = leftTextBox[k].style.filter = "alpha(opacity=0)";
         showFunction(leftTextBox[k],"opacity",100,25);
         showFunction( rightImg[k],"opacity",100,35);
		}
		 else
		 {
			  moveBox[i].style.display = "none";
		 }
	   }
	    k++;
		if(k>4)k=0;//继续循环切换
   },5000);
   

   /*---菜单----*/
    for(i=0;i<navBarLi.length;i++)
    {
        navBarLi[i].index = i;

        navBarLi[i].onmouseover = function()
        {
            liImg[this.index].src = "images/icon"+(this.index+10)+".png";

        };
        navBarLi[i].onmouseout = function()
        {
            liImg[this.index].src = "images/icon"+(this.index)+".png";
        };
       
    }
    /*---中央图片用户图标----*/

    for(i=0;i<chooseUserLi.length;i++)
    {
        chooseUserLi[i].index = i;
        chooseUserLi[i].onmouseover = function()
        {
            userIcon[this.index].src = "images/user2.png";
        };
        chooseUserLi[i].onmouseout = function () {
            userIcon[this.index].src = "images/user1.png";
        };
    }
   /*-------登录框-------*/
    for(i=0;i<loginBox.length;i++)
    {
        loginBox[i].index = i;
        loginBox[i].onmouseover = function()
        {
           loginUser[this.index].src = "images/user2.png";
        };
        loginBox[i].onmouseout = function()
        {
           loginUser[this.index].src = "images/user1.png";
        };
    }
};
//获取对象透明度属性
function getOpacity(obj,attr)
{
    if(obj.currentStyle)
    {
        return obj.currentStyle[attr];
    }
    else
    {
        return getComputedStyle(obj,false)[attr];
    }
}

function showFunction(obj,attr,opacity,controlSpeed)
{
    clearInterval(obj.timer);//清除上一次生成的timer

    obj.timer = setInterval(function(){
        var currentOpacity = parseInt(parseFloat(getOpacity(obj,attr))*100);

        //实现缓冲运动
        var Speed = (opacity-currentOpacity)/controlSpeed;
        //正数是向上取整，负数时，向下取整
        Speed = Speed>0 ? Math.ceil(Speed):Math.floor(Speed);

        if(currentOpacity==opacity)
        {
            clearInterval(obj.timer);
        }
        else
        {
                obj.style.opacity = (currentOpacity+Speed)/100;
                obj.style.filter = "alpha(opacity:"+(currentOpacity+Speed)+")";
        }
    },30);
}