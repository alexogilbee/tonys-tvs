function validate() {
    console.log("fname")
    if( document.myForm.fname.value == "" ||
    document.myForm.fname.value.length <= 1) 
    {
        alert( "Please provide your first name!" );
        document.myForm.fname.focus() ;
        return false;
    }

    console.log("lname")
    if( document.myForm.lname.value == "" ||
    document.myForm.lname.value.length <= 1)  
    {
        alert( "Please provide your last name!" );
        document.myForm.lname.focus() ;
        return false;
    }

    console.log("addy")
    if( document.myForm.addy.value == "" ||
    document.myForm.addy.value.length <= 1)  
    {
        alert( "Please provide your address!" );
        document.myForm.addy.focus() ;
        return false;
    }

    console.log("city")
    if( document.myForm.city.value == "" ||
    document.myForm.city.value.length <= 1)  
    {
        alert( "Please provide your city!" );
        document.myForm.city.focus() ;
        return false;
    }

    // state
    console.log("state")
    console.log(document.myForm.state.value)
    if( document.myForm.state.value == "" ) 
    {
        alert( "Please provide your state!" );
        return false;
    } 
    
    console.log("zip")
    if( document.myForm.zip.value == "" || 
    isNaN( document.myForm.zip.value ) ||
    document.myForm.zip.value.length != 5 ) 
    {
        alert( "Please provide a zip in the format #####." );
        document.myForm.zip.focus() ;
        return false;
    }

    // phone number
    console.log("phone")
    if( document.myForm.phone.value == "" || 
    isNaN( document.myForm.phone.value ) ||
    document.myForm.phone.value.length != 10 ) 
    {
        alert( "Please provide a phone number in the format ##########." );
        document.myForm.phone.focus() ;
        return false;
    }

    // phone dial
    if( document.getElementById('personal').checked == false &&
    document.getElementById('business').checked == false)
    {
        alert( "Please specify a personal or business phone number.");
        return false;
    }

    console.log("email")
    if( (document.myForm.email.value == "") ||
    (document.myForm.email.value.length <= 1) ||
    (validateEmail() == false) ) 
    {
        alert( "Please provide your Email!" );
        document.myForm.email.focus() ;
        return false;
    }
    
    return( true );
}
     
function validateEmail() 
{
    var emailID = document.myForm.email.value;
    atpos = emailID.indexOf("@");
    console.log(atpos);
    dotpos = emailID.lastIndexOf(".");  
    console.log(dotpos);
    if (atpos < 1 || ( dotpos - atpos < 2 ) || dotpos == (emailID.length - 1)) // dotpos is less than length
    {
        alert("Please enter correct email ID")
        document.myForm.email.focus() ;
        return false;
    }
    return( true );
}