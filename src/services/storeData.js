const { Firestore } = require('@google-cloud/firestore');
const path = require('path');

const pathKey = path.resolve(__dirname, '../submissionmlgc-toti-8384c2fcc7dc.json'); //ganti dengan nama file security kalian, lalu tempatkan didalam folder ../src/(security_key)
     
async function storeData(id, data) {

  try {
    const db = new Firestore({
      projectId: 'submissionmlgc-toti-11', //ganti dengan Project ID kalian
      keyFilename: pathKey,
    });
 
    const predictCollection = db.collection('predictions');
    return predictCollection.doc(id).set(data);
  }catch(error) {
    console.error(error);
  }
}
 
module.exports = storeData;
