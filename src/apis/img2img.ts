import { client } from './client';
import { Img2Img2Type } from '../types/Img2ImgType';
import axios from 'axios';

export const PostImg2Img = async ({
  prompt,
  negative_prompt,
  seed,
  steps,
  init_images,
  include_init_images,
  width,
  height,
}: Img2Img2Type) => {
  const defaultPrompt = prompt;
  const defaultNegativePrompt =
    'lowres, nsfw, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, (worst quality:1.3), (low quality:1.3), normal quality ,jpeg artifacts, signature, watermark, username, blurry';
  const defaultSeed = -1;
  const defaultSteps = 20;
  const defaultIncludeInitImages = true;
  const defaultWidth = 1016;
  const defaultHeight = 426;

  const requestData = {
    prompt: defaultPrompt,
    negative_prompt: defaultNegativePrompt,
    seed: defaultSeed,
    steps: defaultSteps,
    init_images: init_images,
    include_init_images: defaultIncludeInitImages,
    width: defaultWidth,
    height: defaultHeight,
  };

  const response = await axios.post(
    'https://a2808beebac145a77b.gradio.live/sdapi/v1/img2img',
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
