function validate(){
    let u = document.getElementById("uname");
    let p =document.getElementById("pword");
    u.style.border="solid 1px aquamarine";
    p.style.border="solid 1px aquamarine";
    if(u.value.trim()=="")
    {
        alert("user cannot be empty");
        u.style.border="solid 3px red";
        return false;
    }
    else if(p.value.trim()=="")
    {
        alert("password cannot be empty");
        p.style.border="solid 3px red";
        return false;
    }
    else
    {
        return true;
    }
}