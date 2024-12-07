const { Firestore } = require('@google-cloud/firestore');
const path = require('path');

const pathKey = path.resolve(__dirname, '../submissionmlgc-toti-8384c2fcc7dc.json');
     
async function storeData(id, data) {

  try {
    const db = new Firestore({
      projectId: 'submissionmlgc-toti',
      keyFilename: pathKey,
    });
 
    const predictCollection = db.collection('predictions');
    return predictCollection.doc(id).set(data);
  }catch(error) {
    console.error(error);
  }
}
 
module.exports = storeData;
