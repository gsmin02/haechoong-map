function load_data() {
    return fetch("https://gist.githubusercontent.com/gsmin02/ceedda5b74e2c68b489b0d50a4ee65de/raw/11c742ccc0537e23fb5f2aa8da6d5c9840afe89f/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

load_data().then((items) => {
    var key_name = 'name';
    var name = {};
    for(var i = 0; i < Object.keys(items).length; i++) {
        name[i] = JSON.stringify(items[i][key_name]).replace(/\"/gi, "");
    }
    
    document.getElementById('id_name_1').innerHTML = name[0];
    document.getElementById('id_name_2').innerHTML = name[1];
    document.getElementById('id_name_3').innerHTML = name[2];
    document.getElementById('id_name_4').innerHTML = name[3];
    document.getElementById('id_name_5').innerHTML = name[4];
    document.getElementById('id_name_6').innerHTML = name[5];
    document.getElementById('id_name_7').innerHTML = name[6];
    document.getElementById('id_name_8').innerHTML = name[7];
})

/* test code
for(var i = 0; i < Object.keys(items).length; i++) {
        name[i] = JSON.stringify(items[i][key_name]).replace(/\"/gi, "");
        id[i] = "id_name_" + i.toString();
        document.getElementById(id[i]).innerHTML = name[i];
    }
*/