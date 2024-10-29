const envConfig = {
  dev: {
    BASE_URL: 'http://localhost:5173'
  },
  production: {
    BASE_URL: 'https://playolaizq.github.io/cryptographic-ciphers'
  }
};

export function env() {
  if (import.meta?.env?.MODE == 'development') {
    return envConfig.dev;
  }

  return envConfig.production;
}
