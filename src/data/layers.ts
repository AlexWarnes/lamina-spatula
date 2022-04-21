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
	const { colorA, colorB, colorC, colorD, alpha, scale, type, mapping, mode, visible, uuid } = layer;
	return { colorA, colorB, colorC, colorD, alpha, scale, type: type, mapping, mode, visible, uuid };
};
export const extractDisplaceProps = (layer): DisplaceProps => {
	const { strength, scale, type, mapping, mode, visible, uuid } = layer;
	return { strength, scale, type, mapping, mode, visible, uuid };
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
	/* 
	I have no idea why all the props transfer except for 
	type, mapping, and mode so must manually mutate them here.
	Something buggy with the form-to-state interaction
	*/
	layer.type ? (layer.type = props.type) : null;
	layer.mapping ? (layer.mapping = props.mapping) : null;
	layer.mode ? (layer.mode = props.mode) : null;
	layer.axes ? (layer.axes = props.axes) : null;
	layer.uuid = props.uuid;
};
