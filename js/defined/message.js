(function () {
    $(document).ready(function(e){
        loadEmployee();
        loadSentMessage();

        $('#view-message').on('show.bs.modal', function(e) { 
            getSentMessageDetail({
                sent_message_id: $(e.relatedTarget).attr("data-info")
            });
        });

        $(document).on("click", "#done-modal", function(e) { 
            $('.modal').modal('hide');
        });

        $(document).on('click', '#editEmployee', function(e) {
            var data = $(this).attr('data-info');
        
            $("#firstName").val($('#tfname_'+ data).html());
            $("#lastName").val($('#tlname_' + data).html());
            $("#mobileNumber").val($('#tnumber_'+ data).html());
            $("#inputEmail").val($('#temail_'+ data).html());

            var payload = {
                emp_id: data,
                fname: $("#firstName").val($('#tfname_'+ data).html()),
                lanme: $("#lastName").val($('#tlname_' + data).html()),
                mobile: $("#mobileNumber").val($('#tnumber_'+ data).html()),
                email: $("#inputEmail").val($('#temail_'+ data).html())
            };

            Swal.fire({
                title: 'Are you sure you want to update this employee?',
                showCancelButton: true,
                confirmButtonText: 'Update',
            }).then(function (result) {
                if (result.isConfirmed) {  
                    updateEmployee(payload);        
                }
            });
            

        });

        $(document).on("click", "#createMessage", function(e) { 
            
            var $selected = [];

            $('#employee-contacts input:checked').each(function() {
                $selected.push($(this).val());
            });

            if ($selected.length == 0) {
                Swal.fire('Something went wrong', 'Please Select atleast 1 number.', 'error');
                return;
            }

            if ($("#messageArea").val() == '') {
                Swal.fire('Something went wrong', '', 'error');
                return;
            }

            $("#createMessage").prop("disabled", true);
            createMessage({
                message_content: $("#messageArea").val(),
                message_numbers: $selected
            });
            $("#createMessage").prop("disabled", false);

        });

    });

    $(document).on("change", "#selectallContact", function(e) { 
        $('#employee-contacts input:checkbox').each(function() {
            $(this).prop('checked', e.currentTarget.checked);
        });
    });

    $(document).on("change", "#selectallSentMessage", function(e) { 
        $('#sent-messages input:checkbox').each(function() {
            $(this).prop('checked', e.currentTarget.checked);
        });
    });


    $(document).on("click", "#selectedSentMessage", function(e) { 

        var selected = [];
        $('#sent-messages input:checked').each(function() {
            selected.push($(this).val());
        });

        if (selected.length > 0) {

            Swal.fire({
                title: 'Are you sure you want to delete these Message(s) ('+selected.length+')?',
                showCancelButton: true,
                confirmButtonText: 'Delete',
            }).then(function (result) {
                if (result.isConfirmed) { 
                    deleteSentMessage({
                        sent_message_id: selected
                    });
                } 
            });
        }
    });

    function loadEmployee()
    {
        ajaxRequest(null,
            {
                url: get_active_employee_list,
                type: "GET",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    if (response_data.content.employees.length > 0) {
                        generateContactMessage('#employee-contacts', response_data.content.employees);
                    }
                }
            });
    }

    function loadSentMessage()
    {
        generateEmptyTemplate('#sent-messages');

        ajaxRequest(null,
        {
            url: get_sent_message,
            type: "GET",
            headers: assignAuthHeader(),
            dataType: "json",
        },
        function (response_data) {
            if (response_data.status == true) {
                if (response_data.content != null) {
                    if (response_data.content.length > 0) {
                        generateTemplateSentMessage('#sent-messages', response_data.content);
                    }
                }
            }
        });
    }

    function deleteSentMessage(data)
    {
        ajaxRequest(data,
            {
                url: delete_sent_message,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    Swal.fire('Message is successfully removed!', '', 'success');
                    loadSentMessage();
                } else {
                    Swal.fire('Something went wrong', response_data.error.error, 'error');
                }
            });
    }

    function getSentMessageDetail(data)
    {

        ajaxRequest(data,
            {
                url: get_sent_message_detail,
                type: "GET",
                headers: assignAuthHeader(),
                dataType: "json",
            },
        function (response_data) {
            if (response_data.status == true) {
                if (response_data.content.length > 0) {
                    generateTemplateMessageDetail("#view-message-detail-modal", response_data.content);
                }
            }
        });
    }


    function createMessage(data)
    {
        ajaxRequest(data,
            {
                url: create_message_api,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json",
            },
        function (response_data) {
            if (response_data.status == true) {
                Swal.fire('Message is successfully sent!', '', 'success');
                loadSentMessage();
            }
        });
    }

    function updateEmployee (data)
    {
        ajaxRequest(data,
            {
                url: update_message_api,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json",
            },
        function (response_data) {
            if (response_data.status == true) {
                Swal.fire('Employee is successfully updated!', '', 'success');
                loadEmployee();
            }
        });
    }
})()