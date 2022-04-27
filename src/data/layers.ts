import type {
	ColorProps,
	DepthProps,
	DisplaceProps,
	FresnelProps,
	GradientProps,
	NoiseProps
} from 'lamina/types';
import { Color, Depth, Displace, Fresnel, Gradient, Noise } from 'lamina/vanilla';

export const newDepthLayer = (props?: DepthProps) => {
	return new Depth(props);
};
export const newFresnelLayer = (props?: FresnelProps) => {
	return new Fresnel(props);
};
export const newNoiseLayer = (props?: NoiseProps) => {
	return new Noise(props);
};
export const newDisplaceLayer = (props?: DisplaceProps) => {
	return new Displace(props);
};
export const newGradientLayer = (props?: GradientProps) => {
	return new Gradient(props);
};
export const newColorLayer = (props?: ColorProps) => {
	return new Color(props);
};

export const extractDepthProps = (layer): DepthProps => {
	const { colorA, colorB, alpha, near, far, origin, mapping, mode, visible, uuid } = layer;
	return { colorA, colorB, alpha, near, far, origin, mapping, mode, visible, uuid };
};
export const extractFresnelProps = (layer): FresnelProps => {
	const { color, alpha, power, intensity, bias, mode, visible, uuid } = layer;
	return { color, alpha, power, intensity, bias, mode, visible, uuid };
};
export const extractNoiseProps = (layer): NoiseProps => {
	const {
		colorA,
		colorB,
		colorC,
		colorD,
		alpha,
		scale,
		type,
		offset,
		mapping,
		mode,
		visible,
		uuid
	} = layer;
	return {
		colorA,
		colorB,
		colorC,
		colorD,
		alpha,
		scale,
		type,
		offset,
		mapping,
		mode,
		visible,
		uuid
	};
};
export const extractDisplaceProps = (layer): DisplaceProps => {
	const { strength, scale, type, offset, mapping, mode, visible, uuid } = layer;
	return { strength, scale, type, offset, mapping, mode, visible, uuid };
};
export const extractGradientProps = (layer): GradientProps => {
	const { colorA, colorB, alpha, contrast, start, end, axes, mapping, visible, uuid } = layer;
	return { colorA, colorB, alpha, contrast, start, end, axes, mapping, visible, uuid };
};
export const extractColorProps = (layer): ColorProps => {
	const { color, alpha, mode, visible, uuid } = layer;
	return { color, alpha, mode, visible, uuid };
};

export const mutateCommonProps = (layer, props): void => {
	if (!props) return;
	/* 
	Must manually mutate some props here bc of a little bug.
	*/
	for (let [k, v] of Object.entries(props)) {
		if (layer.hasOwnProperty(k)) {
			layer[k] = v;
		}
	}	
};
