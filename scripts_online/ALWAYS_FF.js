/*window.alert(	window.self.location.toString()+'\n'
		+currentURL
		);*/

/*try{
var node = document.evaluate("//table[@id='no_way_in_hell']", document, null, 9, null).singleNodeValue;
// pas d'erreur
var test = node.nodeValue;
// erreur
}
catch(e) {window.alert('smooth')}*/

function zalert() {
	window.alert(
		'From: '+window.location+'\n'+
		'To: '+window.top.location+'\n'+
		'Main (Play2): '+window.top.Main.location+'\n'+
		'Contenu (Play2/Top): '+window.top.Main.Contenu.location
	);
}

function faitLeDiv() {
	var div = window.top.Main.Contenu.document.createElement('div');
	div.id = 'leDiv';
	window.top.Main.Contenu.document.body.appendChild(div);
}

function choppeLeDiv() {
	var leDiv = window.top.Main.Contenu.document.getElementById('leDiv');
	appendText(leDiv,'Olé.');
}

if(isPage('MH_Play/Play_menu')
	|| false) {
	//zalert();
}

