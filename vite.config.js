import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { remarkCodeHike } from '@code-hike/mdx'
// import { loadTheme } from 'shiki'
import theme from './stripe-blue-color-theme'

export default defineConfig(async () => {
  const mdx = await import('@mdx-js/rollup')
  // const theme = await loadTheme('themes/dracula.json')
  
  const mdxOptions = {
    remarkPlugins: [
      [
        remarkCodeHike,
        {
          theme: theme,
          lineNumbers: true,
          showCopyButton: true
        }
      ]
    ],
  }

  return {
    plugins: [
      react(),
      mdx.default(mdxOptions),
    ],
    resolve: {
      alias: {
        'react/jsx/runtime': 'react/jsx-runtime.js',
      },
    },
    base: 'https://aaronespasa.github.io/stripe-docs-scrollycoding-vite/'
  }
})
