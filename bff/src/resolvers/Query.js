const { collection, getDocs, doc, getDoc, updateDoc } = require('firebase/firestore');
const { get } = require('lodash');
const { database } = require("../../bff-base");
const { BFF_API } = require("../api/index");
const { 
  uid,
  generateDate
} = require("../utils/utils");

const resolvers = {
  Query: {
    countOfTenses: async(root, { tense }) => {
      const data = await getDocs(collection(database, tense));
      return (data.docs.map((doc) => ({...doc.data()})))
    },
    dictionary: (root, { word }) => {
      return BFF_API.searchForWordInDictionary(word);
    },
    releases: async() => {
      const data = await getDocs(collection(database, 'Releases'))
      const logged = data.docs.map((doc) => ({...doc.data()}));
      const releaseConfiguration = get(logged, '[0].releases').reverse();
      return releaseConfiguration;
    },
    grammarByLevel: async(root, { level, theme }) => {
      const grammarConfiguration = doc(database, level, theme);
      const grammarDocument = await getDoc(grammarConfiguration)
      return [grammarDocument.data()];
    },
    getTests: async(root, { part, theme }) => {
      const testConfiguration = doc(database, part, theme)
      const testDocument = await getDoc(testConfiguration)
      return [testDocument.data()];
    }
  },
  Mutation: {
    addComment: async (root, { collection = 'Comments', id = 'Comments', comment }) => {
      const docRef = doc(database, collection, id);
      const docSnap = await getDoc(docRef);
      const existingData = docSnap.exists() ? docSnap.data() : {};
      const newData = {
        comments: [...(existingData.comments || []), { id: uid(9), date: generateDate() , comment }]
      };
      await updateDoc(docRef, newData);
    }
  }
  
}

module.exports = {
    resolvers
}