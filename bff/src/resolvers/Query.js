const { default: axios } = require('axios');
const { collection, getDocs, doc, getDoc, updateDoc } = require('firebase/firestore');
const { get } = require('lodash');
const { database } = require("../../bff-base");

const uid = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter ++;
  }
  return result;
}

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
    },
    grammarByLevel: async(root, { level, theme }) => {
      const grammarConfiguration = doc(database, level, theme)
      const grammarDocument = await getDoc(grammarConfiguration)
      console.log(grammarDocument.data())
      return [grammarDocument.data()];
    },
    getTests: async(root, { part, theme }) => {
      const testConfiguration = doc(database, part, theme)
      const testDocument = await getDoc(testConfiguration)
      console.log(testDocument.data())
      return [testDocument.data()];
    }
  },
  Mutation: {
    addComment: async (root, { collection = 'Comments', id = 'Comments', comment }) => {
      const date = new Date();
      const datetime = date.getDate() + "/"
        + (date.getMonth() + 1) + "/"
        + date.getFullYear()
      const docRef = doc(database, collection, id);
      const docSnap = await getDoc(docRef);
      const existingData = docSnap.exists() ? docSnap.data() : {};
      const newData = {
        comments: [...(existingData.comments || []), { id: uid(9), date: datetime , comment }]
      };
      await updateDoc(docRef, newData);
    }
  }
  
}

module.exports = {
    resolvers
}