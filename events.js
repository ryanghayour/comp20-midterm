function show_article(which_one)
{
	var articles = document.getElementsByTagName("article");
	for (let i = 0; i< articles.length; i++) {
		articles[i].style.display = "none";
	}
	document.getElementById(which_one).style.display = "block";
}