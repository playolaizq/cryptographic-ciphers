const envConfig = {
  dev: {
    BASE_URL: 'http://localhost:5173'
  },
  production: {
    BASE_URL: 'https://playolaizq.github.io/cryptographic-ciphers'
  }
};

export function env() {
  return import.meta.env.MODE == 'development' ? envConfig.dev : envConfig.production;
}
