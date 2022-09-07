let scrn = document.getElementById('screen');

function input(x){
    scrn.value=scrn.value+x;
}
function allclear(){
    scrn.value=' ';
}
function del(){
    scrn.value=scrn.value.slice(0,-1);
}
function calc(){
    try{
        scrn.value=eval(scrn.value);
    }
    catch{
        scrn.value='ERROR';
    }
}