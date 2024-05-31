function hideCookiePopup(){
    let popup = document.getElementById('cookies');
    popup.style.animation = "hidePopup 1s 1";
    setTimeout(()=>{
        popup.style.display = "none"
    }, 990);
}