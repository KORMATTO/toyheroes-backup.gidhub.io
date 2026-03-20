var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
function onButtonQuickLoginClick()
{
    showLoadingQuick();

    var id = document.getElementsByName('userName')[0].value;
    var password = document.getElementsByName('password')[0].value;

    if (!id || !password || id == "Login ID"){
        showErrorQuick('Please fill out all required fields.');
        return;
    }

    var loginRequest = new XMLHttpRequest();
    
        loginRequest.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (this.responseText == "confirm")
                    window.location.href = "/confirm";
                else
                    window.location.href = "/club";
            }
            else if (this.readyState == 4 && this.status == 500) {
                showErrorQuick(this.responseText);
                clearPasswordQuick();
            }
        }
    
        loginRequest.open('POST', './api/pdx-login', true);
        loginRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        loginRequest.send('username=' + id + '&password=' + password);
}

function showLoadingQuick()
{
    var ajaxMask = document.getElementsByClassName('ajaxLoadingMaskQuick');
    ajaxMask[0].style.display = "block";
    document.getElementById('quickloginbuttonmask').style.display = "block";

    document.getElementById('wrong_password_board').style.display = "none";

    var errorMessage = document.getElementById('msgLogin');
    errorMessage.style.display = "none";
}

function showErrorQuick(errorText) {
    var ajaxMask = document.getElementsByClassName('ajaxLoadingMaskQuick');
    ajaxMask[0].style.display = "none";
    document.getElementById('quickloginbuttonmask').style.display = "none";

    document.getElementById('wrong_password_board').style.display = "block";
    var errorMessage = document.getElementById('msgLogin');
    errorMessage.innerHTML = errorText;
    errorMessage.style.display = "block";
}

function clearPasswordQuick() {
    document.getElementsByName('password')[0].value = '';
}
}