# Back end

This project was created by Dan Ahmed :). PORT 8000.

## Server.js

Setting up server

### `Cors`

 - app.use(cors()) within server.js, line 8.

 - Cors adds a layer of security to the api/server by limiting who can access it.
 
 - In this case to access both endpoints, the header Authorization 'token' needs to equal "mysecrettoken"
 
 - Without this Authorization, a 403 JSON status code is sent back.
 
 
### `Auth User`
 
 - Within ./middleware/auth.js lies the authUser middleware function.
 
 - authUser essentially validates the user so to check if user is able to access the endpoints they are requesting.
 
 - next() is an important function within the authUser as without it, the function wouldn't run.
 
 
### `Routes`

 - Within ./routes/route.js lies the get request route for the '/time' endpoint.
 
 - When hit, the response returns a new epoch value via Math.floor(new Date().getTime() / 1000).
      
      - I found this on stackoverflow: https://stackoverflow.com/questions/25250551/how-to-generate-timestamp-unix-epoch-format-nodejs
      
 
 
