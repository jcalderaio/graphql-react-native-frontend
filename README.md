# Apollo-Graphql React Native Frontend

-I created a UI using React Native and Apollo Client which "talks" with the graphql-express-server on the backend. Although I use class-based components in the app, I only use Pure Components if they make a Graphql call. I use the Apollo Client to make calls to GraphQl. I implemented Components for the following calls to the Graphql Server:

1) getAllReservations - returns a List of all Reservations and displays on the screen
2) addReservation - adds a single reservation, assigning it a random ID, returns its id, and refetches data for "All Reservations" screen
3) findReservation - returns a single reservation and shows on the screen

# Extra things I added

1) deleteReservation - deletes a reservation, refetches allReservations and displays them on the screen
2) datePicker - uses a phones native datePicker to pick a date, while inputing data to addReservation. This makes it so that a user can ONLY add a date to the database
3) used Native Base to make the UI look nice
4) turned off auto-capitalize first letter in findReservation
5) added alerts throughout the app to confirm when an action is completed

*Note: I didn't find the need to use flow, because the ID is automatically assigned (so no typecheck needed) and the date uses a datepicker UI, so the user cannot enter anything but a date. The other inputs (name & hotelName) do not really need typechecks, since names and hotels can be named anything. 

## Directions

1. clone repo
2. change directories into folder and run “npm install”
3. To run on iOS, type "react-native run-ios" OR to run on Android type "react-native run-android"

\*Note: Some Android emulators do not run on the same localhost as the server, meaning the database would not work. Please be aware of this. The ios emulator works better for testing.
