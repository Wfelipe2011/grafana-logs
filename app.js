const pino = require('pino');

const transport = pino.transport({
    target: "pino-loki",
    options: {
      batching: true,
      interval: 5,
  
      host: 'http://loki:3100',
      basicAuth: {
        username: "username",
        password: "password",
      },
      labels: {  // Adicione as etiquetas aqui
        app: 'log_app',
        job: 'log_job',
      },
    },
  });

const logger = pino(transport);

// Exemplo de registro de log
setInterval(() => {
    logger.info(`Log de informação ${ JSON.stringify({ foo: 'bar' },null,2) }`)
}, 1000);

// Sua lógica da aplicação Node.js aqui
