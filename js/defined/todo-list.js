(function () {

    $(document).on('click', '#creteEmployee', createTodoList);
    $(document).ready(function() {loadTodoList();});

    $(document).on("click","#todo-done", function(e) { 
        $('.modal').modal('hide');
    });

    $(document).on("click", "#todo-update", function(e) { 
        updateProject({
            todo_id :$(this).attr('data-info'),
            status: 1
        });
    });
    // selectall-inprogress

    $(document).on("change","#selectall-inprogress", function(e) { 
        $('#todoContent-0 input:checkbox').each(function() {
            $(this).prop('checked', e.currentTarget.checked);
        });

    });

    $(document).on("change", "#selectall-completed", function(e) { 
        $('#todoContent-1 input:checkbox').each(function() {
            $(this).prop('checked', e.currentTarget.checked);
        });
    });

    $(document).on("click","#delete-todoList-inprogress", function(e) { 

        var selected = [];
        $('#todoContent-0 input:checked').each(function() {
            selected.push($(this).val());
        });

        if (selected.length > 0) {

            Swal.fire({
                title: 'Are you sure you want to delete these item(s) ('+selected.length+')?',
                showCancelButton: true,
                confirmButtonText: 'Delete',
            }).then((result) => {
                if (result.isConfirmed) { 
                    deleteProject({
                        todo_id: selected
                    });
                } 
            });
        }

    });

    $(document).on("click","#delete-todoList-completed", function(e) { 

        var selected = [];
        $('#todoContent-1 input:checked').each(function() {
            selected.push($(this).val());
        });
    
        if (selected.length > 0) {
            Swal.fire({
                title: 'Are you sure you want to delete these item(s) ('+selected.length+')?',
                showCancelButton: true,
                confirmButtonText: 'Delete',
            }).then((result) => {
                if (result.isConfirmed) { 
                    deleteProject({
                        todo_id: selected
                    });
                } 
            });
        }

    });

    function loadTodoList()
    {
        generateEmptyTemplate("#todoContent-0");
        generateEmptyTemplate("#todoContent-1");

        ajaxRequest(null,
            {
                url: get_todo_list,
                type: "GET",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    if (response_data.content.length > 0 || typeof response_data.content.length == 'undefined') {
                        for (key in response_data.content) {
                            generateTodoTemplate('#todoContent-'+key, response_data.content[key], key);
                        }
                    }
                }
            }
        );
    }

    function createTodoList()
    {

        var data = {
            title: $('#project-name').val(),
            description: $('#project-description').val(),
            deadline: $('#project-date').val(),
        };

        if (data.deadline == '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Due date must not be empty!',
            });

            return;
        }

        ajaxRequest(
            data,
            {
                url: create_todo_list,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    Swal.fire('Todo is successfully added!', '', 'success')
                    .then((result) => {
                        $('.modal').modal('hide');
                        loadTodoList();
                        $('#project-name').val("");
                        $('#project-description').val("");
                        $('#project-date').val("");
                    });
                } else {
                    Swal.fire('Somethin went wrong', response_data.error.error, 'error');
                }
            }
        );
    }

    $(document).on('show.bs.modal','#update_todo', function (e) {
        fetchIndividualProject(
            {
                todo_id:  $(e.relatedTarget).attr("data-info")
            }
        );
    });

    function fetchIndividualProject (data)
    {
        ajaxRequest(
            data,
            {
                url: get_todo_detail,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    if (response_data.content.length > 0) {
                        getTodoModalTemplate("#todo-project-modal", response_data.content[0])
                    }
                }
            }
        );
    }

    function updateProject(data)
    {
        ajaxRequest(
            data,
            {
                url: update_todo_by_id,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    Swal.fire('Project is successfully updated!', '', 'success')
                    .then((result) => {
                        $('.modal').modal('hide');
                        loadTodoList();
                    });
                } else {
                    Swal.fire('Somethin went wrong', response_data.error.error, 'error');
                }
            }
        );
    }


    function deleteProject(data)
    {

        ajaxRequest(
            data,
            {
                url: delete_todo_by_id,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    Swal.fire('Project is successfully deleted!', '', 'success')
                    .then((result) => {
                        $('.modal').modal('hide');
                        loadTodoList();
                    });
                } else {
                    Swal.fire('Cannot delete the project. Please check the data!', '', 'error');
                }
            }
        );
    }

})();