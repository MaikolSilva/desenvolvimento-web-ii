function fclick() {
    var nomeEl = document.getElementById('nome');
    var anoEl = document.getElementById('ano');

    var nome = nomeEl.value;
    var ano = anoEl.value;

    if (confirm('tem certeza bque seu nome é ' + nome + '?')) {
        alert('Olá, ' + nome + '!!!');
    }

    var idade = 2016 - ano;
    alert('Você tem ' + idade + ((idade > 20) ? ' \n Cê tá velho heim:)' : ''));
}