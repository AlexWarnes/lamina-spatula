export type Lighting = 'phong' | 'physical' | 'toon' | 'basic' | 'lambert' | 'standard';

export interface Recipe {
  name: string;
  src: string;
  alt: string;
  accentColor: string;
  credit: string;
  layerProps: any[];
  scene: any;
  baseLayer: any;
  layers: any[];
}