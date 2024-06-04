const apiURL = `https://api.themoviedb.org/3/movie/2661?api_key=d3b9affe9c9809159aeb6117fc46afe1`;
const moviesContainer = document.getElementById("movies");
const btnMov = document.querySelector('#btn-mov');


btnMov.addEventListener('click', () => {
    async function fetchMovies() {
        try {
            const response = await fetch(apiURL);
            const data = await response.json();

            const movieCard = createMovieCard(data);
            moviesContainer.appendChild(movieCard);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }

    function createMovieCard(data) {
        const { title, production_companies } = data;

        const movieCard = document.createElement("div");
        movieCard.innerHTML = `
            <div class="movie-title">Título: ${title}</div>
            <div class="production-companies">
                <h3>Compañías de Producción:</h3>
                <ul>
                    ${production_companies.map(company => `<li>${company.name}</li>`).join('')}
                </ul>
            </div>
        `;
        return movieCard;
    }

    fetchMovies();
});



