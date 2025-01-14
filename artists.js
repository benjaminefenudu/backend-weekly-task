// Store XMLHttpRequest and the JSON file location in variables
var xhr = new XMLHttpRequest();
var url = "https://www.quackit.com/json/tutorial/artists.txt";

// Called whenever the readyState attribute changes 
xhr.onreadystatechange = function() {

  // Check if fetch request is done
  if (xhr.readyState == 4 && xhr.status == 200) { 
  
    // Parse the JSON string
    var jsonData = JSON.parse(xhr.responseText);
    
    // Call the showArtists(), passing in the parsed JSON string
    showArtists(jsonData);
  }
};

// Do the HTTP call using the url variable we specified above
xhr.open("GET", url, true);
xhr.send();

// Function that formats the string with HTML tags, then outputs the result
function showArtists(data) {
    var output = "<ul>"; // Open list
    var i;
    
    // Loop through the artists, and add them as list items
    for (var i in data.artists) {
        output += "<li>" + data.artists[i].artistname + " (Born: " + data.artists[i].born + ")</li>"; 
    }
    
    output += "</ul>"; // Close list

    // Output the data to the "artistlist" element
    document.getElementById("artistList").innerHTML = output;
}
