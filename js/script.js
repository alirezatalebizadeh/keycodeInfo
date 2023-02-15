let $ = document
let locationKey = $.querySelector('#location'),
	title = $.querySelector('title'),
	heading = $.querySelector('#heading'),
	ascii = $.querySelector('#ascii'),
	infos = $.querySelector('#infos'),
	starter = $.querySelector('#starter'),
	keyCode = $.querySelector('#keyCode'),
	key = $.querySelector('#key'),
	which = $.querySelector('#which'),
	code = $.querySelector('#code')


//show detail of event
function showDetailEvent(e) {
	// console.log(e.code, e.keyCode, e.location);
	console.log(e);
	keyCode.innerHTML = `${e.keyCode}`
	key.innerHTML = `${e.key}`
	locationKey.innerHTML = `${e.location}`
	which.innerHTML = `${e.which}`
	code.innerHTML = `${e.code}`
	showDom()
}

//push detail in dom
function showDom() {
	heading.style.display = 'flex'
	ascii.style.display = 'flex'
	infos.style.display = 'flex'
	starter.style.display = 'none'
}

document.body.addEventListener('keydown', showDetailEvent)
