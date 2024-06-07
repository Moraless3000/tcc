document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aqui você pode adicionar a lógica para verificar o usuário e senha
    // Por exemplo, você pode fazer uma requisição a um servidor ou comparar com dados locais
    if(username === 'admin' && password === 'admin') {
        alert('Login bem-sucedido!');
        window.location.href = 'index.html'; // Substitua 'index.html' pelo nome da sua página inicial
    } else {
        alert('Usuário ou senha incorretos.');
    }
});
