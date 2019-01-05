function getData() {

    var api = "http://api.giphy.com/v1/gifs/search?",
        apiKey = "&api_key=JhNLKxFzL00Jc6ripvyzatIVPFcZj1gi",
        query = "&q=",
        limit = "&limit=10",
        rating = "&rating=g",
        search = $("#search").val(),
        url = $.get(api + query + search + apiKey + limit + rating);

    url.done(
        function(response) {
            console.log(response);
            var gifs = response.data;
            for (i in gifs) {
                $('.inner').append(
                    "<div class='d-inline-flex flex-column'><h1 class='py-2 font-weight-bold text-center'>Rating : "+rating[8]+"</h1>" + 
                    "<img src='"+gifs[i].images.original_still.url+"' class='img mx-2 rounded'></div>"
                );
                $('#button').click(function(){
                    $('img').remove();
                    $('h1').remove();
                })
            }
        }
    )
    $('body').on('click', 'img', function() {
        var src = $(this).attr("src");
        if($(this).hasClass('playing')){
            $(this).attr('src', src.replace(/\.gif/i, "_s.gif")) // <--- Found this after looking for awhile and still not really sure what the /\.gif/i is doing other than finding that maybe its like saying "only replace these like literal parts of the code"
            $(this).removeClass('playing');
        } else {
            $(this).addClass('playing');
            $(this).attr('src', src.replace(/\_s.gif/i, ".gif"))
        }
    });
}