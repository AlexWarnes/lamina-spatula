# SPATULA

A tool for building shader materials without the need to stand up a new project. Inspired by the official lamina debugger, it allows for layer editing and generates the JavaScript for your material. You can use that code as a material in any project that uses lamina and threejs.

Made with SvelteKit, lamina, threejs, threlte, and RxJS

## What is lamina? 🍰
From the docs: "Lamina let's you create materials with a declarative system of layers. Layers make it incredibly easy to stack and blend effects."

Learn more: https://github.com/pmndrs/lamina

## Where can I use the generated code?
Anywhere you're using lamina and threejs!

**vanilla js:**
```javascript
const mesh = new THREE.Mesh(geometry, laminaMaterial)
```

**threlte:**
```html
<Mesh {geometry} material={laminaMaterial} />
```

## What if I'm using React?
If you have a react-three-fiber project, you'll be better off using lamina's r3f imports instead of the vanilla js code. The official debugger allows more fine tuning and JSX code copying. There's a whole suite of amazing tools available for r3f from the Poimandres collective: https://github.com/pmndrs

