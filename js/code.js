AOS.init();

// Função Encapsulada: Preenche o SELECT com os dados da API do IBGE
(Function(){

    var url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
    var select = document.getElementById('estado');
    var options = '<option>Selecione</option>';

    // Consulta a API com o método fetch e com um laço de repetição incrementa as tags option
    fetch(url).then(Response => response.json()).then(json => console.log(json)).catch();

    select.innerHTML= options;

})();