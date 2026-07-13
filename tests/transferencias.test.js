import http from 'k6/http';
import { sleep, check } from 'k6';
import { obterToken } from '../helpers/autenticacao.js'
import {pegarBaseURL} from '../utils/variaveis.js' // importação da função pegarBaseURL do arquivo variaveis.js


export const options = {
  iterations: 1,
};

export default function () {
  const token = obterToken();

  const url = pegarBaseURL() +'/transferencias';

  const payload = JSON.stringify({
    contaOrigem: 1,
    contaDestino: 2,
    valor: 11,
    token: ""
  });

  const params = { //params é o cabeçalho da requisição, que vai ser enviado para o endpoint
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
  };


  let res = http.post(url, payload, params);

  check(res, {
    "status is 201": (res) => res.status === 201

  });

  sleep(1);
}
