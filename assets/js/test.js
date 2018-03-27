//current energy consumption update picture
function update_member(id,status) {
    $("#"+id).text(String(status));
}

$( document ).ready(function() {
    console.log("starting document!!!!");

    // Initialize Firebase
    console.log("Initialize Firebase");
    var config = {
      apiKey: "AIzaSyA9YF2ERoWAzoYDgNOs-7_bb0lY8yRvbGU",
      authDomain: "pea-python-school.firebaseapp.com",
      databaseURL: "https://pea-python-school.firebaseio.com",
      projectId: "pea-python-school",
      storageBucket: "pea-python-school.appspot.com",
      messagingSenderId: "755493389212"
    };
    firebase.initializeApp(config);

    // var ref = firebase.database().ref();
    //
    // ref.on("value", function(snapshot) {
    //     console.log(snapshot.val().test);
    //     x = snapshot.val().test;
    // }, function (error) {
    //     console.log("Error: " + error.code);
    // });

    total_load_activePower = 0;

    var member_profitRef = firebase.database().ref("member");

    member_profitRef.on("child_changed", function(data) {
        update_member(data.key,data.val());
    });

});
