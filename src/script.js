function add_item(event) {
  event.preventDefault();

  let thing_to_do = document.querySelector("#to-do-input").value;
  let list = document.querySelector("#to-do-list");

  list.innerHTML += `<li> ${thing_to_do}
  <button onClick="delete_item(this.parentNode)">Del</button>  </li>`;

  document.querySelector("#to-do-input").value = "";
}
function delete_item(item) {
  let list = document.querySelector("#to-do-list");
  list.removeChild(item);
  console.log(item);
}

document.querySelector("#input-form").addEventListener("submit", add_item);
