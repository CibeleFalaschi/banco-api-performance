import http from 'k6/http' // importação do módulo que vamos usar
import {pegarBaseURL} from '../utils/variaveis.js' // importação da função pegarBaseURL do arquivo variaveis.js

const postLogin = JSON.parse (open('../fixtures/postLogin.json')) //importação do arquivo json que contém o payload da requisição

export function obterToken() {
    const url = pegarBaseURL() + '/login';

    const payload = JSON.stringify(postLogin); //payload é o corpo da requisição, que vai ser enviado para o endpoint

    const params = { //params é o cabeçalho da requisição, que vai ser enviado para o endpoint
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = http.post(url, payload, params);

    return res.json('token');

}