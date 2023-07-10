 var a=0;
    ca();
    function ca(){
        var i;
        var x=document.getElementsByClassName("slide");
        for(i=0;i<x.length;i++){
            x[i].style.display="none";
        }
        a++;
        if(a>x.length){a=1}
        x[a-1].style.display="block";
        setTimeout(ca,2000);
    }

function getLocation() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function showPosition(p){
            let poisition = `Kinh độ: ${p.coords.longitude} - Vĩ độ: ${p.coords.latitude}`;
            alert(poisition);
        })
    }else{
        alert("Trình duyệt không hỗ trợ geolocation");
    }    
}