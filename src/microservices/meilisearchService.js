require('dotenv').config();
const { MeiliSearch }  = require('meilisearch');

/* const Meili = async () => {
    let meiliclient = new MeiliSearch({
        host: process.env.MEILISEARCH_HOST,
        apiKey: process.env.MEILISEARCH_APIKEY,
    })
    let meiliSearchIndex = meiliclient.index('shortcuts');
}*/
const meiliclient = new MeiliSearch({
    host: process.env.MEILISEARCH_HOST,
    apiKey: process.env.MEILISEARCH_APIKEY,
})
const meiliSearchIndex = meiliclient.index('shortcuts');

const searchShortcut = async (searchQuery, userid) => {
    return meiliSearchIndex.search(searchQuery, {
        filter: `user = ${userid}`
    })
};

const addShortcut = async (userShortcutData) => {
    return await meiliSearchIndex.addDocuments(userShortcutData);
};

const deleteShortcut = async (deleteDocument) => {
    return await meiliSearchIndex.deleteDocument(deleteDocument);
};

  
module.exports = {
    searchShortcut,
    addShortcut,
    deleteShortcut
};
  