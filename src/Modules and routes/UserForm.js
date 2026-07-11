

function UserForm(req,resp){
  resp.write(` 
    <form action="/submit" method="post">
        <input type="text" name="name" placeholder="Enter username">
        <br><br>
        <input type="password" name="password" placeholder="Enter password">
        <br><br>
        <button>Submit </button>
    </form>
    `)
}

module.exports=UserForm;
