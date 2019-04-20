import Content from './Downloads.html'
import './Downloads.scss'

class Downloads {
	constructor() {
		this.create = (el) => {
			let container = document.createElement('section')
			el = document.querySelector(el)
			container.classList.add('site-section')
			container.classList.add('border')
			container.innerHTML = Content
			el.appendChild(container)

			
		}
	}
}

export default Downloads