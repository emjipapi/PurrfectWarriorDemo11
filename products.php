<?php include 'db_connection.php'; ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="css/products.css">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/search.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:wght@400;600;700&display=swap"
        rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&display=swap"
        rel="stylesheet">
    <title>Purrfect Warrior ● Products</title>

</head>

<body>
    <header class="header-container">
        <h1 class="kanit-light-logo" style="margin-right:20px;">PURRFECT<br>WARRIOR</h1>
        <a class="dropdown-toggle hidden-arrow btn btn-primary mx-2" href="#" id="navbarDropdownMenuLink" role="button"
            data-mdb-dropdown-init data-mdb-ripple-init aria-expanded="false" data-bs-toggle="dropdown">
            <img src="img/search.svg" class="search-icon">
        </a>
        <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink" id="productDropdown">
            <li>
                <div class="input-group mt-2 mx-0">
                    <div class="form-outline" data-mdb-input-init>
                        <input type="text" id="form12" class="form-control" placeholder="(* Does not include functionality)">
                    </div>
                </div>
            </li>
            <li>
                <hr class="dropdown-divider" />
            </li>
        </ul>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="img/person.svg" class="search-icon" style="filter: invert(0) !important;">
            </button>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item">Guest Account</a>
              <hr class="dropdown-divider" />
              <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#loginModal">Log in</a>
              <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#signupModal">Sign up</a>
            </div>
          </div>
        <div class="toggle-switch parent" id="darkmodebutton">
            
            <label class="switch-label">
                <input type="checkbox" class="checkbox" id="darkmodecheckbox">
                <span class="slider"></span>
            </label>
        </div>
    </header>

    <div class="spacer"></div>

    </div>
    <nav class="header-navigation">
        <ul>
            <li id="home" class="" style="margin-left:-12px;margin-right:12px;"><button
                    class="navigation-button"><span><a href="index.html">HOME</a></span></button>
            </li>

            <li class="boton1 boton-left" style="margin-left:-12px;"></li><!-- Added the div inside the list -->
            <li id="products" class="boton"><button><span><a href="products.html">PRODUCTS</a></span></button></li>
            <li class="boton1 boton-right"></li><!-- Added the div inside the list -->

            <li id="cart" class=""><button class="navigation-button"><span><a href="cart.html"
                            id="cartLink">CART</a></span></button>
            </li>
            <li id="contactus" class=""><button class="navigation-button"><span><a
                            href="contactus.html">CONTACTS</a></span></button></li>
        </ul>
    </nav>

    <div class="content">
        <div class="front-page">
            <div class="darkened-image">
                <img src="img/products/products_front.webp" class="darkened-image">
            </div>
            <div class="text-overlay">
                <p class="kanit-light2">SHOP ALL</p>
                <h2 class="kanit-bold" style="letter-spacing:4px;">FIND THE<br>PERFECT FIT</h2>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="text-div">
                        <h1 class="kanit-light3">CATEGORY:<br><br>
                            <div class="button-text"><a class="button-text"
                                    href="category/tacticalgear.html">TACTICAL</a>
                            </div>&emsp;
                            <div class="button-text"><a class="button-text"
                                    href="category/camouflagegear.html">CAMOUFLAGE</a>
                            </div>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row row-cols-2 row-cols-md-3 g-2 mt-5 mb-5" id="productRow">
                <?php

                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                }

                $sql = "SELECT * FROM products";
                $result = $conn->query($sql);

                if ($result->num_rows > 0) {
                   
                    while($row = $result->fetch_assoc()) {
                        echo '
                        <div class="col mb-3">
                            <a id="productLink" href="'.$row["productLink"].'" style="text-decoration: none;">
                                <div class="card image-wrapper" style="cursor: pointer;"
                                    onmouseover="changeImage(this, \''.$row["imageAlt"].'\')"
                                    onmouseout="changeImage(this, \''.$row["image"].'\')">
                                    <div class="card-body p-0">
                                        <img src="'.$row["image"].'" class="card-img-top cropped-zoom-in" alt="...">
                                        <h1 class="kanit-semibold2">'.$row["name"].'</h1>
                                        <p class="kanit-light">'.$row["color"].'<br>₱'.number_format($row["price"], 2).' PHP</p>
                                    </div>
                                </div>
                            </a>
                        </div>';
                    }
                } else {
                    echo "0 results";
                }
                $conn->close();
                ?>
            </div>
        </div>
        <div id="modalContainer"></div>
        <div id="signupModalContainer"></div>
        <div id="loginModalContainer"></div>
    </div>


    <div class="spacer"></div>

    <div class="extra-layer1"></div>
    <div class="extra-layer2"></div>
    <footer>
        <h1>Copyright © 2023 By Purrfect Warrior Co.</h1>
    </footer>
    <script src="js/purrfectwarrior.js"></script>
    <script src="js/productsSearch.js" type="module"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
    </script>
    
</body>

</html>
