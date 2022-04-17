document.getElementById("login_submit").addEventListener("click", loginFunction);
function loginFunction(){
    const user_input_id = document.getElementById("user_id");
    const user_id = user_input_id.value;
    const user_input_pass = document.getElementById("password");
    const user_password = user_input_pass.value;
    
    if(user_id == "admin" && user_password ==123 ){
        window.location.href="dashboard.html";
    }else{
        alert("Please Enter Correct User Id & Password!");
    }
}
