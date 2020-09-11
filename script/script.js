function getData() {

    fetch('script/data.json')
    .then(resp => resp.json())
    .then(data => {

        let htmlStuff = data.map(d => {
            return `
            <tr>
                <td>
                    <input type="checkbox" value="${d.completed}" ${d.completed ? "checked" : null}>
                </td>
                <td>${d.title}</td>
                <td>${d.completed}</td>
            </tr>`
        }).join("")

        //console.log(htmlStuff)
        document.querySelector('tbody').innerHTML = htmlStuff

    })

}

getData()