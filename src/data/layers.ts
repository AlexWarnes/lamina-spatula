import type { DepthProps, FresnelProps, NoiseProps } from 'lamina/types';
import { Depth, Fresnel, Noise } from 'lamina/vanilla';

export const newDepthLayer = (props?: DepthProps) => {
	return new Depth(props);
};
export const newFresnelLayer = (props?: FresnelProps) => {
	return new Fresnel(props);
};
export const newNoiseLayer = (props?: NoiseProps) => {
	return new Noise(props);
};

export const extractDepthProps = (layer): DepthProps => {
	const { colorA, colorB, alpha, near, far, origin, mapping, mode, visible } = layer;
	return { colorA, colorB, alpha, near, far, origin, mapping, mode, visible };
};
export const extractFresnelProps = (layer): FresnelProps => {
	const { color, alpha, power, intensity, bias, mode, visible } = layer;
	return { color, alpha, power, intensity, bias, mode, visible };
};
export const extractNoiseProps = (layer): NoiseProps => {
	const { colorA, colorB, colorC, colorD, alpha, scale, type: type, mapping, mode, visible } = layer;
	return { colorA, colorB, colorC, colorD, alpha, scale, type: type, mapping, mode, visible };
};

export const mutateCommonProps = (layer, props): void => {
	/* 
	I have no idea why all the props transfer except for 
	type, mapping, and mode so must manually mutate them here.
	Something buggy with the form-to-state interaction
	*/
	layer.type = props.type;
	layer.mapping = props.mapping;
	layer.mode = props.mode;
}