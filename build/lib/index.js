import { existsSync, mkdirSync } from 'fs'
import entry from './entry'
import build from './bundle'
import { pack } from '../config'

if (!existsSync('dist')) {
  mkdirSync('dist')
}

build(entry)
