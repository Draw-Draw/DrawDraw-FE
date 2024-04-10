export interface Img2Img2Type {
  prompt?: string;
  negative_prompt?: string;
  seed?: number;
  steps?: number;
  init_images?: string[];
  include_init_images?: boolean;
  width?: number;
  height?: number;
}
