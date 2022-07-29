# Stripe Docs with Scrollycoding using Code Hike & React
> ⚠️ The purpose is to replicate [this project](https://github.com/code-hike/not-stripe) from [pomber](https://github.com/pomber) **without using NextJS**, using just React & Vite!

The page we're replicating in this repo: https://stripe.com/docs/checkout/quickstart

## 🎉 [Click Here to see this Project's Website](https://aaronespasa.github.io/stripe-docs-scrollycoding-vite/)

## 🛠 Tools
#### Frontend build tool
[**Vite**](https://vitejs.dev/): It's faster than CRA (as it uses Rollup + Esbuild instead of Webpack) and it comes with a config file that eases the configuration of the building.

#### Frontend library
[**React**](https://reactjs.org/): It's the most popular frontend library in the world.

Main React libraries:
- [**@mdx-js/rollup**](https://mdxjs.com/packages/rollup/): Vite uses Rollup for its bundling, so we need to use this loader to convert MDX files to React components.
- [**@code-hike/mdx**](https://codehike.org/): Allows us to use the ScrollyCoding component inside the Markdown files.
