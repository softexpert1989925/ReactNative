// this is firebase connection config file.

import Firebase from 'firebase';
 let config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "https://sample-project-f24ac.firebaseio.com/",
    projectId: "sample-project-f24ac",
    storageBucket: "",
    messagingSenderId: ""
  };
let app = Firebase.initializeApp(config);
export const db = app.database();