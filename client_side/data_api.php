<?php

    header ('Content-Type: application/json');

    require_once __DIR__ . "/../database.php";

    echo json_encode ($database);

