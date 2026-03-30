
            var favorites= ["Pizza", "Ice Cream", "Chocolate", "VideoGames", "Traveling", "Music", "Movies", "Books", "Cats", "Coloring"];

            document.write("<ul>");

            for(var counter= 0; counter < favorites.length; counter++)
            {
                document.write("<li>" + favorites[counter] + "</li>");
            }
            document.write("</ul>");