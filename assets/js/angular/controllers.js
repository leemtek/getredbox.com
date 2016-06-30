(function() {
    angular.module("getredbox")
        .controller("ctrlSendEmail", ["$scope", "$http", "factorySendEmail", "vcRecaptchaService", function($scope, $http, factorySendEmail, vcRecaptchaService){
            $scope.contactDetails = factorySendEmail.contact;

            /* ==================================================================
                Form Functions
            ==================================================================*/
            $scope.fnClearForm = function() {
                $scope.contactDetails = {
                    "name": null,
                    "email": null,
                    "message": null
                } // contact

                // Reset the Send button.
                $('#submit').text("Send");
                $('#submit').removeClass("btn-success");
                $('#submit').removeClass("btn-danger");
                $('#submit').addClass("btn-default");
            }; // clearForm()

            $scope.fnSendForm = function() {
                if(vcRecaptchaService.getResponse() === "") { //if string is empty
                    $("#submit").text("reCaptcha Problem. Please fix.");
                } else {
                    // add response from reCAPTCHA
                    $scope.contactDetails.googleResponse = vcRecaptchaService.getResponse();

                    // Put up some sort of loading sign.
                    $('#submit').text('Please Wait...');
                    $('#submit').removeClass('btn-default').addClass('btn-info');
                    $("#submit").prop('disabled', true);

                    // send POST data
                    $http.post("https://www.leemtek.com/forms/getredbox", $scope.contactDetails)
                        .then(function successCallback(response) {
                            if(response.data.sent === "yes") {
                                // update submit button to indicate success
                                factorySendEmail.fnSendSuccessDOM();
                            } else {
                                // update submit button to indicate an error
                                factorySendEmail.fnSendErrorDOM();
                            } // if
                        }, function errorCallback(response) {
                            // update submit button to indicate an error
                            factorySendEmail.fnSendErrorDOM();
                        }) // .then
                    ; // $http.post
                } // if
            }; // fnSendForm()
        }]) // .controller("ctrlSendEmail")
    ; // angular.module("getredbox")
})(); // function()
