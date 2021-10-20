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
        <!-- <div id="content">
            <ul class="topnav">
                <li>
                    <a class="active" href="#home">MESSAGE</a>
                </li>
            </ul>
        </div> -->

        <div class="message-section custom-m">
            <div class="container-md">
                <div class="container mt-5 mb-5">
                    <div class="row">
                      <!--------------------------Contacts------------------------------------------->
                      <div class="col-lg-5">
                         
            
            
                        <!--------------------------Contact List------------------------------------------->
                          <div class="card rounded-3">
                            <span href="#" class="pending_header text-light rounded-top p-2">
                            <span class="fw-light text-light float-start mt-1 ps-3">
                                Contacts
                            </span>
                            <div class="form-check form-switch ms-3 float-end mt-1">
                                <input class="form-check-input" type="checkbox" id="selectallContact">
                                <label class="form-check-label" for="flexSwitchCheckChecked"></label>
                                </div>
                          </span>
                            <div class="card-body">
                              <div class="card-body scrollarea p-0">
                              <div class="list-group" id="employee-contacts">
                           
                                <!-- <label class="list-group-item d-flex gap-3">
                                  <input class="form-check-input flex-shrink-0" type="checkbox" value="" style="font-size: 1.375em;">
                                  <span class="pt-1 form-checked-content">
                                    <strong>John Doe</strong>
                                    <small class="d-block text-muted">
                                        09067722502
                                    </small>
                                  </span>
                                </label> -->
 
                              </div>
                              </div>
                            </div>
                          </div>
                        <!--------------------------End Contact List------------------------------------------->
            
            
            
                           <!--------------------------Create Message------------------------------------------->
                            <form>
                              <div class="card mt-3 mb-3 rounded-3">
                                  <div class="card-body">
                                    <h6>Create Message</h6>
                                    <textarea class="form-control" rows="6" name="message" placeholder="Input text here"></textarea>
                                  </div>
            
                                  <div class="d-grid gap-3 col-11  mx-auto mb-3">
                                    <button class="btn btn-outline-primary" type="submit" name="sent">Submit</button>
                                  </div>
                              </div>
                            </form>
                          <!--------------------------End Create Message------------------------------------------->
            
                      </div>
                      <!--------------------------End Contacts------------------------------------------->
            
            
            
                    
                      <div class="col-lg-7">
            
                        <!--------------------------Sent Message------------------------------------------->            
                        <div class="d-flex flex-column bg-white rounded-3">
                          <span href="#" class="pending_header text-light rounded-top pt-1">
                            <span class="fw-light text-light float-start mt-2 ps-3">
                                Sent Messages
                            </span>
                            <div class="dropdown">
                            <a class="btn text-white material-icons float-end fs-5" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            more_vert
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><div class="form-check form-switch ms-3">
                                <input class="form-check-input" type="checkbox" id="selectallSentMessage">
                                <label class="form-check-label" for="flexSwitchCheckChecked">Select All</label>
                                </div></li>
                                <li><button class="dropdown-item btn" type="button" id="selectedSentMessage">Remove</button></li>   
                            </ul>
                            </div>
                          </span>
                          <div class="card-body">
                            <!------------------------------->
                            <div class="list-group" id="sent-messages">
                              <!-- <label class="list-group-item d-flex">
                                  <div class="flex-fill d-flex gap-3">
                                  <input class="form-check-input checkbox2 mt-3" type="checkbox" name="" value="" style="font-size: 1.00em;" aria-label="...">
                                  <span class="pt-1 form-checked-content">
                                      <strong><a href="" class="text-decoration-none text-dark" data-bs-toggle="modal" data-bs-target="#view-message">Andre Preciado<small class="opacity-50 text-secondary"> . now</small></a></strong>
                                      <small class="d-block text-muted mt-1">
                                          Sample
                                      </small>
                                  </span>
                                  </div>   
                                  <div class="flex-fill align-items-center">
                                      <small class="float-end opacity-50">Oct 9</small>
                                  </div>
                              </label> -->
                            </div>
            
                            <!------------------------------->
                          </div>
                        </div>
                        <!--------------------------End Sent Message------------------------------------------->
                      </div>
                    </div>
                  </div>
            </div>
        </div>

<?php
require_once __DIR__ . "/include/navigation.inc.php";
require_once __DIR__ . "/include/view-message.modal.inc.php";
require_once __DIR__ . "/include/script.inc.php";
?>
</html>