(function () {

    $(document).ready(function() {
        loadDashboard();
        requestApiList();

        $(document).on('click', "#copyApprovedRequest", function (e) {

        //     var text = 'fullname: '+ $("#request_modal-1 #fullName").html() + '\r\n' +
        //     'Email: ' + $("#request_modal-1 #email").html() + '\r\n' +
        //     'Mobile Number: ' + $("#request_modal-1 #mobileNumber").html() + '\r\n' +
        //     'Date Created: '+ $("#request_modal-1 #dateCreated").html() + '\r\n' +
        //     "Request Details" + $("#request_modal-1 #requestDetails").html();

        //     $val = $("#clipboard").val(text).selected();
        //   var successful = document.execCommand('copy');

            copyDataApprovedRequest();
        });

        function loadDashboard () {

            generateEmptyTemplate('#type-request-0');
            generateEmptyTemplate('#type-request-1');
            generateEmptyTemplate('#type-request-2');

            ajaxRequest(null,
                {
                url: statistics_api,
                type: "GET",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
    
                    // Employee status
                    if (typeof response_data.content.employee.length == "undefined") {
                        for (key in response_data.content.employee) {
                            genCountTemplate("#"+ key, response_data.content.employee[key]);
                        }
                    }
    
                    // todo
                    if (typeof response_data.content.todo.length == "undefined") {
                        for (key in response_data.content.todo) {
                            genCountTemplate("#"+ key, response_data.content.todo[key]);
                        }
                    }
    
                    // Request
                    if (typeof response_data.content.customer.length == "undefined") {
                        for (key in response_data.content.customer) {
                            genCountTemplate("#"+ key, response_data.content.customer[key]);
                        }
                    }
    
    
                }
            }
        );
    }

    function requestApiList()
    {
        // Request API
        ajaxRequest(null,
            {
                url: dashboard_api,
                type: "GET",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    if (typeof response_data.content.length == "undefined") {
                        for (key in response_data.content) { 
                            generateRequestTemplate("#type-request-"+key,  response_data.content[key], key);
                        }
                    }
                }
            }
        );

    }

    $('#request_modal-0').on('show.bs.modal', function(e) { 
        ajaxRequest(
            {
                customer_id: $(e.relatedTarget).attr("data-info")
            },
            {
                url: dashboard_detail,
                type: "GET",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    generateModelTemplateDashboard("#request_modal-0",response_data.content);
                }
            }
        );
    });

    $('#request_modal-1').on('show.bs.modal', function(e) { 
        ajaxRequest(
            {
                customer_id: $(e.relatedTarget).attr("data-info")
            },
            {
                url: dashboard_detail,
                type: "GET",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    generateModelTemplateDashboard("#request_modal-1",response_data.content);
                }
            }
        );
    });


    $('#request_modal-2').on('show.bs.modal', function(e) { 
        ajaxRequest(
            {
                customer_id: $(e.relatedTarget).attr("data-info")
            },
            {
                url: dashboard_detail,
                type: "GET",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    generateModelTemplateDashboard("#request_modal-2", response_data.content);
                }
            }
        );
    });


    $(document).on("click","#deleteRequest", function(e) {
        Swal.fire({
            title: 'Are you sure you want to delete this item?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
        }).then((result) => {
            if (result.isConfirmed) { 
                ajaxRequest(
                    {
                        customer_id: $(e.currentTarget).attr('data-id')
                    },
                    {
                        url: dashboad_customer_del_api,
                        type: "POST",
                        headers: assignAuthHeader(),
                        dataType: "json",
                    },
                    function (response_data) {
                        if (response_data.status == true) {
                            /* Read more about isConfirmed, isDenied below */
                                Swal.fire('Deleted!', '', 'success');
                                loadDashboard();
                                requestApiList();
                        }
                    }
                );
            }
        });
    });

    $(document).on("click", "#approved", function(e) {
        e.preventDefault();
        var $status = 1;
        var $id = $(e.currentTarget).attr('data-id');
        updateCustomer($status, $id, "Approved");
    });

    $(document).on("click", "#turndown", function(e) {
        e.preventDefault();
        var $status = 2;
        var $id = $(e.currentTarget).attr('data-id');
        updateCustomer($status, $id, "Turndown");
    });

   function updateCustomer($status,$id, $description) {
        ajaxRequest(
            {
                status: $status,
                customer_id: $id
            },
            {
                url: dashboad_customer_update_api,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    /* Read more about isConfirmed, isDenied below */
                        Swal.fire($description + '!', '', 'success')
                        .then((result) => {
                            loadDashboard();
                            requestApiList();
                            $('.modal').modal('hide');
                        });
                }
            }
        );

    }

});

})();