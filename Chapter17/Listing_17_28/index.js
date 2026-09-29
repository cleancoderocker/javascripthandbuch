'use strict';
'use strict';
import express from 'express'; 
const app = express();
app.use(express.json())
app.get('/', (request, response) => {
  const json = request.body;
  // here normal processing of the request
});
app.listen(8080);
