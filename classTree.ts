import { Branch } from "./classBranches";

const rl = require('readline-sync')
export class tree {
    branchs:Branch[]
    constructor(){
        this.branchs = []
    }
    adicionarBrench(branch){
        this.branchs.push(branch)
    }

    acessar():void{
        let frase = ''
        for(let i = 0; this.branchs.length > i; i++){
            frase += this.branchs[i]
        }
        let opcao = rl.questionInt('Escolha: ')
    }
}