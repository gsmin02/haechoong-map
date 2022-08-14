// 외부에 있는 json 데이터 불러오기 (gist 사용)
/*
function load_data() {
    return fetch("https://gist.githubusercontent.com/gsmin02/ceedda5b74e2c68b489b0d50a4ee65de/raw/11c742ccc0537e23fb5f2aa8da6d5c9840afe89f/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}
*/

// 불러온 데이터 중 특정 데이터 불러오기 및 데이터 정형화
/*
load_data().then((items) => {
    var key_name = 'name';
    var id_name = 'id_name_';
    var name = {}, id = {};
    for(var i = 0; i < Object.keys(items).length; i++) {
        name[i] = JSON.stringify(items[i][key_name]).replace(/\"/gi, "");
        
        id[i] = id_name + (i+1).toString();
        //document.getElementById(id[i]).innerHTML = name[i];
    }
})
*/