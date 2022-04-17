console.log(properties)
let results = "";
results += "<div id=\"listingHolder\">"
for (let i=0; i < properties.length; i++) {

  results += "<div id=\"property\"> <p>" + properties[i].property + "</p>"
  + "<img src= \"" + properties[i].picture + "\"></img>"
  + "<p class=\"pf\">Mortgage Value: $" + properties[i].mortgage + "</p>"
  + "<p class=\"pf\">Rent Price: $" + properties[i].rent + "</p>"
  + "<p class=\"pf\">Address: " + properties[i].address.street + ", "
      + properties[i].address.state + " " + properties[i].address.zipcode + "</p>"
  + "</div>";
}
results += "</div>"
document.getElementById("properties").innerHTML = results;
