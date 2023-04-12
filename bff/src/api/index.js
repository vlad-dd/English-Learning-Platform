const { default: axios } = require('axios');

const BFF_API = {
    async searchForWordInDictionary(word) {
        const { data } = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        return data;
    }
}

module.exports = {
    BFF_API
}