var httpRequest = new XMLHttpRequest();
var data;
httpRequest.open('GET', 'https://sheetsu.com/apis/v1.0/7654fbe24554', true); // Also try http://444.hu/feed
httpRequest.send(null);
httpRequest.onreadystatechange = function () {
    if(httpRequest.readyState === XMLHttpRequest.DONE) {
        data = JSON.parse(httpRequest.responseText);
    }
};


// Tibi hasonlo cucca:

<html>
<head>
	<meta charset="UTF-8">
	<title>AJAX</title>
</head>
<body>
	<h1>AJAXing really good</h1>
	<script>
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC')
		xhr.send()
		xhr.onreadystatechange = ready

		function ready (rsp) {
			console.log( xhr.readyState )
			if( xhr.readyState === XMLHttpRequest.DONE ) {
				console.log( JSON.parse(xhr.response) )
			}
		}
	</script>
</body>
</html>
