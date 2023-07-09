(async () => {
    const api = require('Jeje-api');
     const url = 'surakarta'
     const result = await api.info.gempa();
     console.log(result)
})();
      