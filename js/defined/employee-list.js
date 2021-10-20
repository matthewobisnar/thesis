(function () {
    
    $(document).ready(function() {
        loadEmployee();
    });

    $(document).on('click', '#editEmployee', function(e) {
        var data = $(this).attr('data-info');
    
        $("#emp_id").val(data);
        $("#firstName").val($('#tfname_'+ data).html());
        $("#lastName").val($('#tlname_' + data).html());
        $("#mobileNumber").val($('#tnumber_'+ data).html());
        $("#inputEmail").val($('#temail_'+ data).html());

        $('#AddEmployee').html('Update');
        
    });

    $(document).on('click','#resetEmployee',function (){
        $('#firstName').val("");
        $('#lastName').val("");
        $('#inputEmail').val("");
        $('#mobileNumber').val("");
        $("#emp_id").val(""); 
        $('#AddEmployee').html('Submit');
    });

    $(document).on('click','#deleteEmployee',function (e) {
        Swal.fire({
            title: 'Are you sure you want to delete employee with ID '+ $(e.currentTarget).attr("data-info") +'?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
        }).then(function (result) {
            if (result.isConfirmed) { 
                deleteEmployee({
                    emp_id: $(e.currentTarget).attr("data-info")
                });
            }
        });
    });

    $(document).on('click','#AddEmployee',function() {
        

        if ($("#emp_id").val() != '') {

            var data = $("#emp_id").val();

            var payload = {
                emp_id: data,
                fname: $("#firstName").val(),
                lname: $("#lastName").val(),
                mobile: $("#mobileNumber").val(),
                email: $("#inputEmail").val()
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

        } else {

            var data = {
                fname : $('#firstName').val(),
                lname : $('#lastName').val(),
                email : $('#inputEmail').val(),
                mobile : $('#mobileNumber').val()
            };

            addEmployee(data);   
        }
    });

    function loadEmployee()
    {
        ajaxRequest(null,
            {
            url: get_employee_list,
            type: "GET",
            headers: assignAuthHeader(),
            dataType: "json",
        },
        function (response_data) {
            if (response_data.status == true) {
                if (response_data.content.count != 0) {
                    generateTemplateEmployee("#employee-list-data", response_data.content.employees);
                }
            }
        });
    }



    function addEmployee(data)
    {
        ajaxRequest(data,
            {
            url: create_employee_api,
            type: "POST",
            headers: assignAuthHeader(),
            dataType: "json",
        },
        function (response_data) {
            if (response_data.status == true) {
                Swal.fire('Employee is successfully added!', '', 'success')
                .then(function (result) {
                    loadEmployee();
                    $('#firstName').val("");
                    $('#lastName').val("");
                    $('#inputEmail').val("");
                    $('#mobileNumber').val("");
                    $("#emp_id").val(""); 
                });
            } else {
                Swal.fire('Something went wrong', response_data.error.error, 'error');
            }
        });
    }


    function deleteEmployee(data)
    {
        ajaxRequest(data,
            {
            url: delete_employee_api,
            type: "POST",
            headers: assignAuthHeader(),
            dataType: "json"
        },
        function (response_data) {
            if (response_data.status == true) {
                Swal.fire('Employee is successfully deleted!', '', 'success')
                .then(function (result) {
                    loadEmployee();
                });
            } else {
                Swal.fire('Something went wrong',response_data.error.error, 'error');
            }
        });
    }

    function updateEmployee (data)
    {
        ajaxRequest(data,
            {
                url: update_employee_api,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json"
            },
        function (response_data) {
            if (response_data.status == true) {
                Swal.fire('Employee is successfully updated!', '', 'success');
                loadEmployee();
                $('#AddEmployee').html('Submit');
                $('#firstName').val("");
                $('#lastName').val("");
                $('#inputEmail').val("");
                $('#mobileNumber').val("");
                $("#emp_id").val(""); 
            } else {
                Swal.fire('Something went wrong',response_data.error.error, 'error');
            }
        });
    }

    
})()