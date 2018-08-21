// File created by Remco Wammes on 21/08/2018
const writeHTML = (html) => {
    document.getElementById("container").innerHTML += (html);
}
// The input
writeHTML("<input type='text' id='inputAdd' class='uk-input' >");
// The Submit button
writeHTML("<button class='uk-button-primary' id='submit'>Submit</button>" + "<br>");

document.getElementById('submit').addEventListener('click', function (){
    if(document.getElementById('inputAdd').value == ""){
        alert("Enter something in the add box before adding something to the list!!");
    }else{
    document.getElementById("list").innerHTML += ("<li>" + document.getElementById('inputAdd').value + "<button class='uk-button-danger' id='remove' class='button'>Remove</button></li>");
    console.log("We added " + document.getElementById('inputAdd').value);
    document.getElementById('inputAdd').value = ("");}
});
document.getElementById('remove').addEventListener('click', function (){
    document.getElementById("list").innerHTML = ("");
    console.clear();
});