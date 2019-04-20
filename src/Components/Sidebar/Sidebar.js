import Content from './Sidebar.html'
import './Sidebar.scss'

import Flickity from 'flickity'

class Sidebar {
	constructor() {
		this.create = (el) => {
			let container = document.createElement('section')
			el = document.querySelector(el)
			container.innerHTML = Content
			el.appendChild(container)


			let hasSubmenu = document.querySelectorAll('.has-submenu')

			for (var i = 0; i < hasSubmenu.length; i++) {
				hasSubmenu[i].addEventListener('click', function(e){
					e.preventDefault()

					let target = this.getAttribute('data-target-submenu')
					let targetContainer = this.parentNode.parentNode
					let foundTarget = targetContainer.querySelector('[data-submenu="'+target+'"]')

					console.log(targetContainer)

					this.parentNode.querySelector('.active').classList.remove('active')
					if(targetContainer.querySelector('.active')){
						targetContainer.querySelector('.active').classList.remove('active')
					}
					this.classList.add('active')
					foundTarget.classList.add('active')
				})	
			}

			// var flkty = new Flickity('.sidebar-nav', {
			//   // options
			//   cellAlign: 'left',
			//   contain: true,
			//   prevNextButtons: false,
			//   pageDots: false,
			//   freeScroll: true
			// });

			// flkty.on( 'pointerDown', function( event, pointer ) {
			// 	event.stopPropagation()
			// })

			// var subflkty = new Flickity('.sidebar-subnav', {
			//   // options
			//   cellAlign: 'left',
			//   contain: true,
			//   prevNextButtons: false,
			//   pageDots: false,
			//   freeScroll: true
			// });
		}
	}
}

export default Sidebar