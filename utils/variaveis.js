//transformar o confi local em um objeto para pode usar aqui 
const configLocal = JSON.parse(open('../config/config.local.json'));

export function pegarBaseURL () {
    return __ENV.BASE_URL || configLocal.baseUrl; //se a variável de ambiente não estiver definida, ele vai pegar o valor do config.local.json
}