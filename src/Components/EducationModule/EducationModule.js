import Content from './EducationModule.html'
import './EducationModule.scss'

class EducationModule {
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

export default EducationModule