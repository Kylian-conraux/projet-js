const list_boutons = document.querySelector(".buttons-container");
    const image = document.querySelector(".image img")
    let bouton_cliquer = false;


    function appliqueImage(index) {
        bouton_cliquer = true;

        switch (index) {
            case (0):
                image.setAttribute("src", "res/spaceship1.jpg")

                break
            case (1):
                image.setAttribute("src", "res/spaceship2.jpg")

                break
            case (2):
                image.setAttribute("src", "res/spaceship3.jpg")

                break
            case (3):
                image.setAttribute("src", "res/spaceship4.jpg")

                break
            case (4):
                image.setAttribute("src", "res/spaceship5.jpg")

                break
            default:
                console.log("hors-limite");
                console.log(i)
        }
    }

    // Fonction pour créer un vaisseau spatial avec un event listener
    function creerVaisseau(index) {
        let vaisseau = document.createElement("div");
        let nameSpaceShip = document.createElement("p");
        let nameSpaceShipString = "Space Ship " + index;
        nameSpaceShip.textContent = nameSpaceShipString;
        vaisseau.appendChild(nameSpaceShip);
        list_boutons.appendChild(vaisseau);

        // Ajouter un event listener à chaque vaisseau
        vaisseau.addEventListener('click', function () {
            appliqueImage(index-1); // Appeler une fonction pour changer l'image en fonction de l'index
        });

        vaisseau.addEventListener('mouseover', function(){
            overImage(index-1);
        });
    }

    // Boucle pour créer les boutons
    for (let i = 1; i < 6; i++) {
        creerVaisseau(i);
    }


    function overImage(index) {
        switch (index) {
            case (0):
                image.setAttribute("src", "res/spaceship1.jpg")
                break
            case (1):
                image.setAttribute("src", "res/spaceship2.jpg")

                break
            case (2):
                image.setAttribute("src", "res/spaceship3.jpg")

                break
            case (3):
                image.setAttribute("src", "res/spaceship4.jpg")

                break
            case (4):
                image.setAttribute("src", "res/spaceship5.jpg")

                break
            default:
                console.log("hors-limite");
        }
        console.log(bouton_cliquer);
    }