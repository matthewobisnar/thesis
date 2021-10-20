(function () {
    $(document).ready(function(e){
        loadEmployee();
        loadSentMessage();

        $('#view-message').on('show.bs.modal', function(e) { 

            console.log($(e.relatedTarget).attr("data-info"));
            getSentMessageDetail({
                sent_message_id: $(e.relatedTarget).attr("data-info")
            });
        });

        $(document).on("click", "#done-modal", function(e) { 
            $('.modal').modal('hide');
        });

    });

    $(document).on("change","#selectallContact", function(e) { 
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
            }).then((result) => {
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
})()