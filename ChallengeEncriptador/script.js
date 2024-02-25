const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
    let textoLimpo = removeAcento(textArea.value);
    const textoEncriptado = encriptar(textoLimpo);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function removeAcento(text) {
    text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
    text = text.replace(new RegExp('[Ç]', 'gi'), 'c');
    return text;
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [
        ["a", "01100001"], ["b", "0110001"], ["c", "01100011"], ["d", "01100100"],
        ["e", "01100101"], ["f", "01100110"], ["g", "01100111"],["h", "01101000"],
        ["i", "01101001"], ["j", "01101010"], ["k", "01101011"], ["l", "01101100"],
        ["m", "01101101"], ["n", "01101110"], ["o", "01101111"], ["p", "01110000"],
        ["q", "01110001"], ["r", "01110010"], ["s", "01110011"], ["t", "01110100"],
        ["u", "01110101"], ["v", "01110110"], ["w", "01110111"], ["x", "01111000"],
        ["y", "01111001"], ["z", "01111010"]];

    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = Desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function Desencriptar(stringDesencriptada) {
    let matrizCodigo = [
        ["a", "01100001"], ["b", "0110001"], ["c", "01100011"], ["d", "01100100"],
        ["e", "01100101"], ["f", "01100110"], ["g", "01100111"],["h", "01101000"],
        ["i", "01101001"], ["j", "01101010"], ["k", "01101011"], ["l", "01101100"],
        ["m", "01101101"], ["n", "01101110"], ["o", "01101111"], ["p", "01110000"],
        ["q", "01110001"], ["r", "01110010"], ["s", "01110011"], ["t", "01110100"],
        ["u", "01110101"], ["v", "01110110"], ["w", "01110111"], ["x", "01111000"],
        ["y", "01111001"], ["z", "01111010"]];

        let textoDesencriptado = "";
        let partes = stringDesencriptada.match(/.{1,8}/g);
    
        for (let i = 0; i < partes.length; i++) {
            for (let j = 0; j < matrizCodigo.length; j++) {
                if (partes[i] === matrizCodigo[j][1]) {
                    textoDesencriptado += matrizCodigo[j][0];
                    break;
                }
            }
        }
return textoDesencriptado;
}