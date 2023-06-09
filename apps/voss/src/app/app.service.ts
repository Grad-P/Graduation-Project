import * as tf from '@tensorflow/tfjs-node';
import path from 'path';
import sharp from 'sharp';

export class MlService {
  private model: tf.LayersModel;

  constructor() {
    this.loadModel();
  }

  private async loadModel() {
    const modelPath = path.resolve('../Graduation-Project/apps/voss/src/model');
    this.model = await tf.loadLayersModel(`file://${modelPath}/model.json`);
    this.model.summary();
  }

  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  async predict(image): Promise<any> {
    const preprocessedImage = await this.preprocessImage(image);
    const reshapedImage = preprocessedImage.expandDims(0);
    const predictions = (await this.model.predict(reshapedImage)) as tf.Tensor;
    return parseFloat(
      (await this.postprocessPredictions(predictions)).toString()
    );
  }

  async preprocessImage(image): Promise<tf.Tensor4D> {
    const resizedImage = await sharp(image).resize(256, 256).toBuffer();
    const preprocessedImage = tf.node.decodeImage(resizedImage);
    const floatImage = preprocessedImage.toFloat();
    const normalizedImage = tf.div(tf.sub(floatImage, 127.5), 127.5);
    return normalizedImage as tf.Tensor4D;
  }
  async postprocessPredictions(
    predictions: tf.Tensor
  ): Promise<
    | number
    | number[]
    | number[][]
    | number[][][]
    | number[][][][]
    | number[][][][][]
    | number[][][][][][]
  > {
    const result = await predictions.arraySync();

    return result;
  }
}
