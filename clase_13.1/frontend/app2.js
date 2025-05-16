// Esperar a que cargue todo el DOM
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("movieForm");

  // Creamos un array para almacenar las películas
  const movies = [];

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita que se recargue la página

    const title = document.getElementById("title").value.trim();
    const rating = parseFloat(document.getElementById("rating").value);

    // Validación simple
    if (!title || isNaN(rating) || rating < 0 || rating > 10) {
      alert("Por favor ingresá un título válido y un rating entre 0 y 10.");
      return;
    }

    // Crear objeto película
    const movie = {
      title,
      rating,
      id: crypto.randomUUID(), // Genera un ID único
    };

    // Guardar en array
    movies.push(movie);

    // Mostrar en consola
    console.log("Película agregada:", movie);
    console.log("Lista completa:", movies);

    // Reiniciar el formulario
    form.reset();
  });
});
