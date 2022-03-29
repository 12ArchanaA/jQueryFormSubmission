var userCredentials =
{
    username :"admin", 
    password :"123",
};


var invalidLoginMessage="Invalid username or password";
var emptyFieldMessage="Please fill in all the details";

$("#login-form").submit(formSubmission);



function formSubmission(event)
{
    event.preventDefault();
    var username = $("#username").val();
    var password = $("#password").val();

    if (!username || !password)
    {
        showError(emptyFieldMessage);
        return;
    }
    if (username !== userCredentials.username || password !== userCredentials.password)
    {
        showError(invalidLoginMessage);
        return;
    }
    window.location.href = "./dashboard1.html"
}


function showError(message)
{
    $("#error-message").text(message);
    setTimeout(function (){
        $("#error-message").text("");
    },3000);
}
