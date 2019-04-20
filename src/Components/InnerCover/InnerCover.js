import Content from './InnerCover.html'
import './InnerCover.scss'
import './InnerCover.scss'

class HomeAgenda {
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

export default HomeAgenda