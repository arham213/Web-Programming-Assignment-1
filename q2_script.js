function validate_input(){
  //Validate Personal Information
  //debugger;
  var fname = document.getElementById("fname").value;
  var flag1=validate_text(fname,"fname-error");
  var lname = document.getElementById("lname").value;
  var flag2=validate_text(lname,"lname-error");
  var contact_no = document.getElementById("contact-no").value;
  var flag3=validate_contact_no(contact_no,"contact-no-error");
  var email = document.getElementById("email").value;
  var flag4=validate_email(email,"email-error");
  
  //Validate Education
  var education_level = document.getElementById("education-level").value;
  var flag5=validate_text(education_level,"education-level-error");
  var institution = document.getElementById("institution").value;
  var flag6=validate_text(institution,"institution-error");
  var major = document.getElementById("major").value;
  var flag7=validate_text(major,"major-error");

  //Validate Previous Jobs
  var company_names = document.getElementById("company-names").value;
  var flag8=validate_multiple_text(company_names,"company-names-error");
  var dates=document.getElementById("employment-dates").value;
  var flag9=validate_multiple_dates(dates,"employment-dates-error");
  
  //Validate Skills and Certifications
  document.getElementById("skills").innerHTML="";
  var skills = document.getElementById("skills").value;
  var flag10=validate_multiple_text(skills,"skills-error");
  var certifications = document.getElementById("certifications").value;
  var flag11=validate_multiple_text(skills,"certifications-error");
  
  //Validate Availability
  var flag12=validate_date2("start-date","start-date-error");
  var flag13=validate_radio_buttons("choice-error");
  var flag14=validate_drop_down_list("preferred-work-schedule","preferred-work-schedule-error");
  
  //Validate Refrences
  var reference_name=document.getElementById("reference-name").value;
  var flag15=validate_multiple_text(reference_name,"reference-name-error");
  var reference_email=document.getElementById("reference-email").value;
  var flag16=validate_multiple_emails(reference_email,"reference-email-error");
  var reference_relationship=document.getElementById("reference-relationship").value;
  var flag17=validate_multiple_text(reference_relationship,"reference-relationship-error");
  
  //Validate Resume and Cover Letter
  debugger;
  //var flag18=validate_file("resume","resume-error");
  var flag18=true;
  var cover_letter=document.getElementById("cover-letter").value;
  var flag19=validate_text3(cover_letter,"cover-letter-error");
  
  //Validate Additional Question
  var additional_question=document.getElementById("additional-question").value;
  var flag19=validate_text3(additional_question,"additional-question-error");
  
  //Validate Consent and Agreement
  var flag20=validate_checkbox("terms-and-conditions","terms-and-conditions-error");
  var flag21=validate_checkbox("privacy-policy","privacy-policy-error");
  
  if(flag1&&flag2&&flag3&&flag4&&flag5&&flag6&&flag7&&flag8&&flag9&&flag10&&
  flag11&&flag12&&flag13&&flag14&&flag15&&flag16&&flag17&&flag18&&flag18&&flag20){
    document.write("<html><body><table><tr><td>First Name</td><td>"+fname+"</td></tr><tr><td>Last Name</td><td>"+lname+"</td></tr></table></body></html>");
    document.close();
  alert("Your response has been recorded successfully!");
  }
  else{
    alert("There are some issues. Please resolve them");
  }
}                                                                                            

function validate_text(name,error_id){
  if(name.length==0){//empty field
    document.getElementById(error_id).innerHTML = "It is a required field";
    return false;
  }
  for(var i=0; i<name.length;i++){
    var ascii = name[i].charCodeAt(0);
    if((ascii >= 65 && ascii <=90 ) | (ascii >= 97 && ascii <=122)){
      
    }
    else{//incorrect format
      document.getElementById(error_id).innerHTML = "Only characters (A-Z) or (a-z) are allowed";
      return false;
    }
  }
  document.getElementById(error_id).innerHTML = " ";
  return true;
}

function validate_text3(name,error_id){
  if(name.length==0){//empty field
    document.getElementById(error_id).innerHTML = "It is a required field";
    return false;
  }
  else{
    document.getElementById(error_id).innerHTML=" ";
    return true;
  }
}

function validate_contact_no(contact_no,error_id){
  if(contact_no.length == 0){
    document.getElementById(error_id).innerHTML = "It is a required field";
    return false;
  }
  if(contact_no.length == 13){
    if(contact_no[0] == '+' && contact_no[1] == '9' && contact_no[2] == '2' && contact_no[3]=='3'){
      for(var i=4;i<13;i++){
        if(contact_no[i] < 0 ){
          document.getElementById(error_id).innerHTML = "Please follow the correct format";
          return false;
        }
      }
      document.getElementById(error_id).innerHTML = " ";
      return true;
    }
  }
  document.getElementById(error_id).innerHTML = "Length should be equal to 13";
  return false;
}

function validate_email(email,error_id){
  if(email.length > 0){
    var atPosition=email.indexOf("@");
    var dotPosition=email.indexOf(".");
    if(atPosition>0){
      if((dotPosition-atPosition)>=2){
        if(((email.length-1)-dotPosition)>=2){
          document.getElementById(error_id).innerHTML = " ";
          return true;
        }
      }
      else{
        document.getElementById(error_id).innerHTML = "Please follow the correct format";
        return false;
      }
    }
    else{
      document.getElementById(error_id).innerHTML = "Please follow the correct format";
      return false;
    }
  }
  else{
    document.getElementById(error_id).innerHTML = "It is a required field";
    return false;
  }
}

