import { Blob } from "./classBlob"

const rl = require('readline-sync')

export class Commit{
    blobs:Blob[]

    constructor(){
        this.blobs = []
    }
    adicionarBlob(blob:Blob):void{
        this.blobs.push(blob)
    }
}