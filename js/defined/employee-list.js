(function () {
    
    $(document).ready(function() {
        loadEmployee();
    });

    $(document).on('click', '#editEmployee', function(){
        
    });

    $(document).on('click','#resetEmployee',function (){
        $('#firstName').val("");
        $('#lastName').val("");
        $('#inputEmail').val("");
        $('#mobileNumber').val("");
    });

    $(document).on('click','#deleteEmployee',function (e){
        Swal.fire({
            title: 'Are you sure you want to delete employee with ID '+ $(e.currentTarget).attr("data-info") +'?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
        }).then((result) => {
            if (result.isConfirmed) { 
                deleteEmployee({
                    emp_id: $(e.currentTarget).attr("data-info")
                });
            }
        });
    });

    $(document).on('click','#AddEmployee',function() {
        
        var data = {
            fname : $('#firstName').val(),
            lname : $('#lastName').val(),
            email : $('#inputEmail').val(),
            mobile : $('#mobileNumber').val()
        };

        addEmployee(data);
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
                .then((result) => {
                    loadEmployee();
                    $('#firstName').val("");
                    $('#lastName').val("");
                    $('#inputEmail').val("");
                    $('#mobileNumber').val("");
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
            dataType: "json",
        },
        function (response_data) {
            if (response_data.status == true) {
                Swal.fire('Employee is successfully deleted!', '', 'success')
                .then((result) => {
                    loadEmployee();
                });
            } else {
                Swal.fire('Something went wrong',response_data.error.error, 'error');
            }
        });
    }

    function updateEmployee()
    {

    }

    
})()