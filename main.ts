
import { Branch } from './classBranches'
import { Commit } from './classCommits'
import { Blob } from './classBlob'
import { Repositorio } from './repositorio'

let blob1 = new Blob('lkjyfgn')
let commit1 = new Commit()
commit1.adicionarBlob(blob1)
let branch1 = new Branch()
let repositorio1 = new Repositorio()
