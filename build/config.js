import { join } from 'path'
import packageJson from '../package.json'

export const resolvePath = (...args) => {
  const path = [__dirname, '..', ...args]

  return join.apply(null, path)
}

export const config = {
  dist: 'dist',
  public: '/',
  index: 'docs/index.html',
  assets: 'docs/assets',
  server: {
    port: process.env.PORT || '8080'
  },
  resolve: ['.vue', '.scss', '.js', '.json'],
  alias: {
    'vue-store': resolvePath('src'),
    store: resolvePath('docs/app/store'),
    template: resolvePath('docs/app/template')
  }
}

export const pack = packageJson
