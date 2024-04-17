// Create a Page class (Parent)
class Page {
    constructor(url) {
        this.url = url
    }

    open() {
        console.log('Opening page', this.url)
    }

    refresh(){
        console.log('Refreshing...')
    }
}

// Create a Contact Page (child) class
class ContactPage extends Page {
    constructor(url, title){
        super(url)
        this.title = title
    }
    open() {
        console.log('Opening page', this.url, 'with title', this.title)
    }
    get loginBtn(){
        console.log('login btn selector')
    }
}

class HomePage extends Page {
    constructor(url, title){
        super(url)
        this.title = title
    }
    open() {
        console.log('Opening page', this.url, 'with title', this.title)
    }
    get loginBtn(){
        console.log('login btn selector')
    }

}

// Create an instance of the Page class
const p1 = new Page('https://practice.sdetunicorns.com')
console.log(p1.url)
p1.open()

const p2 = new Page('https://google.com')
console.log(p2.url)
p1.open()
p2.refresh()



// Create an instance of the Contact Page class
const contact = new ContactPage('https://helsinginsanomat.com', 'Contact Page')
contact.open()
contact.loginBtn


// Create an instance of the Home Page class
const homepage = new HomePage('https://iltasanomat.com', 'Home Page')
homepage.open()
contact.loginBtn
