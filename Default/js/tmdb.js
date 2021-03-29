var api_key = ""; //TODO insert your unique API KEY here
		var api_url = "https://api.themoviedb.org/3/movie/popular?api_key=" + api_key;
		$.getJSON( api_url, function( data ) {

			$.each( data.results, function( i, item ) {
				var posterFullUrl = "https://image.tmdb.org/t/p/w185//" + item.poster_path;
				$("<div class='col-3 mb-1'><img src='" + posterFullUrl + "'><h5>" + item.title + "</h5></div>").appendTo(".movies");
			});
		});