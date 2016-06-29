(function() {
    angular.module("getredbox")
        .factory("factorySendEmail", [function() {
            var $facSendEmail = [];

            // Store all contents provided by guest.
            $facSendEmail.contact = {
                "name": null,
                "email": null,
                "message": null
            }; // contact

            // Used to add a proper date string (testing purposes).
            function fnDateToday() {
                return new Date().toDateString();
            } // fnDateToday()

            return $facSendEmail;
        }]) // .factory("factorySendEmail")
    ; // angular.module("getredbox")
})(); // function()
