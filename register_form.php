<?php

@include 'config.php';

$error = array(); 

if(isset($_POST['submit'])){

     $name = mysqli_real_escape_string($conn, $_POST['name']);
     $email = mysqli_real_escape_string($conn, $_POST['email']);
     $pass = md5($_POST['password']);
     $cpass = md5($_POST['cpassword']);
     $user_type = $_POST['user_type']; 

     $error = array(); // Initialize an empty array to store validation errors

     // Validate email
     if (!filter_var($email, FILTER_VALIDATE_EMAIL) || substr($email, -10) !== "@gmail.com") {
         $error[] = 'Invalid email format';
     }

     // Validate username (only alphabets)
     if (!preg_match("/^[a-zA-Z\s]+$/", $name)) {
         $error[] = 'Username should only contain alphabets';
     }

     // Check if there are any validation errors
     if (empty($error)) {
         $select = "SELECT * FROM user_form WHERE email = '$email' && password = '$pass' ";
     
         $result = mysqli_query($conn, $select);

         if(mysqli_num_rows($result) > 0){
            $error[] = 'User already exists!';
         } else {
            if($pass != $cpass){
                $error[] =  'Password not matched!';
            } else {
                $insert = "INSERT INTO user_form(name, email, password, user_type) VALUES ('$name','$email','$pass','$user_type')";
                mysqli_query($conn, $insert);
                header('location:login_form.php');
            }
         }
     }
}

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register Form</title>

    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <div class="form-container">

        <form action="" method="post">
            <h3>Register Now</h3>
            <?php
            if(isset($error)){
                foreach($error as $error_msg){
                    echo '<span class="error-msg">'.$error_msg.'</span>';
                }
            }
            ?>
            <input type="text" name="name" required placeholder="Enter your name">
            <input type="email" name="email" required placeholder="Enter your email">
            <input type="password" name="password" required placeholder="Enter your password">
            <input type="password" name="cpassword" required placeholder="Confirm your password">
            <select name="user_type" id="">
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>
            <input type="submit" name="submit" value="Register Now" class="form-btn">
            <p>Already have an account? <a href="login_form.php">Login Now</a></p>
        </form>

    </div>

</body>

</html>
