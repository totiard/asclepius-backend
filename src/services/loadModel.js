const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/mlgc-predict/model.json');
}
module.exports = loadModel;