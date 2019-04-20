import Content from './Mapa.html'
import './Mapa.scss'

class Mapa {
	constructor() {
		this.create = (el) => {
			let container = document.createElement('section')
			el = document.querySelector(el)
			container.classList.add('site-section')
			container.innerHTML = Content
			el.appendChild(container)

			var tabLink = document.querySelectorAll('.tab-link')
			var mapZone = container.querySelectorAll('.zone')
			var titleContainer = container.querySelector('.map-info').querySelector('h1')
			var axisContainer = container.querySelector('.map-info').querySelector('h5')
			var mapWrapper = container.querySelector('.map-wrapper')



			// $("#stop").on("click", function() {
			//   cancelAnimationFrame(globalID);
			// });
			// $("#start").on("click", function() {
			//   globalID = requestAnimationFrame(repeatOften);
			// });

			for (var i = 0; i < tabLink.length; i++) {
				tabLink[i].addEventListener('click', function(e) {
					e.preventDefault()
					let target = this.getAttribute('data-target')
					if (this.classList.contains('.active')) {
						e.preventDefault()
					} else {
						this.parentNode.querySelector('.tab-link.active').classList.remove('active')
						this.classList.add('active')
						this.parentNode.parentNode.parentNode.querySelector('.visible').classList.remove('visible')
						document.getElementById(target).classList.add('visible')
					}
				})
			}

			for (var i = 0; i < mapZone.length; i++) {
				mapZone[i].addEventListener('click', function(e) {

					let title = this.getAttribute('data-title')
					let axis = this.getAttribute('data-eje')

					if(container.querySelector('.visible-zone')) {
						container.querySelector('.visible-zone').classList.remove('visible-zone')
					}
					this.classList.add('visible-zone')

					console.log(title)

					titleContainer.innerHTML = title
					axisContainer.innerHTML = axis

					axisContainer.setAttribute('data-axis', axis)


				})
			}

			
		}
	}
}

export default Mapa