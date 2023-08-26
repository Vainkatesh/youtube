

### Important Links Vainkatesh regarding youtube apis



https://developers.google.com/youtube/registering_an_application

https://developers.google.com/youtube/v3/docs/videos/list?apix_params=%7B%22part%22%3A%5B%22snippet%2CcontentDetails%2Cstatistics%22%5D%2C%22chart%22%3A%22mostPopular%22%2C%22regionCode%22%3A%22US%22%7D



#### Debouncing

Debouncing says suppose if you are typing very fast the difference between two key press is very less

typing slow= 200ms
typing fast= 30ms

If we are typing very fast we do not need suggestion for evry key press

Performance:
- iphone pro max = 14 letters * 1000 users = 14000 api calls
- with debouncing= 3 Api calls * 1000 users = 3000 api calls


Debouncing with 200ms means 
- if difference between 2 key strokes is less than 200ms - do not do an api call
- if it is more than 200ms make an api call


### youtube search suggestions api
http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Query