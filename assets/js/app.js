var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
    'api-key': "44e19de4662d445db0a2832a07549a29",
    'begin_date': "20080217",
    'end_date': "20100502",
    'q': 'fishing'
});
$.ajax({
    url: url,
    method: 'GET',
}).done(function (result) {
    console.log(result);
}).fail(function (err) {
    throw err;
});