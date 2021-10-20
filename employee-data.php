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
        <div class="employee-section custom-m my-5">
            <div class="container-lg">
                <div class="row">
                    <div class="col-md-8">
                        <div class="card shadow">
                            <table class="table">
                                <thead>
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Full Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Date joined</th>
                                    <th scope="col">Remove</th>
                                  </tr>
                                </thead>
                                <tbody id="employee-list-data"></tbody>
                              </table>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="card rounded shadow">
                            <div class="card-header text-center py-3">
                                Register Employee
                            </div>
                            <div class="card-body">
                                  <div class="mb-3">
                                      <label for="firstName" class="form-label">First Name: *</label>
                                      <input type="text" class="form-control form-control-lg" id="firstName">
                                  </div>
                                  <div class="mb-3">
                                      <label for="lastName" class="form-label">Last Name: *</label>
                                      <input type="text" class="form-control form-control-lg" id="lastName">
                                  </div>
                                  <div class="mb-3">
                                      <label for="mobileNumber" class="form-label">Mobile Number: *</label>
                                      <input type="text" class="form-control form-control-lg" id="mobileNumber">
                                  </div>
                                  <div class="mb-3">
                                    <label for="inputEmail" class="form-label">Email address: *</label>
                                    <input type="email" class="form-control form-control-lg" id="inputEmail" aria-describedby="emailHelp">
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                  </div>
                                  <button type="button" id="resetEmployee" class="btn btn-lg button-reset pending_header2">Reset</button>
                                  <button type="button" id="AddEmployee" class="btn btn-lg button-save approved">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<?php
require_once __DIR__ . "/include/navigation.inc.php";
require_once __DIR__ . "/include/script.inc.php";
?>
</html>