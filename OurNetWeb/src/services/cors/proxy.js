const corsAnywhere = require("cors-anywhere");

const PORT = 8080;

corsAnywhere
  .createServer({
    originWhitelist: [], // Allow all origins
  })
  .listen(PORT, () => {
    console.log(`CORS Anywhere server running on port ${PORT}`);
  });
