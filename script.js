// Obtener referencia a elementos del DOM
const passwordInput = document.getElementById('length');
const complexitySelect = document.getElementById('complexity');
const copyButton = document.getElementById('copy-button');

// Agregar evento al botón de copiar
copyButton.addEventListener('click', () => {
copyToClipboard(passwordInput.value);
});

// Función para copiar al portapapeles
function copyToClipboard(text) {
navigator.clipboard.writeText(text)
    .then(() => {
    alert('Contraseña copiada al portapapeles');
    })
    .catch((error) => {
    console.error('Error al copiar al portapapeles:', error);
    });
}

