import Content from './Profiles.html'
import './Profiles.scss'

import Flickity from 'flickity'
import 'typesplit'

class Profiles {
	constructor() {
		this.create = (el) => {
			let container = document.createElement('section')
			el = document.querySelector(el)
			container.classList.add('site-section')
			container.innerHTML = Content
			el.appendChild(container)

			var flkty = new Flickity('.profiles-list', {
			  // options
			  cellAlign: 'left',
			  contain: true,
			  prevNextButtons: false,
			  pageDots: false,
			});

			var instance = new SplitType('.profiles-item h2', {
			    split: 'lines', 
			});


		}
	}
}

export default Profiles