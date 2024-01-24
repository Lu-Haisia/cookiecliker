let yscore = 0; // Score
let upgradeMultiply = 1; // Amélioration qui permeyttra de multiplier le score par sa valeur (yscore * upgradeMultiply)
let affichage = document.getElementById('yscoreaffich'); // Afficher le score

let multiply = document.getElementById('multiply'); // Afficher le nombre d'amélioration, correspond au nombre de fois qu'on l'as amélioré est multiplier par ce nombre à chaque clicks.
let multiplyPrix = document.getElementById('multiplyPrix'); // Affiche le prix de l'amélioration

let addCookies = document.getElementById('add'); // Ajouter x cookies toutes les tant de secondes 
let addePrix = document.getElementById('addPrix')

let nombreDeCookie = document.getElementById('numberCookie')// Afficher le nombre de cookies
let cookiesParSeconde = document.getElementById('secondCookie') // Afficher les cookies / tant de seconde

let addnbrcookie = 10
let multiprix = 10
let addPrix = 100
let temps = 15000
let boucleok = false

function clicker() {
    const clickbouton = document.getElementById('cookie');
    clickbouton.addEventListener('click', () => {
        if (upgradeMultiply <= 1) {
            yscore++
        }
        else{
            yscore+= upgradeMultiply
        }
        affichage.textContent = yscore
    })}; // Fonction qui permet d'incrémenter le score de 1 à chaque click sur le bouton


function upgrade(){
    const upbutton = document.getElementById('upgradeMultiply')
    upbutton.addEventListener('click', () => {
        if (yscore - multiprix >= 0){
            yscore -= multiprix // Retirer le prix 
            affichage.textContent = yscore // Afficher le nouveau score

            if (upgradeMultiply <= 10){
                upgradeMultiply++    // Ajouter +1 au nombre de cookies
                multiply.textContent++ // Ajouter +1 a l'affichage du nombre de cookies
                multiprix = multiprix+multiprix+5 // Rédfinir le prix
            } 
            else if (upgradeMultiply <= 100){
                upgradeMultiply+=10
                multiply.textContent+=10
                multiprix = multiprix+multiprix+20 // Rédfinir le prix
            }
            else {
                upgradeMultiply+=100
                multiply.textContent+=100
                multiprix = multiprix+multiprix+30 // Rédfinir le prix
            }
            multiplyPrix.textContent = multiprix // Afficher le prix
            return upgradeMultiply
        }
        else{
            alert('NOT ENOUGHT COOKIES !!! FEED ME MORE !')
        }
    })
}

function addcookie(){
    const addbutton = document.getElementById('upgradeadd')
    nombreDeCookie.textContent = addnbrcookie
    if (temps >= 10000){
        cookiesParSeconde.textContent = temps/1000
    }
    else if (temps > 1000) {
        cookiesParSeconde.textContent = temps/1000
    }
    else{
        cookiesParSeconde.textContent = 1
    }
    addbutton.addEventListener('click', () => {
        if (yscore - addPrix >=0){
            boucleok = true // Activer le setInterval
            yscore-=addPrix // Retirer le prix 
             // Multiplier pa 2 l'ajout des cookies automatiques
            if (temps > 1000) {
                temps /= 2
                yscore+= addnbrcookie
                addnbrcookie*=2
                addPrix *= 3// Rédéfinir le prix de l'upgrade
                console.log(temps)
            }
            else{
                temps = 1000
                yscore+= addnbrcookie
                addnbrcookie*=3
                addPrix *= 2// Rédéfinir le prix de l'upgrade
                console.log(temps)
            }
            console.log(temps)// Test
            addePrix.textContent = addPrix
            affichage.textContent = yscore
            addCookies.textContent = addnbrcookie/2
            setInterval(() => { 
                console.log('temps', temps)
                if (boucleok == true){
                    yscore+= addnbrcookie/2 
                    affichage.textContent = yscore
                }
            }, temps);
            nombreDeCookie.textContent = addnbrcookie
            if (temps >= 10000){
                cookiesParSeconde.textContent = temps/10000
            }
            else if (temps > 1000) {
                cookiesParSeconde.textContent = temps/1000
            }
            else{
                cookiesParSeconde.textContent = 1
            }
        }
        
        else{
            alert('NOT ENOUGHT COOKIES !!! FEED ME MORE !')
        }
    })

}


affichage.textContent = yscore
multiply.textContent = upgradeMultiply
multiplyPrix.textContent = multiprix
addCookies.textContent = addnbrcookie
addePrix.textContent = addPrix

clicker();
upgrade();
addcookie();

