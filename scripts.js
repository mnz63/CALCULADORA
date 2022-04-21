
const clear = document.getElementById("clear");

function insert(tecla) {
  visor.value = visor.value + tecla;
}

clear.addEventListener("click", function () {
  visor.value = "";
});

// quando o "=" for pressionado calcula
function calcular() {
  visor.value = eval(visor.value);
}

//calcula quando pressiona o enter

document.addEventListener('keypress', function(e){
  if(e.key === 'Enter'){
    const bnt = document.getElementById('result')
    bnt.click()
  }
})