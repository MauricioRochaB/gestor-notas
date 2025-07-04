let notas = JSON.parse(localStorage.getItem("notas") || "[]");

const contenedor = document.getElementById("notas");
const buscarInput = document.getElementById("buscar");
const filtrarColor = document.getElementById("filtrarColor");

// Modal Crear
const modalCrear = document.getElementById("modalNota");
const abrirModalBtn = document.getElementById("abrirModal");
const cerrarModalBtn = document.getElementById("cerrarModal");
const guardarNotaBtn = document.getElementById("guardarNota");
const textoNota = document.getElementById("textoNota");
const colorNota = document.getElementById("colorNota");

// Modal Editar
const modalEditar = document.getElementById("modalEditar");
const textoEditar = document.getElementById("textoEditar");
const guardarEdicion = document.getElementById("guardarEdicion");

// Modal Eliminar
const modalEliminar = document.getElementById("modalEliminar");
const confirmarEliminar = document.getElementById("confirmarEliminar");

let indiceEditar = null;
let indiceEliminar = null;

function renderNotas() {
  contenedor.innerHTML = "";
  const filtroTexto = buscarInput.value.toLowerCase();
  const filtroColor = filtrarColor.value;

  notas.forEach((nota, index) => {
    if (
      (filtroTexto && !nota.texto.toLowerCase().includes(filtroTexto)) ||
      (filtroColor && nota.color !== filtroColor)
    ) return;

    const div = document.createElement("div");
    div.className = `nota ${nota.color}`;
    div.innerHTML = `
      <button onclick="confirmarEliminacion(${index}, event)">❌</button>
      <p>${nota.texto}</p>
    `;
    div.onclick = (e) => {
      if (!e.target.closest("button")) abrirModalEditar(index);
    };
    contenedor.appendChild(div);
  });
}

function guardarYRender() {
  localStorage.setItem("notas", JSON.stringify(notas));
  renderNotas();
}

abrirModalBtn.onclick = () => {
  modalCrear.style.display = "flex";
  textoNota.value = "";
  colorNota.value = "";
};

cerrarModalBtn.onclick = () => cerrarModal("modalNota");

guardarNotaBtn.onclick = () => {
  const texto = textoNota.value.trim();
  const color = colorNota.value;

  if (texto && color) {
    notas.push({ texto, color });
    guardarYRender();
    cerrarModal("modalNota");
  } else {
    alert("Completa todos los campos.");
  }
};

function abrirModalEditar(index) {
  indiceEditar = index;
  textoEditar.value = notas[index].texto;
  modalEditar.style.display = "flex";
}

guardarEdicion.onclick = () => {
  const nuevoTexto = textoEditar.value.trim();
  if (nuevoTexto) {
    notas[indiceEditar].texto = nuevoTexto;
    guardarYRender();
    cerrarModal("modalEditar");
  }
};

function confirmarEliminacion(index, e) {
  e.stopPropagation();
  indiceEliminar = index;
  modalEliminar.style.display = "flex";
}

confirmarEliminar.onclick = () => {
  notas.splice(indiceEliminar, 1);
  guardarYRender();
  cerrarModal("modalEliminar");
};

function cerrarModal(id) {
  document.getElementById(id).style.display = "none";
}

buscarInput.oninput = renderNotas;
filtrarColor.onchange = renderNotas;

window.onclick = function(e) {
  document.querySelectorAll(".modal").forEach(modal => {
    if (e.target === modal) modal.style.display = "none";
  });
};

renderNotas();
