let button = document.getElementById('insertRowButton')

button.addEventListener("click", function (event) {
    let line = document.createElement("tr");
    line.innerHTML = `<td>NewRow NewCell</td><td>NewRow NewCell</td>`

    let table = document.getElementById('sampleTable')
    table.append(line)
});