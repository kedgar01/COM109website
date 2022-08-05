function submitbutton(){
    
    var theForm = document.forms[0];
       var alertText = "";
       for(i=0; i<theForm.elements.length; i++){
    
          if(theForm.elements[i].type == "select"){
            alertText += "Title: " + theForm.elements[i].options[theForm.elements[i].selectedIndex].value + "\n";
          }
          else if(theForm.elements[i].type == "text"){
            alertText += "First name: " + theForm.elements[i].value + "\n";
          }
          else if(theForm.elements[i].type == "text"){
          alertText += "Last name: " + theForm.elements[i].value + "\n";
          }
          else if(theForm.elements[i].type == "email"){
          alertText += "Email: " + theForm.elements[i].value + "\n";
          }
          else if(theForm.elements[i].type == "textarea"){
            alertText += "Message: " + theForm.elements[i].value + "\n";
            }
       
       }
       alert(alertText);
    }