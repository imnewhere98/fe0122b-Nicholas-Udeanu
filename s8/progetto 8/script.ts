fetch('Abbigliamento.json')
    .then(response => response.json())
    .then(vestiti =>{
        vestiti.forEach((item: Abbigliamento) =>{
            
            let vestiti = new Abbigliamento(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo)
            
            console.log(vestiti)
            

            
        })
           
    })

    class Abbigliamento {
        id:number
        codprod:number
        collezione:string
        capo:string
        modello:number
        quantita:number
        colore:string
        prezzoivaesclusa:number
        prezzoivainclusa:number
        disponibile:string
        saldo:number

        constructor(id:number, codprod:number, collezione:string, capo:string, modello:number, quantita:number, colore:string,prezzoivaesclusa:number, prezzoivainclusa:number, disponibile:string, saldo:number){
            this.id = id
            this.codprod = codprod
            this.collezione = collezione
            this.capo = capo
            this.modello = modello
            this.quantita = quantita
            this.colore = colore
            this.prezzoivaesclusa = prezzoivaesclusa
            this.prezzoivainclusa = prezzoivainclusa
            this.disponibile = disponibile
            this.saldo = saldo

        }
        getsaldocapo():number{
            return Math.floor(this.prezzoivainclusa * (this.saldo /100))
        
        }
        getacquistocapo():number{
            return this.prezzoivainclusa - this.getsaldocapo()
        }

    }

    let guccio = new Abbigliamento(100, 20220, "autunno", "felpa", 2522, 60, "blue", 120, 146.4, "in magazzino", 50)

    console.log(guccio)
    console.log("saldo - " + guccio.getsaldocapo())
    console.log("prezzo finale =" + guccio.getsaldocapo())

    let abibas = new Abbigliamento(200, 20450, "estate", "camica", 2542, 64, "white", 200, 249, "in magazzino", 40)

    console.log(abibas)
    console.log("saldo - " + abibas.getsaldocapo())
    console.log("prezzo finale =" + abibas.getsaldocapo())

    

    let cat = new Abbigliamento(120, 30220, "autunno", "pantalone", 5522, 70, "black", 800, 846.4, "in magazzino", 50)

    console.log(cat)
    console.log("saldo - " + cat.getsaldocapo())
    console.log("prezzo finale =" + cat.getsaldocapo())


