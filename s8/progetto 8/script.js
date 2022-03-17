fetch('Abbigliamento.json')
    .then(function (response) { return response.json(); })
    .then(function (vestiti) {
    vestiti.forEach(function (item) {
        var vestiti = new Abbigliamento(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo);
        console.log(vestiti);
    });
});
var Abbigliamento = /** @class */ (function () {
    function Abbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    Abbigliamento.prototype.getsaldocapo = function () {
        return Math.floor(this.prezzoivainclusa * (this.saldo / 100));
    };
    Abbigliamento.prototype.getacquistocapo = function () {
        return this.prezzoivainclusa - this.getsaldocapo();
    };
    return Abbigliamento;
}());
var guccio = new Abbigliamento(100, 20220, "autunno", "felpa", 2522, 60, "blue", 120, 146.4, "in magazzino", 50);
console.log(guccio);
console.log("saldo - " + guccio.getsaldocapo());
console.log("prezzo finale =" + guccio.getsaldocapo());
var abibas = new Abbigliamento(200, 20450, "estate", "camica", 2542, 64, "white", 200, 249, "in magazzino", 40);
console.log(abibas);
console.log("saldo - " + abibas.getsaldocapo());
console.log("prezzo finale =" + abibas.getsaldocapo());
var cat = new Abbigliamento(120, 30220, "autunno", "pantalone", 5522, 70, "black", 800, 846.4, "in magazzino", 50);
console.log(cat);
console.log("saldo - " + cat.getsaldocapo());
console.log("prezzo finale =" + cat.getsaldocapo());
