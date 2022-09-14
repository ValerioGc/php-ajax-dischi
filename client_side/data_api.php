<?php

    header ('Content-Type: application/json');

    require_once __DIR__ . "/../database.php";


    $responseArray = [];
    $genre = $_GET['genre'];


    // **** Filters *****

   if ($genre == null) {
       $responseArray = $database;
   }
   else {
     for ($i = 0; $i < count($database); $i++) {
         if (strtolower($database[$i]['genre']) == strtolower($genre)) {
             $responseArray[] = $database[$i];
         }
     }
   }

    echo json_encode($responseArray);
