let rl = require(`readline-sync`)

export class Branch {
    public nome: string
    public dataCriacao: string
    public commits: string[] = []
    public branches: string[] = []
    public branchPai: Branch
    public historicoCommits: string[] = []

    constructor(nome: string, dataCriacao: string) {
        this.nome = nome
        this.dataCriacao = dataCriacao
    }


    public criarCommit(): void {
        let mensagemCommit = rl.question(`Qual a mensagem do commit que deseja adicionar?\n`)
        this.historicoCommits.push(mensagemCommit)
        console.log(`Commit criado com sucesso! (${mensagemCommit})`)
    }

    public mostrarHistorico(): void {
        console.log(this.historicoCommits)
    }


    public merge(outraBranch: Branch): void {
        // concat do array this.commit com a outraBranch.commit
        for (let i = 0; i > outraBranch.commits.length; i++) {
            this.commits.push(outraBranch.commits[i])
        }
        console.log(`Mergezado com sucesso!`)
    }


    public checkout(): void {

    }

}



export class BranchMaster extends Branch {
    public criarBranch(): void {
        let branchCriada = rl.question(`Qual o nome da Branch que deseja adicionar?\n`)
        console.log(`Branch criada com sucesso! (${branchCriada})`)
    }
}


export class BranchDevelop extends Branch {

    public finalizarSprint(outraBranch = BranchDevelop): void {
    this.merge(new Branch('teste','0/00/0000'))
    this.commits.concat(outraBranch.commits)
        return this.merge[this.merge.length - 1]
    }
}



export class BranchHotfix extends Branch {

    public corrigirBug(descricao): void {
        this.commits.push(descricao)
    }
}



export class BranchFeature extends Branch {

    public implementarFuncionalidade(descricao): void {
        this.commits.push(descricao)
    }
}



export class BranchRelease extends Branch {

    public promoverParaProducao(): void {
        console.log(`Os commits estão prontos para ir a produção!`)
    }
}

let novaBranchMaster = new BranchMaster('testeBranch', '02/09/2024')
let novaBranchDevelop = new BranchDevelop('teste', '11/09/2001')
let novaBranchRelease = new BranchRelease(`teste`, '16/09/2024')
let novaBranchFeature = new BranchFeature('teste', '08/02/2000')
let novaBranchHotfix = new BranchHotfix('teste', '08/09/1500')
let novoCommit = new Branch(`testeCommit`, `02/09/2024`)



//MENUS


let menuPrincipal: boolean = true


function mBP() {
    let menuBranchPai: boolean = true
    while (menuBranchPai) {
        console.log(`
        MENU
        -----------------
        1- Criar nova branch.
        2- Realizar commit.
        3- Fazer merge.
        4- Fazer checkout
        5- Ver histórico.
        0 - Sair.
        -----------------
        `)
        
        
        let pergunta = rl.questionInt(`RESPOSTA:\n`)
        console.clear()
        switch (pergunta) {
            
            
            case 1:
                novaBranchMaster.criarBranch()
                break;
                
                
                case 2:
                    console.log(novoCommit.criarCommit())
                    break;
                    
                    case 3:
                        novoCommit.merge(novaBranchMaster)
                        break;
                        
                        case 4:
                console.log(novaBranchMaster.checkout())
                break;
                
                case 5:
                    novoCommit.mostrarHistorico()
                    break;
                    
                    case 0:
                        console.log(`Fechando...`)
                        menuBranchPai = false;
                        break;
                        
                        default:
                            console.log(`ERRO`)
                            break;
                        }
                    }
                }
                
                
                
                function mBM() {
                    novaBranchMaster.criarBranch()
                }
                
                
                function mBD() {
                    novaBranchDevelop.finalizarSprint()
                }
                
                
                function mBF() {
                    novaBranchFeature.implementarFuncionalidade('')
                }
                
function mBHF() {
        novaBranchHotfix.corrigirBug('')
    }


function mBR() {
        novaBranchRelease.promoverParaProducao()
    }


function mP() {
    while (menuPrincipal) {
        console.log(`
    MENU PRINCIPAL
  -----------------
  1- Branch Pai
  2- Branch Master
  3- Branch Develop
  4- Branch Hotfix
  5- Branch Feature
  6- Branch Release
  0- Sair
`)
        let pergunta = rl.questionInt(`Resposta: `)

        switch (pergunta) {

            case 1:
                mBP()
                break;

            case 2:
                mBM()
                break;

            case 3:
                mBD()
                break;

            case 4:
                mBHF()
                break;

            case 5:
                mBF()
                break;

            case 6:
                mBR()
                break;

            case 0:
                menuPrincipal = false
                console.log(`Saindo...`)

            default:
                console.error("Error")
        }
    }
}
mP()