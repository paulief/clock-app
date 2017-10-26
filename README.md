# Clock App

This is a basic clock app which allows the user to change the time.
The user's preferences are stored on the server (although not persisted if server restarts).

To run the project, clone the repo and go into the directory. Run `npm install` to install required packages. Then run `npm server` and in another terminal window, run `npm start`. You can then access the app from your browser at `http://localhost:3000`.

This project follows the Airbnb style guide for Javascript (https://github.com/airbnb/javascript).

## Next Steps
- Serve static files from node server so it can be run from one command/process
- Persist user preferences
- Allow changing between 24 and 12 hour clock
- Allow user to select timezone
- Add reset button
