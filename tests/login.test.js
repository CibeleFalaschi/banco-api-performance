import http from 'k6/http' // importação do módulo que vamos usar
import { sleep, check } from 'k6' // importação das funções do K6 que vamos usar
const postLogin = JSON.parse (open('../fixtures/postLogin.json')) //importação do arquivo json que contém o payload da requisição

//configurações de como será o teste
export const options = {
  
  stages: [ //stages é uma configuração que define como será o teste
    { duration: '10s', target: 10 }, //10 segundos de teste, com 10 usuários virtuais
    { duration: '20s', target: 10 }, //20 segundos de teste, com 10 usuários virtuais
    { duration: '10s', target: 30 }, //10 segundos de teste, com 30 usuários virtuais
    { duration: '20s', target: 30 },
    { duration: '20s', target: 0 }

  ],
  
  thresholds: { //thresholds é uma configuração que define os limites de sucesso do teste
    http_req_duration:['p(90) <3000 ', 'max<5000'], //90% das requisições devem ter duração menor que 900ms
    http_req_failed: ['rate<0.01'] //menos de 1% das requisições podem falhar
  }
};

// Este é o TESTE - não pode ter vários (documentação do grafana k6.)
export default function () {
    const url = 'http://localhost:3000/login';
   
    const payload = JSON.stringify(postLogin); //payload é o corpo da requisição, que vai ser enviado para o endpoint

    const params = { //params é o cabeçalho da requisição, que vai ser enviado para o endpoint
    headers: {
      'Content-Type': 'application/json',
    },
  };

    const res =http.post(url, payload, params);

    check(res, { //check é uma função que verifica se a resposta da requisição está correta
      'Validade que o status code é 200': (r) => r.status === 200, // o r representa o res.
      'Validar que o token é string': (r) => typeof r.json().token == 'string' //verifica se o token é uma string
    })
    sleep(1); //sleep é uma função que faz o teste esperar 1 segundo antes de executar a próxima iteração
  
}