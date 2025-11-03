'use strict';
'use strict';
import express from 'express'; 
const app = express();
app.use(express.json())
app.get('/', (request, response) => {
  const json = request.body;
  // hier normale Bearbeitung der Anfrage
});
app.listen(8080);
