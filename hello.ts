import { promises as fs } from 'fs'
import path from 'path'

;(async () => {
  await fs.writeFile(path.resolve(__dirname, './hello.txt'), 'hello world!', 'utf-8')
  console.log('write!')
})()
