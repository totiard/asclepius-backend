const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/predict-bucket-11/model.json'); //ganti dengan url untuk model ML kalian
}
module.exports = loadModel;
