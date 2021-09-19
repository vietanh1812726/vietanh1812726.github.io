function sc() {
    //xét tài nguyên nhập và điều kiện
    rng = prompt('Enter the range');
    res = rng.split("-");
    if (res.length != 2) {
    alert("invalid range ");
    return;
    }
    //đặt điều kiện
    first = parseInt(res[0]);
    second = parseInt(res[1]);
    if (first > second) {
    alert("invalid range ");
    return;
    }
    //đặt công thức tính
    str = "<table border=2><tr><th>Number</th><th>Square</th><th>Cube</th></tr>";
    for (i = first; i <= second; i++) {
    str = str + "<tr><td>" + i + "<td>" + (i * i) + "<td>" + (i * i * i);
    }
    document.write(str);
   }