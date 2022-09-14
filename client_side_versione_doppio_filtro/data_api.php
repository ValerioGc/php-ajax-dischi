<?php

    header ('Content-Type: application/json');

    require_once __DIR__ . "/../database.php";

    $responseArray = [];
    $genre = $_GET['genre'];
    $year = $_GET['year'];


    // **** Filters *****
    if ($genre === 'Genere')  {
        $genre2 = null;
    } else {
        $genre = strtolower($genre);
    }
    if ($year === 'Anno')  {
        $year2 = null;
    }

   if (($genre2 == null) && ($year2 == null)){
       $responseArray = $database;
   }
   elseif ((!$genre2 == null) && ($year2 == null)){
     for ($i = 0; $i < count($database); $i++) {
         if (strtolower($database[$i]['genre']) == strtolower($genre)) {
                $responseArray[] = $database[$i];
         }
     }
   }
   elseif (($genre2 == null) && (!$year2 == null)) {
     for ($i = 0; $i < count($database); $i++) {
         if (($database[$i]['year']) == $year) {
                $responseArray[] = $database[$i];
         }
     }
   }
   elseif ((!$genre2 == null) && (!$year2 == null)) {
     for ($i = 0; $i < count($database); $i++) {
         if ((strtolower($database[$i]['genre']) === strtolower($genre)) && (($database[$i]['year']) === $year) ) {
                $responseArray[] = $database[$i];
         }
     }
   }

    echo json_encode($responseArray);
