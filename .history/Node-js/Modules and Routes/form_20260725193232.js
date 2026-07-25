// Function to make HTML form

function form(req, res){

    res.write(`
        <html>
        <body>

        <h1>User Form</h1>

        <form action="/submit" method="POST">

            <input type="text" name="name" placeholder="Enter Name">

            <br><br>

            <input type="email" name="email" placeholder="Enter Email">

            <br><br>

            <button type="submit">
                Submit
            </button>

        </form>

        </body>
        </html>
    `);

    res.end();
}

module.exports = form;