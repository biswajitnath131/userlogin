const container = document.getElementById("container");
const registerbtn = document.getElementById("register");
const loginbtn = document.getElementById("login");

registerbtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginbtn.addEventListener("click", () => {
  container.classList.remove("active");
});



const name = document.getElementById('name');

const email = document.getElementById('email');

const Email = document.getElementById('Email');

const mobilenumber = document.getElementById('mobilenumber');

const mobilenumber_error = document.getElementById('mobilenumber_error');

const password = document.getElementById('password');

const Password = document.getElementById('Password');

const form = document.getElementById('form');

const Form = document.getElementById('Form');

const name_error = document.getElementById('name_error');

const email_error = document.getElementById('email_error');

const Email_error = document.getElementById('Email_error');

const password_error = document.getElementById('password_error');

const Password_error = document.getElementById('Password_error');



form.addEventListener ('submit',(e)=>
  {
var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

var mobilenumber_check =  /^[(]?(\d{3})[)]?[-|\s]?(\d{3})[-|\s]?(\d{4})$/;


if (name.value === '' || name.value== null)

{
  e.preventDefault();
  name_error.innerHTML = "Name is required";
}
else
{
  name_error.innerHTML = "";
}


if (!email.value.match(email_check))
  
  {
    e.preventDefault();
    email_error.innerHTML = "This Email is not Valid";
  }
  else
  {
    email_error.innerHTML = "";
  }

if(password.value.length <=8)

{
  e.preventDefault();
  password_error.innerHTML = "Password is required";
}
else
{
  password_error.innerHTML = "";
}

if (!mobilenumber.value.match(mobilenumber_check))

  {
    e.preventDefault();
    mobilenumber_error.innerHTML = "Enter your 10-digit Mobile_NO";
  }
  else
  {
    mobilenumber_error.innerHTML = "";
  }

})



Form.addEventListener ('submit',(e)=>  
  {
    var Email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (!Email.value.match(Email_check))
  
      {
        e.preventDefault();
        Email_error.innerHTML = "This Email is not Valid";
      }
      else
      {
        Email_error.innerHTML = "";
      }

      if(Password.value.length <=8)

        {
          e.preventDefault();
          Password_error.innerHTML = "Password is required";
        }
        else
        {
          Password_error.innerHTML = "";
        }  


})