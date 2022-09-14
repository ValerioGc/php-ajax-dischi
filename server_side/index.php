<?php


    require_once __DIR__ . "/../database.php";

    foreach ($database as $album) {
        echo "<ul>";
        foreach ($album as $data) {
            echo "<li>" . $data . "</li>";
        }
        echo "</ul>";
    }