import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util.js';



  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

    /**************************************************************************** */
    app.get('/filteredimage', async (req, res) => {
      try {
        // 1. Validate the image_url query
        const imageUrl = req.query.image_url;
    
        if (!imageUrl) {
          return res.status(400).send({ message: 'image_url query parameter is required' });
        }
    
        // 2. Call filterImageFromURL(image_url) to filter the image
        const filteredPath = await filterImageFromURL(imageUrl);
    
        // 3. Send the resulting file in the response
        res.status(200).sendFile(filteredPath, async (err) => {
          if (err) {
            console.error('Error sending file:', err);
            res.status(500).send({ message: 'Failed to send the file' });
          }
    
          // 4. Delete any files on the server on finish of the response
          await deleteLocalFiles([filteredPath]);
        });
      } catch (error) {
        console.error('Error processing request:', error);
        res.status(422).send({ message: 'Unable to process the image at the provided URL' });
      }
    });
  //! END @TODO1
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async (req, res) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
