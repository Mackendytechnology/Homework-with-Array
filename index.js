let listeItem = [];

function additioner() {
  let item = document.getElementById("item").value;
  listeItem.push(item);
  netoyer();
  imprimer();
}

function netoyer() {
  document.getElementById("item").value = "";
}

function imprimer() {
  document.getElementById("liste").innerText = listeItem.join(" / ");
}