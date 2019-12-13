let form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", function(event) {
  let line = document.createElement("tr");

  let description = document.querySelector("form input[name=description]").value;
  let quantity = document.querySelector("form input[name=quantity]").value;

  line.innerHTML = `<tr><td>${description}</td><td><input value="${quantity}"></td><td><input type="button" value="Remove"><td></tr>`;

  let table = document.getElementById("products");
  table.append(line);

  let input = line.getElementsByTagName('input')[0];
  input.addEventListener('change', updateTotal);

  let remove = line.querySelector("input[type=button]");

  remove.addEventListener("click", function() {
    this.parentNode.parentNode.remove();
    updateTotal();
  });

  updateTotal();
  event.preventDefault();
});

function updateTotal() {
  let total = 0;
  let lines = document.querySelectorAll("table tr");
  for (let i = 0; i < lines.length; i++) {
    console.log(lines[i]);
    let input = lines[i].getElementsByTagName("input")[0];
    if (input != null) total += Number(input.value);
  }
  let span = document.getElementById("total");
  span.innerHTML = total;
}