<?php require __DIR__ . "/include/utilities/Utilities.php";?>
<!DOCTYPE html>
<html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="<?php echo Utilities::domain();?>/css/bootstrap.min.css?v=<?php echo md5(uniqid(rand(), true));?>"/>
      <link rel="stylesheet" href="<?php echo Utilities::domain();?>/css/sweetalert2.css?v=<?php echo md5(uniqid(rand(), true));?>"/>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="<?php echo Utilities::domain();?>/js/bootstrap.bundle.min.js?v=<?php echo md5(uniqid(rand(), true));?>"></script>
      <script src="<?php echo Utilities::domain();?>/js/sweetalert2.all.min.js?v=<?php echo md5(uniqid(rand(), true));?>"></script>
      <script src="<?php echo Utilities::domain();?>/js/apis/list.js?v=<?php echo md5(uniqid(rand(), true));?>"></script>
      <script src="<?php echo Utilities::domain();?>/js/script.js?v=<?php echo md5(uniqid(rand(), true));?>"></script>
      <script src="<?php echo Utilities::domain();?>/js/defined/login.js?v=<?php echo md5(uniqid(rand(), true));?>"></script>
      <title>Else Pintor</title>
  </head>
  <body>
    <div class="jumbotron text-center vertical-center">
      <div class="container">
          <main>
            <div>
              <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

              <div class="form-floating">
                <input type="email" id="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <input type="password" id="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Password</label>
              </div>
              <button class="w-100 btn btn-lg btn-primary" id="login" type="button">Sign in</button>
            </div>
          </main>
      </div>
    </div>
  </body>
</html>
