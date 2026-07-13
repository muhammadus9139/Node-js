


function login() {
    return `
       <form action="/submit" method="post">
                <input type="text" placeholder="Enter name" /> <br/> <br/>
               <input type="text" placeholder="Enter password" /> <br/> <br/>
                <button> Login </button>
         </form>
         <a href='/home'> Go back to home </a> 
    `
}

export default login;

