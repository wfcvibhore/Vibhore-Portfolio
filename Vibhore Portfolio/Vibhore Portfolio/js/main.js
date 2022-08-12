var flag = 0;


function formValidate() {
    let name= document.forms["contactForm"]["cname"].value;
    let email= document.forms["contactForm"]["cemail"].value;
    let city = document.forms["contactForm"]["ccity"].value;
    let address = document.forms["contactForm"]["caddress"].value;
    let postal = document.forms["contactForm"]["cpostalcode"].value;
    let message= document.forms["contactForm"]["cmessage"].value;
    let rate = document.forms["contactForm"]["hourlyrate"].value;

    // validate every field for null value
    if (name == "" || email == "" || city == "" || address == "" || postal == "" || message == "" || (flag == 1 && rate == "")) {
        alert("Field can't be empty");
        return false;
    }
    // validate email @ and dot
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        alert("Please enter a valid email address");
        return false;
    }
    // canada postal code validation
    if (!postal.match(/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/)) {
        alert("Please enter a valid canada postal code");
        return false;
    }  

    
    
    
    

}

function showRate(x){
    if(x == 0){
        flag = 1;
        document.querySelector('#rate').style.display = 'block';

    }
    else {
        flag = 0;
        document.querySelector('#rate').style.display = 'none';
   
}
    return;


}
function openMenu(menu) {
    menu.classList.toggle('open');
}