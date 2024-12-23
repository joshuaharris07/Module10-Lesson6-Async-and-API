const publicKey = '395b039a512daba85f64408c3f5777fe';
const privateKey = '5ccf757653e5cbc7ad8ce102bf155b155f7f0487';

// Function to fetch Marvel characters
async function fetchCharacters() {
    const ts = Date.now().toString(); // Timestamp set to be a string
    const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();    // Generate hash using timestamp, publicKey, and privateKey

    const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    try {
        const response = await fetch(url);
        const characterData = await response.json();
        return characterData.data.results;
    } catch (error) {
        console.error('Error fetching character information:', error);
    }
}

// Function to dynamically update UI with fetched characters
function updateUI(characters) {
    const characterList = document.getElementById('character-list');

    characters.forEach(character => {
        const characterDiv = document.createElement('div');
        characterDiv.classList.add('col-md-4'); // Using Bootstrap column classes

        characterDiv.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h3 class="card-title">${character.name}</h3>
                    <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}" class="card-img-top">
                    <p class="card-text">${character.description || 'No description available.'}</p>
                </div>
            </div>
        `;

        characterList.appendChild(characterDiv);
    });
}


// Event listener for the Fetch button
document.getElementById('fetch-button').addEventListener('click', async () => {
    const characters = await fetchCharacters(); // Fetch characters
    if (characters) {
        updateUI(characters); // Update UI
    }
});