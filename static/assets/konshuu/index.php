<?php 
    echo json_encode(array_map(fn($pdf) => array("volume"=>dirname($pdf), "issue"=>basename($pdf, ".pdf")), glob("*/*.pdf")));
?>