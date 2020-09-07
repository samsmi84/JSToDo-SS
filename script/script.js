function getData() {

    fetch('script/data.json')
    .then(resp => resp.json())
    .then(data => console.log(data))

}

getData()