window.onload=function(){
    count=0;

    var togglebtn=document.getElementById("toggle-btn");
    var section=document.getElementById("section");

    togglebtn.onclick=function f1(){
        if(count == 0)
            {
                var sidenav=document.getElementById("sidenav");
                sidenav.style.display="flex";
                sidenav.className="animate__animated animate_slideInLeft animate__faster";

                var topnav=document.getElementById("topnav");
                topnav.style.left="280px";
                topnav.style.transition="1s";

                section.style.background="rgba(0,0,0,0.5)";
                section.className="animate__animated animate__fadeIn";

                count=1;
                
            }
            else{
                var sidenav=document.getElementById("sidenav");
                sidenav.style.display="none";
                sidenav.className="animate__animated animate_slideInRight animate__faster";
               // sidenav.className="animate__animated animate_fadeOutLeftBig animate__slower";

                var topnav=document.getElementById("topnav");
                topnav.style.left="0";
                topnav.style.transition="1s";
                section.style.background="";
                section.style.transition="0.3s";
                count=0;
            }
    }
}