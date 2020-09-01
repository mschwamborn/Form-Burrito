// Create a firebase project. Add a web app to that rebase project and copy the config here
var firebaseConfig = {<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBGfM66zrOjUCfUBmfHCCZc3q8j1Dqn2r8",
    authDomain: "burrito-test.firebaseapp.com",
    databaseURL: "https://burrito-test.firebaseio.com",
    projectId: "burrito-test",
    storageBucket: "burrito-test.appspot.com",
    messagingSenderId: "119405806890",
    appId: "1:119405806890:web:e2891348ea052605e64a53"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>};

var config = {
	firebaseConfig: firebaseConfig,
	homeRedirect: "https://github.com/garytou2/Form-Burrito",
	entityName: "Michael's Form Burrito", //The name of the business, organization, or your own name!
};

export default config;
