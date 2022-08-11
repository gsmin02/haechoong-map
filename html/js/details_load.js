function load_data() {
    return fetch("https://gist.githubusercontent.com/gsmin02/ceedda5b74e2c68b489b0d50a4ee65de/raw/f14b51def3df4044c2fba533532d7d76dc85a6f2/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

load_data().then((items) => {
    const content = JSON.stringify(items[0]);
    //document.write(content);
    //console.log(items);
})
