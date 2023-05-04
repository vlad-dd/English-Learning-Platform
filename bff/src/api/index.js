const { collection, getDocs, doc, getDoc, updateDoc } = require('firebase/firestore');
const { default: axios } = require('axios');
const { database } = require("../../bff-base");
const { uid, generateDate } = require('../utils/utils');

const mergeDataWithDocument = async (collection, document, newData, container) => {
    const docRef = doc(database, collection, document);
    const docSnap = await getDoc(docRef);
    const existingData = docSnap.exists() ? docSnap.data() : {};
    const mergedData = {
        [container]: [...(existingData[container] || []), newData]
      };
    await updateDoc(docRef, mergedData);
}

const BFF_API_QUERIES = {
    getVerbConfiguration(tense) {
        return getDocs(collection(database, tense));
    },
    getReleasesTimelineConfiguration() {
        return getDocs(collection(database, 'Releases'));
    },
    getGrammarByLevelConfiguration(level, theme) {
        return getDoc(doc(database, level, theme));
    },
    getTestsConfiguration(part, theme) {
        return getDoc(doc(database, part, theme));
    },
    async searchForWordInDictionary(word) {
        const { data } = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        return data;
    },
};

const BFF_MUTATIONS = {
    async addComment(collection, id, comment, email) {
        await mergeDataWithDocument(collection, id, { id: uid(9), date: generateDate() , comment, email }, "comments");
    },
    async reportComment(report) {
        await mergeDataWithDocument("Support", "Report-Comment", { id: uid(9), report }, "reports");
    },
    async reportApplication(report) {
        await mergeDataWithDocument("Support", "Report-App", { id: uid(9), report }, 'reports');
    },
    async reportUserProfile(report) {
        await mergeDataWithDocument("Support", "Report-User", { id: uid(9), report }, 'reports');
    },
};

module.exports = {
    BFF_API_QUERIES,
    BFF_MUTATIONS
}