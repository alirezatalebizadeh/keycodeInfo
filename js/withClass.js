let $ = document


class keyCode {
    constructor() {

        this.locationKey = $.querySelector('#location')
        this.title = $.querySelector('title')
        this.heading = $.querySelector('#heading')
        this.ascii = $.querySelector('#ascii')
        this.infos = $.querySelector('#infos')
        this.starter = $.querySelector('#starter')
        this.keyCode = $.querySelector('#keyCode')
        this.key = $.querySelector('#key')
        this.which = $.querySelector('#which')
        this.code = $.querySelector('#code')

        this.render()
    }

    render() {
        document.body.addEventListener('keydown', (event) => {
            this.showDetailEvent(event)
        })

    }

    //show detail of event
    showDetailEvent(e) {
        console.log(e.code, e.keyCode, e.location)

        this.keyCode.innerHTML = `${e.keyCode}`
        this.key.innerHTML = `${e.key}`
        this.locationKey.innerHTML = `${e.location}`
        this.which.innerHTML = `${e.which}`
        this.code.innerHTML = `${e.code}`
        this.showDom()
    }


    //push detail in dom
    showDom() {
        this.heading.style.display = 'flex'
        this.ascii.style.display = 'flex'
        this.infos.style.display = 'flex'
        this.starter.style.display = 'none'
    }
}


new keyCode()
