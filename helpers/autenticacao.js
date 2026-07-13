import http from 'k6/http' // importação do módulo que vamos usar
const postLogin = JSON.parse (open('../fixtures/postLogin.json')) //importação do arquivo json que contém o payload da requisição

export function obterToken() {
    const url = 'http://localhost:3000/login';

    const payload = JSON.stringify(postLogin); //payload é o corpo da requisição, que vai ser enviado para o endpoint

    const params = { //params é o cabeçalho da requisição, que vai ser enviado para o endpoint
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = http.post(url, payload, params);

    return res.json('token');

}