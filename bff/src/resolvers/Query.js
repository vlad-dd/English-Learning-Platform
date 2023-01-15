const { collection } = require("firebase/firestore")
const { database } = require("../firebase")

const resolvers = {
    Query: {
     info: () => 'works'
    //   async tweets() {
    //     const tweets = await admin
    //       .firestore()
    //       .collection('tweets')
    //       .get();
    //     return tweets.docs.map(tweet => tweet.data()) as Tweet[];
    //   },
    //   async user(_: null, args: { id: string }) {
    //     try {
    //       const userDoc = await admin
    //         .firestore()
    //         .doc(`users/${args.id}`)
    //         .get();
    //       const user = userDoc.data() as User | undefined;
    //       return user || new ValidationError('User ID not found');
    //     } catch (error) {
    //       throw new ApolloError(error);
    //     }
    //   }
    }
  };

module.exports = {
    resolvers
}