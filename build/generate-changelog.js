import cc from 'conventional-changelog'
import concat from 'concat'
import { createWriteStream } from 'fs'
import packageJson from '../package.json'

const { version } = packageJson
const releaseNotesFile = './RELEASE_NOTES.md'
const changelogFile = './CHANGELOG.md'
const releaseNotes = createWriteStream(releaseNotesFile)

config.then(data => {
  const changelogConfig = {
    preset: 'angular',
    pkg: {
      transform (pkg) {
        pkg.version = `v${version}`
        return pkg
      }
    }
  }

  cc(changelogConfig).pipe(releaseNotes).on('close', () => {
    concat([releaseNotesFile, changelogFile], changelogFile)
  })
})
