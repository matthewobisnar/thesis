(function () {
    $(document).ready(function(e){

        $(document).on("click", "#login", function(e) { 

            var data = {
                username: $('#email').val(),
                password: $('#password').val()
            };


            if (data.email == '') {
                Swal.fire('Something went wrong!', 'Email must not be empty!', 'error');
                return;
            }

            if (data.password == '') {
                Swal.fire('Something went wrong!', 'Password must not be empty!', 'error');
                return;
            }
            login(data);
        });

    });

    function login(data)
    {
        ajaxRequest(data,
            {
                url: login_api,
                type: "GET",
                dataType: "json",
            },
            function (response_data) {
                // setToLocalStorage('content', response_data.content);
                if (response_data.status) {
                    setToLocalStorage(response_data.content, function () {
                        window.location.replace("dashboard.php");
                    });
                } else {
                    Swal.fire('Something went wrong', 'Invalid username/password!', 'error');
                }
            }
        );
    }

})();