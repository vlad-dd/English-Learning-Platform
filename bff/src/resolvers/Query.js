const { default: axios } = require('axios');
const { collection, getDocs } = require('firebase/firestore');
const { get } = require('lodash');
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
    },
    releases: async() => {
      const tweets = collection(database, 'Releases')
      const data = await getDocs(tweets)
      const logged = data.docs.map((doc) => ({...doc.data()}));
      const releaseConfiguration = get(logged, '[0].releases').reverse();
      console.log('Releases: ', releaseConfiguration)
      return releaseConfiguration;
    }
  }
}

module.exports = {
    resolvers
}