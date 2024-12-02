document.addEventListener("DOMContentLoaded", () => {
    // Rechercher le fichier header.html et insérer son contenu dans #header
    fetch("footer.html")
      .then(response => {
        if (!response.ok) {
          throw new Error("Impossible de charger le footer");
        }
        return response.text();
      })
      .then(data => {
        document.getElementById("footer").innerHTML = data;
      })
      .catch(error => console.error("Erreur :", error));
  });
  