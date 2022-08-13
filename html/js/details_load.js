function load_data() {
    return fetch("https://gist.githubusercontent.com/gsmin02/ceedda5b74e2c68b489b0d50a4ee65de/raw/11c742ccc0537e23fb5f2aa8da6d5c9840afe89f/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

load_data().then((items) => {
    var key_name = 'name';
    var name1 = JSON.stringify(items[0][key_name]).replace(/\"/gi, "");
    var name2 = JSON.stringify(items[1][key_name]).replace(/\"/gi, "");
    var name3 = JSON.stringify(items[2][key_name]).replace(/\"/gi, "");
    var name4 = JSON.stringify(items[3][key_name]).replace(/\"/gi, "");
    var name5 = JSON.stringify(items[4][key_name]).replace(/\"/gi, "");
    var name6 = JSON.stringify(items[5][key_name]).replace(/\"/gi, "");
    var name7 = JSON.stringify(items[6][key_name]).replace(/\"/gi, "");
    var name8 = JSON.stringify(items[7][key_name]).replace(/\"/gi, "");

    document.getElementById('id_name_1').innerHTML = name1;
    document.getElementById('id_name_2').innerHTML = name2;
    document.getElementById('id_name_3').innerHTML = name3;
    document.getElementById('id_name_4').innerHTML = name4;
    document.getElementById('id_name_5').innerHTML = name5;
    document.getElementById('id_name_6').innerHTML = name6;
    document.getElementById('id_name_7').innerHTML = name7;
    document.getElementById('id_name_8').innerHTML = name8;
})