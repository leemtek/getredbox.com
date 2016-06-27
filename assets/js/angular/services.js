(function() {
    angular.module("getredbox")
        .factory("factorySendEmail", [function() {
            var $facSendEmail = [];

            // Store all contents provided by guest.
            $facSendEmail.contact = {
                "name": "Duane Leem",
                "email": "Duane@LeemTek.com",
                "message": "Test email from: " + fnDateToday()
            }; // contact

            function fnDateToday() {
                return new Date().toDateString();
            } // fnDateToday()

            return $facSendEmail;
        }]) // .factory("factorySendEmail")
    ; // angular.module("getredbox")
})(); // function()
