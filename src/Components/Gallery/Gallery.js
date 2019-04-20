import Content from './Gallery.html'
import './Gallery.scss'

import Flickity from 'flickity'
import 'typesplit'

// TODO 17 APR

class Gallery {
	constructor() {
		this.create = (el) => {
			let container = document.createElement('section')
			el = document.querySelector(el)
			container.classList.add('gallery-wrapper')
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

export default Gallery