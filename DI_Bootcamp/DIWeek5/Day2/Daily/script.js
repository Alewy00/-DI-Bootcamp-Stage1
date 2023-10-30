let story = document.getElementById("story");
let adj = document.getElementById("adjective");
let noun = document.getElementById("noun");
let person = document.getElementById("person");
let place = document.getElementById("place");
let verb = document.getElementById("verb");

function getValue(e) {
  e.preventDefault();
  noun = noun.value;
  adjective = adjective.value;
  person = person.value;
  verb = verb.value;
  place = place.value;

  if (
    adj.length > 0 &&
    noun.length > 0 &&
    person.length > 0 &&
    verb.length > 0 &&
    place.length > 0
  ) {
    story.append(
      document.createTextNode(
        `Once upon a time ${noun} became ${adjective}. ${person} decided ${verb} to the ${place} and found a ${noun}.`
      )
    );
  } else {
    alert("You didn't finish the form");
  }
}
let button = document.getElementById("lib-button");
button.addEventListener("click", getValue);
