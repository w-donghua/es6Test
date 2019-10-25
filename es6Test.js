let promptInput = prompt("你的名字： ",'');
if(promptInput === "Admin"){
    let passWordInput = prompt("输入密码： ",'');
    if(passWordInput === "TheMaster"){
        alert("Welcome!");
    }else if (passWordInput=='' || passWordInput == null ){
        alert("Wrong password");
    }else{
        alert('Canceled.');
    }


}else if(promptInput === ' ' || promptInput === null){
    alert('Canceled');
}else{
    alert('I don’t know you');
}