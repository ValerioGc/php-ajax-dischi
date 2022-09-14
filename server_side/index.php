<?php

    require_once __DIR__ . "/../database.php";

    var_dump($database);

    foreach ($database as $album) {
//      var_dump($album);
        echo "<ul>";
        foreach ($album as $data) {
//            var_dump($album);
            echo "<li>" . $data . "</li>";
        }
        echo "</ul>";
    }