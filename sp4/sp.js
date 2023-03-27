function toRegister() {

    let eml = document.getElementById('email');
    let pswrd = document.getElementById('password');
    let fllnm = document.getElementById('fullname');
    let cntr = document.getElementById('country');
    let brth = document.getElementById('birthdate');

    let infoList = getInfo();
    infoList.push({"email": eml.value, "password": pswrd.value, "fullname": fllnm.value, "country": cntr.value, "birthdate": brth.value });
    localStorage.setItem("polzovateli", JSON.stringify(infoList));

    eml.value = "";
    pswrd.value = "";
    fllnm.value = "";
    cntr.value = "";
    brth.value = "";

}

function getInfo(){
    let list = localStorage.getItem("polzovateli");
    if(list != null) {
        let list2 = JSON.parse(list);
        return list2;
    }

    return [];
}



function toLogin() {
    let array = localStorage.getItem("polzovateli");
    let array1 = JSON.parse(array);

    let eml1 = document.getElementById('email');
    let pswrd1 = document.getElementById('password');

    for(let i = 0; i < array1.length; i++){
        if(array1[i].email === eml1.value && array1[i].password === pswrd1.value){
            localStorage.setItem('id', i);
            window.open("split4wlcm.html");
            eml1.style = "border-color: rgb(223, 223, 223)";
            pswrd1.style = "border-color: rgb(223, 223, 223)";
            break;
        }else{
            eml1.style = "border-color: red";
            pswrd1.style = "border-color: red";
        }
    }
}
