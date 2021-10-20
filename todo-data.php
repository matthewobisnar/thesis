<?php require_once __DIR__ ."/include/header.inc.php";?>
</head>
    <body>
        <div class="navigation">
            <nav class="navbar navbar-light navbar-expand-lg pending_header">
                <div class="container-fluid">
                  <a class="navbar-brand" class="text-white" href="#">DASHBOARD</a>
                </div>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <button class="nav-link btn btn-sm text-white" id="logout">
                                <span class="material-icons material-icons-outlined">
                                    logout
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>
              </nav>
        </div>
        <div id="content">
            <div class="button-pos mt-5">
                <button type="add" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#todo">Create New +</button>

                <!-- type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap" -->
            </div>
        </div>

        <div class="content-section custom-m">
            <div class="container-md">
                <div class="row row-cols-1 row-cols-sm-1 row-cols-lg-2 g-3">
                    <div class="col">
    
                        <div class="list-group">   
                            <div class="card shadow-sm">
                                <div class="card-header pending_header p-2">
                                    <span class="fw-light text-light float-start mt-2 ps-3">
                                        In Progress 
                                    </span>
                                    <div class="dropdown">
                                    <a class="btn text-white material-icons float-end" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    more_vert
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><div class="form-check form-switch ms-3">
                                        <input class="form-check-input" type="checkbox" id="selectall-inprogress">
                                        <label class="form-check-label" for="flexSwitchCheckChecked">Select All</label>
                                        </div></li>
                                        <li><input class="dropdown-item" type="submit" id="delete-todoList-inprogress" name='but_delete' value="Remove"></li>   
                                    </ul>
                                    </div>
                                </div>
                                <div class="card-body mainlist-todo" id="todoContent-0"></div>
                            </div>
                        </div>
    
                    </div>
    
                    <div class="col">
                        <div class="list-group">
                            <div class="card shadow-sm">
                                <div class="card-header approved_header p-2">
                                    <span class="fw-light text-light float-start mt-2 ps-3">
                                        Completed 
                                    </span>
                                    <div class="dropdown">
                                    <a class="btn text-white material-icons float-end" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    more_vert
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><div class="form-check form-switch ms-3">
                                        <input class="form-check-input" type="checkbox" id="selectall-completed">
                                        <label class="form-check-label" for="flexSwitchCheckChecked">Select All</label>
                                        </div></li>
                                        <li><input class="dropdown-item" type="button" id="delete-todoList-completed" name='but_delete' value="Remove"></li> 
                                    </ul>
                                    </div>
                                </div>
                                <div class="card-body mainlist-todo" id="todoContent-1">
                                    <!-- <label class="list-group-item d-flex">
                                        <div class="flex-fill d-flex gap-3">
                                        <input class="form-check-input checkbox mt-3" type="checkbox" name="delete" value="2" style="font-size: 1.00em;" aria-label="...">
                                        <span class="pt-1 form-checked-content">
                                            <strong><a href="" class="text-decoration-none" data-bs-toggle="modal" data-bs-target="#update_todo">project A</a></strong>
                                            <small class="d-block mt-1">
                                                Due Date Observation
                                                <span class="material-icons fs-5 float-start pe-2 pending">event</span>
                                                Oct 16 2021 - 11:51pm (Saturday)                                                                                
                                            </small>
                                        </span>
                                        </div>
                                    </label> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<?php
require_once __DIR__ ."/include/view-project.modal.inc.php";
require_once __DIR__ . "/include/create-todo.inc.php";
require_once __DIR__ . "/include/navigation.inc.php";
require_once __DIR__ . "/include/script.inc.php";
?>
</html>