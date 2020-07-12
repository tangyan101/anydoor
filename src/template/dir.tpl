<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{title}}</title>
  <style>
    a {
      display: block;
      text-decoration: none;
      font-size: 16px;
      color: rgb(90, 90, 90);
    }
    a:hover{
      color: cornflowerblue;
    }
  </style>
</head>
<body>
  {{#each files}}
    <a href="{{../dir}}/{{file}}">【{{icon}}】{{file}}</a>
  {{/each}}
</body>
</html>
