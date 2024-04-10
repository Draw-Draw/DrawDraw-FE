import { Img2Img2Type } from '../types/Img2ImgType';
import axios from 'axios';

export const PostTxt2Img = async ({
  prompt,
  negative_prompt,
  seed,
  steps,
  width,
  height,
}: Img2Img2Type) => {
  const defaultPrompt = prompt;
  const defaultNegativePrompt =
    'lowres, nsfw, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, (worst quality:1.3), (low quality:1.3), normal quality ,jpeg artifacts, signature, watermark, username, blurry';
  const defaultSeed = -1;
  const defaultSteps = 20;
  const defaultWidth = 1016;
  const defaultHeight = 426;

  const requestData = {
    prompt: defaultPrompt,
    negative_prompt: defaultNegativePrompt,
    seed: defaultSeed,
    steps: defaultSteps,
    width: defaultWidth,
    height: defaultHeight,
  };

  const response = await axios.post(
    'http://127.0.0.1:7860/sdapi/v1/txt2img',
    requestData,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  console.log(response);
  return response.data.images[0];
};
