function send()
{
var name,email,pass;
name=document.getElementById('t1').value;
localStorage.setItem("Name",name);
email=document.getElementById('t2').value;
localStorage.setItem("Email",email);
pass=document.getElementById('t3').value;
localStorage.setItem("Password",pass);
}