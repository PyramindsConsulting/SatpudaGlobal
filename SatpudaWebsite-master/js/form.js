window.onload=function(){
            document.getElementById("Sucess").style.display="none";
        }
  var Number1 = Math.floor((Math.random() * 10) + 1);
       document.getElementById("numb1").innerHTML = Number1;
       document.getElementById("numb1").value = Number1;
       var Number2 = Math.floor((Math.random() * 10) + 1);
       document.getElementById("numb2").innerHTML = Number2;
       document.getElementById("numb2").value = Number2;
       //        alert(Number2);
       var total = Number1 + Number2;
        function Signupvalidate(){
        //    Check First Name For Desktop
         var IsError='no';
         var elem='';
            elem=document.getElementById("fname").value;
            if(elem==""){
                document.getElementById("fname").style.border="1px solid #F00";
                document.getElementById("fname_error").innerHTML="Enter name";
                IsError = 'yes';
            }else{
                var text=/^[A-Za-z]+$/;
                if(fname.value.match(text)){
                document.getElementById("fname").style.border="1px solid blue";
                document.getElementById("fname_error").innerHTML="";
            }else{
                document.getElementById("fname_error").innerHTML="Invalid name";
                IsError = 'yes';
                }
            }
        //    Check Email Id For Desktop

            elem=document.getElementById("email").value;
            if(elem==""){
                document.getElementById("email").style.border="1px solid #F00";
                document.getElementById("email_error").innerHTML="Enter email id";
                IsError = 'yes';
            }else{
                var atpos = elem.indexOf("@");
                var dotpos = elem.lastIndexOf(".");
                if (atpos<1 || dotpos<atpos+2 || dotpos+2>=elem.length) {
                document.getElementById("email_error").innerHTML="Invalid email id";
                IsError = 'yes';
                }else{
                    document.getElementById("email").style.border="1px solid blue";
                    document.getElementById("email_error").innerHTML="";
                }
            }
            
           //    Check TEXTAREA For Desktop
            
           elem=document.getElementById("textarea").value;
            if(elem==""){    
                document.getElementById("textarea").style.border="1px solid #F00";
                document.getElementById("txterror").innerHTML="Enter message";
                IsError = 'yes';     
            }
            else{
                document.getElementById("textarea").style.border="1px solid blue";
                document.getElmentById("txterror").innerHTML="";
                IsError = 'yes';
            } 

        //    Final Error Check
            if(IsError=='yes'){
                return false;  
            }else{
                return true;
            }
        }