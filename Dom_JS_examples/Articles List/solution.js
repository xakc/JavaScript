function createArticle() {
	
	let titleInputElement = document.getElementById('createTitle');
	let contentInputElement = document.getElementById('createContent');


	let headingElement = document.createElement('h3');
	headingElement.innerHTML = titleInputElement.value;
	titleInputElement.value='';

	let contentElement = document.createElement('p');
	contentElement.innerHTML =  contentInputElement.value;
	contentInputElement.value = '';

	let articleElement = document.createElement('article');
    articleElement.append(headingElement);
	articleElement.append(contentElement);

	let articleSectionElement = document.getElementById('articles');
	articleSectionElement.append(articleElement);

}