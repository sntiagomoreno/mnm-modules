import Content from './Menu.html'
import './Menu.scss'


class Menu {
	constructor() {
		this.create = (el) => {
			let container = document.createElement('nav')
			el = document.querySelector(el)
			container.classList.add('site-nav')
			container.innerHTML = Content
			el.appendChild(container)
		}
	}
}

export default Menu