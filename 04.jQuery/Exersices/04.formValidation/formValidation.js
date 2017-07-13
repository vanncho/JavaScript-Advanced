// function validate() {
//
//     let usernameInput = $('#username');
//     let emailInput = $('#email');
//     let passwordInput = $('#password');
//     let confirmPasswordInput = $('#confirm-password');
//     let company = $('#company');
//     let companyNumber = $('#companyNumber');
//
//     usernameInput.on('change', usernameCheck);
//     emailInput.on('change', emailCheck);
//     passwordInput.on('change', passwordCheck);
//     confirmPasswordInput.on('change', confirmPasswordCheck);
//     companyNumber.on('change', companyNumberCheck);
//     company.on('change', showHideCompanyField);
//
//     let submitBtn = $('#submit');
//     submitBtn.on('click', function (ev) {
//         ev.preventDefault();
//     });
//
//     submitBtn.on('click', function () {
//
//         let isValid = true;
//         let isValidDiv = $('#valid');
//
//         usernameCheck();
//         emailCheck();
//         passwordCheck();
//         confirmPasswordCheck();
//         companyNumberCheck();
//         isValidDiv.css('display', 'none');
//
//         if (passwordInput.val() !== confirmPasswordInput.val()) {
//             isValid = false;
//             setBorderToRed(passwordInput);
//             setBorderToRed(confirmPasswordInput);
//         }
//
//         if (usernameInput.attr('style') === 'border-color: red;') {
//             isValid = false;
//         }
//
//         if (emailInput.attr('style') === 'border-color: red;') {
//             isValid = false;
//         }
//
//         if (passwordInput.attr('style') === 'border-color: red;') {
//             isValid = false;
//         }
//
//         if (confirmPasswordInput.attr('style') === 'border-color: red;') {
//             isValid = false;
//         }
//
//         if (company.attr('style') === 'border-color: red;') {
//             isValid = false;
//         }
//
//         if (companyNumber.attr('style') === 'border-color: red;') {
//             isValid = false;
//         }
//
//         if (isValid) {
//             isValidDiv.css('display', 'inline-block');
//         } else {
//             isValidDiv.css('display', 'none');
//         }
//     });
//
//     function showHideCompanyField() {
//         let fieldset = $('#companyInfo');
//
//         if (fieldset.css('display') === 'none') {
//             fieldset.css('display', 'inline');
//
//         } else {
//             fieldset.css('display', 'none');
//             companyNumber.removeAttr('style');
//         }
//     }
//
//     function companyNumberCheck() {
//
//         let num = Number(companyNumber.val());
//
//         if(company[0].checked && num < 1000 || num > 9999) {
//             companyNumber.removeAttr('style');
//             companyNumber.css('border-color', 'red');
//         } else {
//             companyNumber.removeAttr('style');
//             companyNumber.css('border', 'none');
//         }
//     }
//
//     function passwordCheck() {
//
//         let reg = /^[\w]{5,15}$/;
//         let isOk = reg.test(passwordInput.val());
//
//         if (!isOk) {
//             setBorderToRed(passwordInput);
//         } else {
//             removeBorderRed(passwordInput);
//         }
//     }
//
//     function confirmPasswordCheck() {
//
//         let reg = /^[\w]{5,15}$/g;
//         let isOk = reg.test(confirmPasswordInput.val());
//
//         if (!isOk) {
//             setBorderToRed(confirmPasswordInput);
//         } else {
//             removeBorderRed(confirmPasswordInput);
//         }
//     }
//
//     function emailCheck() {
//
//         let reg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
//         let isOk = reg.test(emailInput.val());
//
//         if (!isOk) {
//             setBorderToRed(emailInput);
//         } else {
//             removeBorderRed(emailInput);
//         }
//     }
//
//     function usernameCheck() {
//
//         let reg = /^([a-zA-Z0-9]{3,20})$/;
//         let isOk = reg.test(usernameInput.val());
//
//         if (!isOk) {
//             setBorderToRed(usernameInput);
//         } else {
//             removeBorderRed(usernameInput);
//         }
//
//     }
//
//     function setBorderToRed(inputField) {
//
//         $(inputField).removeAttr('style');
//         $(inputField).css('border-color', 'red');
//     }
//
//     function removeBorderRed(inputField) {
//
//         $(inputField).removeAttr('style');
//         $(inputField).css('border', 'none');
//     }
// }

function validate() {
    $('#submit').on('click', validateEntries);
    $('#company').on('change', showHideCompanyNumber);

    function validateEntries(event){
        event.preventDefault();
        let validFields = true;

        // List all the patterns together
        let usernamePattern = /^[a-zA-Z0-9]{3,20}$/g;
        let passwordPattern = /^\w{5,15}$/g;
        let emailPattern = /\w*@\w*\.\w*/g;
        let companyPattern = /^[1-9][0-9]{3}$/g;

        if ($('#password').val() != $('#confirm-password').val() || !$('#password').val().match(passwordPattern) || !$('#confirm-password').val().match(passwordPattern)){
            validFields = false;
            $('#password').css('border', 'solid red');
            $('#confirm-password').css('border', 'solid red');
        }
        else {
            $('#password').css('border', 'none');
            $('#confirm-password').css('border', 'none');
        }

        // Check all the elements with their regex pattern
        inputCheck($('#username'), usernamePattern);
        inputCheck($('#email'), emailPattern);

        if ($('#company').is(":checked"))
            inputCheck($('#companyNumber'), companyPattern)


        if (validFields)
            $('#valid').css('display', 'inline');
        else
            $('#valid').css('display', 'none');

        function inputCheck(jQueryElement, regexPattern){
            if (!jQueryElement.val().match(regexPattern) || jQueryElement.val() == null){
                validFields = false;
                jQueryElement.css('border', 'solid red');
            }
            else
                jQueryElement.css('border', 'none');
        }
    }

    function showHideCompanyNumber(){
        if ($(this).is(":checked"))
            $('#companyInfo').css('display', 'inline');
        else
            $('#companyInfo').css('display', 'none');
    }
}