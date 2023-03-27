function Change(){
    let inp = document.getElementById('input');
    let val = document.getElementById('typeofmoney');

    if(val.value === 'usd'){
        document.getElementById("euro").innerHTML = (parseFloat(inp.value) * 0.93).toFixed(2);
        document.getElementById("tg").innerHTML = (parseFloat(inp.value) * 456.41).toFixed(2) ;
        document.getElementById("dollar").innerHTML = "-";
    }else if(val.value === 'kzt'){
        document.getElementById("euro").innerHTML = (parseFloat(parseInt(inp.value) * 0.0020)).toFixed(2);
        document.getElementById("tg").innerHTML = "-";
        document.getElementById("dollar").innerHTML = (parseFloat(parseInt(inp.value) * 0.0022)).toFixed(2);
    }else if(val.value === 'eur'){
        document.getElementById("euro").innerHTML = "-";
        document.getElementById("tg").innerHTML = (parseFloat(inp.value) * 488.24).toFixed(2);
        document.getElementById("dollar").innerHTML = (parseFloat(inp.value) * 1.07).toFixed(2);
    }
}

