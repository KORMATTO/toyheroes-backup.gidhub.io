var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
function onButtonResetClick() {
    showLoading();

    var email = document.getElementsByName('Email')[0].value;

    if (!email || !email.includes('@')){
        showError('You need to fill out all required fields');
        return;
    }

    var resetRequest = new XMLHttpRequest();
    
        resetRequest.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                showSuccess();
                clearEmail();
            }
            else if (this.readyState == 4 && this.status == 500) {
                showError(this.responseText);
                clearEmail();
            }
        }
    
        resetRequest.open('POST', './api/pdx-reset', true);
        resetRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        resetRequest.send('email=' + email);
}

function showLoading()
{
    var ajaxMask = document.getElementsByClassName('ajaxLoadingMask');
    ajaxMask[0].style.display = "block";

    var errorMessage = document.getElementById('msgRegister');
    errorMessage.style.display = "none";
}

function showError(errorText) {
    var ajaxMask = document.getElementsByClassName('ajaxLoadingMask');
    ajaxMask[0].style.display = "none";

    var errorMessage = document.getElementById('msgRegister');
    errorMessage.innerHTML = errorText;
    errorMessage.style.display = "block";
}

function showSuccess() {
    var ajaxMask = document.getElementsByClassName('ajaxLoadingMask');
    ajaxMask[0].style.display = "none";
    
    var errorMessage = document.getElementById('msgRegister');
    errorMessage.innerHTML = "Please check your e-mail inbox.";
    errorMessage.style.display = "block";
    errorMessage.style.color = "green";
}

function clearEmail() {
    document.getElementsByName('Email')[0].value = '';
}
}