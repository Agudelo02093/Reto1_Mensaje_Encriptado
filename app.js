function copiarButton(texto) {
    const hideDivButton = document.querySelector('.hideDivButton');
    if (texto.trim() !== '') {
        
        hideDivButton.style.visibility = 'visible'

    } else {

        hideDivButton.style.visibility = 'hidden'
        
    }
}


function encriptar() {
    const texto = document.getElementById('textoUsuario').value;

    const reglas = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat',        
    }
    
    let textoEncriptado = texto;

    //Object.entries(reglas): Convirtiendo el objeto en matriz.
    for (const [letra, sustituto] of Object.entries(reglas)) {
        textoEncriptado = textoEncriptado.replace(new RegExp(letra, 'g'), sustituto)
    }

    document.getElementById('outputText').textContent = textoEncriptado;
    document.querySelector('.hideDiv').style.display = 'none';
    document.querySelector('.resultadoDiv').style.visibility = 'visible';

    copiarButton(textoEncriptado);
}

function desencriptar() {
    const texto = document.getElementById('textoUsuario').value;
    
    const reglas = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u' 
    }

    let textoDesencriptado = texto;

    for(const[sustituto, letra] of Object.entries(reglas)) {
        textoDesencriptado = textoDesencriptado.replace(new RegExp(sustituto, 'g'),letra)
    }

    document.getElementById('outputText').textContent = textoDesencriptado;
    document.querySelector('.hideDiv').style.display = 'none';
    document.querySelector('.resultadoDiv').style.visibility = 'visible';

    copiarButton(textoDesencriptado);
}


function copiarTexto() {
    const texto = document.getElementById('outputText').textContent;
    
    if (texto.trim() === '') {
        alert('No hay texto para copiar.');
        return;
    }
    
    const tempInput = document.createElement('textarea');
    tempInput.value = texto;
    document.body.appendChild(tempInput);
    tempInput.select();

    document.execCommand('copy');

    document.body.removeChild(tempInput);

    const copyAlert = document.getElementById('copyAlert');
    copyAlert.style.display = 'block';

    setTimeout(() => {
        copyAlert.style.display = 'none';
    }, 800);
}