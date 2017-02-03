var containerTextArea;
var controleTamanhoTextArea;
var inputTextArea;

let tamanhoAjustavel = () => {
    controleTamanhoTextArea.innerHTML = inputTextArea.value + '\n';
};

document.addEventListener('DOMContentLoaded', () => {
    containerTextArea = document.querySelector('.container-text-area');
    controleTamanhoTextArea = containerTextArea.querySelector('.controle-tamanho-text-area');
    inputTextArea = containerTextArea.querySelector('.text-area-redimensionavel');

    tamanhoAjustavel();
    inputTextArea.addEventListener('input', tamanhoAjustavel);
});


