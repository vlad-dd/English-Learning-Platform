const { get } = require('lodash');
const { BFF_API_QUERIES, BFF_MUTATIONS } = require("../api/index");

const resolvers = {
  Query: {
    countOfTenses: async(root, { tense }) => {
      const data = await BFF_API_QUERIES.getVerbConfiguration(tense);
      return (data.docs.map((doc) => ({...doc.data()})))
    },
    dictionary: (root, { word }) => {
      return BFF_API_QUERIES.searchForWordInDictionary(word);
    },
    releases: async() => {
      const data = await BFF_API_QUERIES.getReleasesTimelineConfiguration();
      const logged = data.docs.map((doc) => ({...doc.data()}));
      const releaseConfiguration = get(logged, '[0].releases').reverse();
      return releaseConfiguration;
    },
    grammarByLevel: async(root, { level, theme }) => {
      const grammarDocument = await BFF_API_QUERIES.getGrammarByLevelConfiguration(level, theme);
      return [grammarDocument.data()];
    },
    getTests: async(root, { part, theme }) => {
      const testDocument = await BFF_API_QUERIES.getTestsConfiguration(part, theme);
      return [testDocument.data()];
    }
  },
  Mutation: {
    addComment: async (root, { collection = 'Comments', id = 'Comments', comment, email }) => {
      await BFF_MUTATIONS.addComment(collection, id, comment, email);
    },
    reportComment: async (root, { report }) => {
      await BFF_MUTATIONS.reportComment(report);
    },
    reportApplication: async (root, { report }) => {
      await BFF_MUTATIONS.reportApplication(report);
    }
  } 
};

module.exports = {
    resolvers
}