function validate_multiple_text(name,error_id){
  if(name.length>0){
    var array = name.split(",");
    var length = array.length;
    for(var i=0;i<length;i++){
      var array2=array[i].split(" ");
      var length2=array2.length;
      for(var j=0;j<length2;j++){
        if(!validate_text2(array2[j])){
          document.getElementById(error_id).innerHTML = "Only characters (A-Z) and (a-z) are allowed"
          return false;
        }
      }
    }
    document.getElementById(error_id).innerHTML = " ";
    return true;
  }
  else{
    document.getElementById(error_id).innerHTML = "It is a required field";
    return false;
  }
}

function validate_text2(name){
  if(name.length==0){//empty field
    return false;;
  }
  for(var i=0; i<name.length;i++){
    var ascii = name[i].charCodeAt(0);
    if((ascii >= 65 && ascii <=90 ) | (ascii >= 97 && ascii <=122)){
      
    }
    else{//incorrect format
      return false;
    }
  }
  return true;
}

function validate_multiple_dates(date,error_id){
  if(date.length>0){
    var dates=date.split(",");
    var length=dates.length;
    for(var i=0;i<length;i++){
      if(!validate_date(dates[i])){
        document.getElementById(error_id).innerHTML="Please the follow the correct format";
        return false;
      }
    }
    document.getElementById(error_id).innerHTML=" ";
    return true;
  }
  else{
    document.getElementById(error_id).innerHTML="It is a required field";
    return false;
  }
}

function validate_date(date){
  var decomp_date=date.split("-");
  if(decomp_date.length==2){
    var start_date=decomp_date[0].split(" ");
    var end_date=decomp_date[1].split(" ");
    if(start_date.length==2&&end_date.length==2){
      if(check_month(start_date[0])&&check_month(end_date[0])){
        if(convert_month_to_integer(start_date[0])<convert_month_to_integer(end_date[0])){
          if(check_year(start_date[1])&&check_year(end_date[1])){
            if(Number(start_date[1])<Number(end_date[1])){
              return true;
            }
          }
        }
      }
    }
    return false;
  }
  else{
    return false;
  }
}

function check_month(month){
  if(month=="Jan"|month=="Feb"|month=="Mar"|month=="Apr"|month=="May"|month=="Jun"|
  month=="Jul"|month=="Aug"|month=="Sep"|month=="Oct"|month=="Nov"|month=="Dec"){
    return true;
  }
  return false;
}

function convert_month_to_integer(month){
  switch (month) {
    case "Jan":
      return 1;
    case "Feb":
      return 2;
    case "Mar":
      return 3;
    case "Apr":
      return 4;
    case "May":
      return 5;
    case "Jun":
      return 6;
    case "Jul":
      return 7;
    case "Aug":
      return 8;
    case "Sep":
      return 9;
    case "Oct":
      return 10;
    case "Nov":
      return 11;
    default:
      return 12;
  }
}

function check_year(year){
  if(year.length==4){
    if((Number(year)>=1950) && (Number(year)<2024)){
      return true;
    }
    return false;
  }
  else{
    return false;
  }
}

function validate_multiple_emails(email,error_id){
  if(email.length>0){
    var emails=email.split(",");
    var length=emails.length;
    for(var i=0;i<length;i++){
      if(!validate_email(emails[i],error_id)){
        return false;
      }
    }
    return true;
  }
  else{
    document.getElementById(error_id).innerHTML="It is a required field";
    return false;
  }
}

function validate_checkbox(id,error_id){
  var check_box=document.getElementById(id);
  if(!check_box.checked){
    document.getElementById(error_id).innerHTML="You must check this field";
    return false;
  }
  else{
    document.getElementById(error_id).innerHTML=" ";
    return true;
  }
}

function validate_radio_buttons(error_id){
  var buttons=document.availability_form.choice;
  var length=buttons.length;
  for(var i=0;i<length;i++){
    if(buttons[i].checked){
      document.getElementById(error_id).innerHTML=" ";
      return true;
    }
  }
  document.getElementById(error_id).innerHTML="Please select any one of these options";
  return false;
}

function validate_drop_down_list(id,error_id){
  var drop_down_list=document.getElementById(id);
  if(drop_down_list.value==""){
    document.getElementById(error_id).innerHTML="It is a required field";
    return false;
  }
  else{
    document.getElementById(error_id).innerHTML=" ";
    return true;
  }
}

function validate_file(id,error_id){
  var file_node=document.getElementById(id);
 /* if(file_node.value==""){
    document.getElementById(error_id).innerHTML="";
    return true;
  }
  else{
    document.getElementById(error_id).innerHTML="It is a required field";
    return false;
  }*/
  if(file_node.length==0){
    document.getElementById(error_id).innerHTML="It is a required field";
    return false;
  }
  else{
    document.getElementById(error_id).innerHTML=" ";
    return true;
  }
}

function validate_date2(id,error_id){
  var date_node=document.getElementById(id);
  if(date_node!=null){
    if(date_node.value==""){
      document.getElementById(error_id).innerHTML="It is a required field";
      return false;
    }
    else{
      document.getElementById(error_id).innerHTML=" ";
      return true;
    }
  }
}