
    let container = document.getElementById("showna")
    async function getmovie() {
        let moviename = document.getElementById("take").value;
        let res = await fetch(`https://www.omdbapi.com/?apikey=d51aa006&t=${moviename}`)
        let data = await res.json();
        console.log(data);

        showdata(data);
    }

    function showdata(movie) {

        container.innerHTML = null
        let moviename = document.getElementById("take");
        moviename.value = null
        let div = document.createElement("div");
        div.setAttribute("class", "movieholder")
        let img = document.createElement("img");
        img.src = movie.Poster;
        let name = document.createElement("p");
        name.innerHTML = "Movie-Name: " + movie.Title
        let relesedate = document.createElement("p");
        relesedate.innerHTML = "Released-Year: " + movie.Year
        let imdb = document.createElement("p");
        imdb.innerHTML = "ImdbRating: " + movie.imdbRating
        let movietype = document.createElement("p");
        movietype.setAttribute("class", "type")
        movietype.innerHTML = "Type: " + movie.Type
        let recomend = document.createElement("p")
        recomend.innerHTML = "Recommended";
        recomend.setAttribute("class", "recom");
        console.log(movie.imdbRating)
        if (movie.imdbRating > 8.5) {
            recomend.style.display = "block";
        }
        if (movie.Title == undefined) {
            img.src = "https://c.tenor.com/IHdlTRsmcS4AAAAC/404.gif"
        }

        div.append(img, name, relesedate, imdb, movietype, recomend);
        container.append(div);



    }
