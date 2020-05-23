let search = document.querySelector("#search");

search.addEventListener("keyup",(e)=>{
    let searchText =e.target.value;
    SearchMovies(searchText);
    // when  key press hide form text and h1
    let formText = document.getElementById("divBlock");
    formText.style.display = "none";
    search.classList.add("afterkeyPress");
    document.querySelector("#formBlock").classList.add("afterkey_formBlock");

});

function SearchMovies(searchText) {
    
    const imdbApi = "http://www.omdbapi.com/?s=${searchText}tt3896198&apikey=ac07c5f4";
    window
    .fetch (imdbApi)
    .then ((data ) =>{
        data
        .json()
        .then((movieData) => {
            let movies = movieData.search;
            let output = [];
            for (let movie of movies) {
                console.log (movie);
                output +=
                <div>
                <img src ="${movies.poster}"/>
                <h1>${movie.Title}</h1>
                <p>${movie.Year}</p>

                <a href="http://wwww.imdb.com/title/${movie.imdbID}/" target="_blank">movie Deatails</a>
                
                </div>
                ;
            }
            
            
            document.getElementById("templete").innerHTML=output;
        })
            .catch((err)=>console.log(err))
    })
    
            .catch((err)=>console.log(err))
}

    
    
    

