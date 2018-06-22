var begindate = $('#searchParameters [name=start]').val().trim();
var enddate = $('#searchParameters [name=end]').val().trim();
var query = $('#searchParameters [name=searchTerm]').val().trim();

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=44e19de4662d445db0a2832a07549a29";
if (begindate !== '') url += "&begin_date=" + begindate;
if (enddate !== '') url += "&end_date=" + enddate;
if (query !== '') url += "&q=" + query;

$.ajax({
    url: url,
    method: 'GET',
}).done(function (result) {
    console.log(result);
}).fail(function (err) {
    throw err;
});