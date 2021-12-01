function searchMerch() {
    let input, filter, container, item, h2, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    container = document.getElementById("merchContainer");
    item = container.getElementsByTagName('div');


    for (i = 0; i < item.length; i++) {
        h2 = item[i].getElementsByTagName("h2")[0];
        txtValue = h2.textContent || h2.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            item[i].style.display = "";
        } else {
            item[i].style.display = "none";
        }
    }

}

searchMerch()