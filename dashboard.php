<?php require_once __DIR__ . "/include/header.inc.php";?>
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
                            <button class="nav-link btn btn-sm text-white" type="button" id="logout">
                                <span class="material-icons material-icons-outlined">
                                    logout
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>
              </nav>
        </div>
        <div class="upper-section my-5">
            <div class="container-md">
                <div class="row row-cols-2 row-cols-sm-4 row-cols-md-4 g-3">

                    <div class="col">
                        <div class="card shadow rounded">
                            <div class="pending_header rounded text-light p-4 pe-4">
                                <h1 class="material-icons fs-1 float-start">person</h1>
                                    <p class="fw-bold text-end fs-4 mb-0" id="emp_status_0">0</p>
                                    <h6 class="card-text float-end fw-light">Employees - <small class="opacity-75">Active</small></h6>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card shadow rounded">
                            <div class="pending_header rounded text-light p-4 pe-4">
                                <div class="pending_header rounded text-light p-4 pe-4">
                                    <h1 class="material-icons fs-1 float-start">person_off</h1>
                                    <p class="fw-bold text-end fs-4 mb-0" id="emp_status_1">0</p>
                                    <h6 class="card-text float-end fw-light">Employees - <small class="opacity-75 fw-light">Inactive</small></h6>
                                </div>        
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card shadow rounded">
                            <div class="pending_header rounded text-light p-4 pe-4">
                                <h1 class="material-icons fs-1 float-start">pending_actions</h1>
                                <p class="fw-bold text-end fs-4 mb-0" id="todo_status_0">0<p><h6 class="card-text float-end fw-light">Ongoing Projects </h6>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card shadow rounded">
                            <div class="pending_header rounded text-light p-4 pe-4">
                                <h1 class="material-icons fs-1 float-start">assignment_turned_in</h1>
                                <p class="fw-bold text-end fs-4 mb-0" id="todo_status_1">0</p>
                                <h6 class="card-text float-end fw-light">Completed Projects </h6>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="center-section custom-m">
            <div class="container-md">
                <div class="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-3">

                        <div class="accordion" id="accordionExample0">
                            <div class="accordion-item">
                              <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button pending_header2 text-light fw-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseZero" aria-expanded="true" aria-controls="collapseOne">
                                  Pending Requests
                                  <small class="badge pending_header rounded-pill ms-1" id="customer_status_0">0</small>
                                </button>
                              </h2>
                              <div id="collapseZero" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample0">
                                <div class="accordion-body">
                                    <div class="list-group text-start" id="type-request-0">
                                    </div>
                                </div>
                              </div>
                            </div>
                        </div>

                        <div class="accordion" id="accordionExample1">
                            <div class="accordion-item">
                              <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button pending_header2 text-light fw-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Approved Requests
                                    <small class="badge pending_header rounded-pill ms-1" id="customer_status_1">0</small>
                                  </button>
                              </h2>
                              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample1">
                                <div class="accordion-body">
                                    <div class="list-group text-start" id="type-request-1">
                                    </div>
                                </div>
                              </div>
                            </div>
                        </div>
                          
                        <div class="accordion" id="accordionExample2">
                            <div class="accordion-item">
                              <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button pending_header2 text-light fw-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                                    Turned Downs
                                    <small class="badge pending_header rounded-pill ms-1" id="customer_status_2">0</small>
                                </button>
                              </h2>
                              <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample2">
                                <div class="accordion-body">
                                    <div class="list-group text-start" id="type-request-2">
                                    </div>
                                </div>
                              </div>
                            </div>
                        </div>

                </div>
            </div>
        </div>
<?php 
require_once __DIR__ . "/include/navigation.inc.php";
require_once __DIR__ . "/include/pending-progress.modal.inc.php";
require_once __DIR__ . "/include/approved-requeset.modal.inc.php";
require_once __DIR__ . "/include/turned-down.modal.inc.php";
require_once __DIR__ . "/include/script.inc.php"; 
?>
</body>
</html>