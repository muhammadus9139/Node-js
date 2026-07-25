<!DOCTYPE html>
<html>

<head>
    <title>Users List</title>
</head>


<body>


<h1>Users List</h1>


<% users.forEach((user)=>{ %>


<h2>
    <%= user.name %>
</h2>


<a href="/user/<%= user.id %>">

    View Profile

</a>


<hr>


<% }) %>



</body>

</html>