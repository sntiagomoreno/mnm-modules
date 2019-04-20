import Content from './HomeAgenda.html'
import './HomeAgenda.scss'
import './FeaturedDate.scss'

import Flickity from 'flickity'
import matchesSelector from 'desandro-matches-selector'

class HomeAgenda {
	constructor() {
		this.create = (el) => {
			let container = document.createElement('section')
			el = document.querySelector(el)
			container.classList.add('site-section')
			container.classList.add('border')
			container.innerHTML = Content
			el.appendChild(container)

			console.log(matchesSelector)

			var flkty = new Flickity('.events-list', {
			  // options
			  cellAlign: 'left',
			  contain: true,
			  prevNextButtons: false,
			  pageDots: false,
			});

			var cellsButtonGroup = container.querySelector('.flickity-page-dots');
			var cellElements = flkty.getCellElements()

			for (var i = 0; i < cellElements.length; i++) {
				let pageDot = document.createElement('li')
				pageDot.classList.add('button')
				cellsButtonGroup.appendChild(pageDot)

				if (i==(cellElements.length-1)) {
					cellsButtonGroup.children[0].classList.add('is-selected')

					let collection = Array.from(cellsButtonGroup.children)

					cellsButtonGroup.addEventListener( 'click', function( event ) {
					  if ( !matchesSelector( event.target, '.button' ) ) {
					    return;
					  }

					  

					  var index = collection.indexOf( event.target );
					  flkty.select( index );
					});
					
				}
			}

			var previousButton = container.querySelector('.prev');
			var nextButton = container.querySelector('.next');


			flkty.on( 'select', function() {
			  var previousSelectedButton = cellsButtonGroup.querySelector('.is-selected');
			  var selectedButton =	 cellsButtonGroup.children[ flkty.selectedIndex ];
			  previousSelectedButton.classList.remove('is-selected');
			  selectedButton.classList.add('is-selected');

			  if ( !flkty.cells[ flkty.selectedIndex - 1 ] ) {
			    // on first cell
			    previousButton.setAttribute( 'disabled', 'disabled' );
			  } else if ( !flkty.cells[ flkty.selectedIndex + 1 ] ) {
			    // on last cell
			    nextButton.setAttribute( 'disabled', 'disabled' );
			  } else {
			    previousButton.removeAttribute('disabled');
			    nextButton.removeAttribute('disabled');
			  }

			});


			
			previousButton.addEventListener( 'click', function() {
			  flkty.previous();
			});
			// next
			
			nextButton.addEventListener( 'click', function() {
			  flkty.next();
			});
		}
	}
}

export default HomeAgenda