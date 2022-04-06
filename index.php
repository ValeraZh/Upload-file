<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="js/ajax_handler.js"></script>
    <script src="js/parse_xml.js"></script>
    <title>Document</title>
</head>
<body>
<form id="form" action="file_handler.php" enctype="multipart/form-data" method="post">
    <input type="file" name="someFile" id="file">
    <button type="submit" name="send">Загрузить</button>
    <div id="form_status"></div>
</form>

<hr>

<ul id="content"></ul>


</body>
</html>