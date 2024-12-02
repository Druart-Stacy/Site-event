document.addEventListener("DOMContentLoaded", () => {
    // Rechercher le fichier header.html et insérer son contenu dans #header
    fetch("header.html")
      .then(response => {
        if (!response.ok) {
          throw new Error("Impossible de charger le header");
        }
        return response.text();
      })
      .then(data => {
        document.getElementById("header").innerHTML = data;
      })
      .catch(error => console.error("Erreur :", error));
  });
  