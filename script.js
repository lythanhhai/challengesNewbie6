const buttonShare = document.getElementById("buttonShare");
const buttonIcon = document.getElementById("buttonIcon");
const share = document.getElementById("share");
const share__name1 = document.getElementById("share__name1");
const facebook1 = document.getElementById("facebook1");
const tweeter1 = document.getElementById("tweeter1");
const printest1 = document.getElementById("printest1");
// test desktop or mobile
const detectDeviceType = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? "Mobile" : "Desktop";
var count = 0;
// tạo style để đổi peusdo (before or after)
var styleElem = document.head.appendChild(document.createElement("style"));
buttonShare.addEventListener("click",function(){
    
    if(detectDeviceType() === "Desktop")
    {

        if(count > 0)
        {
            share.style.display = 'none';
            count = 0;
            styleElem.innerHTML = ".container__work-info .more__social::before {display:none;}";
            buttonShare.style.backgroundColor = "hsl(210, 46%, 95%)";
            buttonIcon.style.color = "hsl(217, 19%, 35%)";
        }
        else 
        {
    
            share.style.display = 'block';
            share.style.transition = "all 0.25s linear";
            buttonShare.style.backgroundColor = "hsl(217, 19%, 35%)";
            buttonIcon.style.color = "hsl(210, 46%, 95%)";       
            styleElem.innerHTML = ".container__work-info .more__social::before {display:block;}";
            count++;
        }
    }
    else
    {
        if(count > 0)
        {
            share.style.display = 'none';
            count = 0;
            buttonShare.style.backgroundColor = "hsl(210, 46%, 95%)";
            buttonIcon.style.color = "hsl(217, 19%, 35%)";
        }
        else 
        {
    
            share.style.display = 'block';
            share.style.transition = "all 0.25s linear";
            buttonShare.style.backgroundColor = "hsl(217, 19%, 35%)";
            buttonIcon.style.color = "hsl(210, 46%, 95%)";       
            count++;
        }
    }
});