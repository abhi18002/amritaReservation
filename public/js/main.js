const users = [{

  username: "user1",
  pwd: "login1"
}, {
  username: "user2",
  pwd: "login2"
}];

function validate()
{
    if(  users.find( o => o.username === document.getElementById("username").value)
       && users.find( o => o.pwd === document.getElementById("pwd").value))
    {console.log( users.find( o => o.username === document.getElementById("username").value));
location.href="/dash";    }
    else
    {
 document.getElementById("form").reset();
setTimeout(function(){
   document.getElementById("wrong").removeAttribute("hidden");

});
    }
}
