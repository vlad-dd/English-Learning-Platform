const { default: axios } = require('axios');
const { collection, getDocs } = require('firebase/firestore');
const { database } = require("../../bff-base");

const resolvers = {
  Query: {
    countOfTenses: async(root, { tense }) => {
      console.log('param: ', tense)
      const tweets = collection(database, tense)
      const data = await getDocs(tweets)
      // return (data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      return (data.docs.map((doc) => ({...doc.data()})))
    },
    dictionary: async(root, { word }) => {
      const { data } = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      console.log('dictionary: ', data)
      return data;
    }
  }
}

module.exports = {
    resolvers
}