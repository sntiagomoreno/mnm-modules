import Content from './Agenda.html'
import './FeaturedDate.scss'
import './Agenda.scss'


import Flickity from 'flickity'
import matchesSelector from 'desandro-matches-selector'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

class Agenda {
	constructor() {
		this.create = (el) => {
			let container = document.createElement('section')
			let globalData
			el = document.querySelector(el)
			container.classList.add('site-section')
			container.innerHTML = Content
			el.appendChild(container)

			console.log(matchesSelector)

			let getJSON = new XMLHttpRequest()
			getJSON.open('GET', '/data/test.json', true)
			getJSON.onload = function() {
			  if (getJSON.status >= 200 && getJSON.status < 400) {
			    // Success!
			    var data = JSON.parse(getJSON.responseText);
			    populateCalendar(data)
			    
			    // console.log(data)
			  } else {
			    // We reached our target server, but it returned an error

			  }
			};

			getJSON.onerror = function() {
			  // There was a connection error of some sort
			};
			getJSON.send()

			var agendaFlkty

			var calendarFlkty = new Flickity('.calendar', {
			  // options
			  cellAlign: 'left',
			  contain: true,
			  prevNextButtons: false,
			  pageDots: false,
			});

			function populateCalendar(data) {
				let filtered = data.filter(function(el) {
					return el.event_date == '4/17/2018'
				})

				globalData = data
				console.log(globalData)

				// for (event in filtered) {
				// 	let event_wrapper = document.createElement('li')
				// 	calendar.appendChild(event_wrapper)
				// 	console.log(event.event_title)
				// }

				for (var i = 0; i < filtered.length; i++) {
					let event_wrapper = document.createElement('li')
					let time = filtered[i].event_start_time
					event_wrapper.className = 'agenda-event-item'
					event_wrapper.setAttribute('data-date',time.split(':')[0] + ' ' + time.slice(-2) )
					event_wrapper.innerHTML = `
						<span class="event-category">${filtered[i].event_type}</span>
						<h2>${filtered[i].event_title}</h2>
						<span class="event-time">${filtered[i].event_start_time} a ${filtered[i].event_end_time}</span>
						<span class="event-time">${filtered[i].event_place}</span>` 
					agendaContainer.appendChild(event_wrapper)
					// filtered[i]
					if(i == (filtered.length-1)) {
						createFlickity()
					}
				}

				
			}

			function repopulateCalendar(el) {
				let item = el.getAttribute('data-date')
				agendaFlkty.destroy()
				while (agendaContainer.firstChild) {
				    agendaContainer.removeChild(agendaContainer.firstChild);
				}

				let filtered = globalData.filter(function(el) {
					return el.event_date == item
				})

				for (var i = 0; i < filtered.length; i++) {
					let event_wrapper = document.createElement('li')
					let time = filtered[i].event_start_time
					event_wrapper.className = 'agenda-event-item'
					event_wrapper.setAttribute('data-date',time.split(':')[0] + ' ' + time.slice(-2) )
					event_wrapper.innerHTML = `
						<span class="event-category">${filtered[i].event_type}</span>
						<h2>${filtered[i].event_title}</h2>
						<span class="event-time">${filtered[i].event_start_time} a ${filtered[i].event_end_time}</span>
						<span class="event-time">${filtered[i].event_place}</span>` 
					agendaContainer.appendChild(event_wrapper)
					// filtered[i]
					if(i == (filtered.length-1)) {
						createFlickity()
					}
				}
			}

			var previousButton = container.querySelector('.prev');
				var nextButton = container.querySelector('.next');

				previousButton.addEventListener( 'click', function() {
				  agendaFlkty.previous();
				});
				// next
				
				nextButton.addEventListener( 'click', function() {
				  agendaFlkty.next();
				});

			function createFlickity() {
				agendaFlkty = new Flickity('.agenda-events-list', {
				  // options
				  cellAlign: 'left',
				  contain: true,
				  prevNextButtons: false,
				  pageDots: false,
				});

				if ( !agendaFlkty.cells[ agendaFlkty.selectedIndex - 1 ] ) {
				    // on first cell
				    previousButton.setAttribute( 'disabled', 'disabled' );
				  } else if ( !agendaFlkty.cells[ agendaFlkty.selectedIndex + 1 ] ) {
				    // on last cell
				    nextButton.setAttribute( 'disabled', 'disabled' );
				  } else {
				    previousButton.removeAttribute('disabled');
				    nextButton.removeAttribute('disabled');
				}

				var cellsButtonGroup = container.querySelector('.flickity-page-dots');
				var cellElements = agendaFlkty.getCellElements()

				// for (var i = 0; i < cellElements.length; i++) {
				// 	let pageDot = document.createElement('li')
				// 	pageDot.classList.add('button')
				// 	cellsButtonGroup.appendChild(pageDot)

				// 	if (i==(cellElements.length-1)) {
				// 		cellsButtonGroup.children[0].classList.add('is-selected')
						
				// 	}
				// }

				var progress = container.querySelector('.flickity-page-dots')

				progress.innerHTML = agendaFlkty.selectedIndex + 1 + '/' + cellElements.length

				


				agendaFlkty.on( 'select', function() {
				  var previousSelectedButton = cellsButtonGroup.querySelector('.is-selected');
				  // var selectedButton =	 cellsButtonGroup.children[ agendaFlkty.selectedIndex ];
				  // previousSelectedButton.classList.remove('is-selected');
				  // selectedButton.classList.add('is-selected');

				  progress.innerHTML = agendaFlkty.selectedIndex + 1 + '/' + cellElements.length

				  if ( !agendaFlkty.cells[ agendaFlkty.selectedIndex - 1 ] ) {
				    // on first cell
				    previousButton.setAttribute( 'disabled', 'disabled' );
				  } else if ( !agendaFlkty.cells[ agendaFlkty.selectedIndex + 1 ] ) {
				    // on last cell
				    nextButton.setAttribute( 'disabled', 'disabled' );
				  } else {
				    previousButton.removeAttribute('disabled');
				    nextButton.removeAttribute('disabled');
				  }

				});


				
				
			}


			var calendarFilter = document.querySelectorAll('.calendar-filter span');
			var calendarApril = document.getElementById('abril')
			var calendarMay = document.getElementById('mayo')
			var calendar = document.querySelector('.calendar')
			var agendaContainer = document.querySelector('.agenda-events-list')
			var calendarDate = document.querySelectorAll('.calendar .featured-date')

			calendarMay.addEventListener('click', function(){
				calendarFlkty.select(14)
				for (var i = 0; i < calendarFilter.length; i++) {
					calendarFilter[i].classList.remove('is-selected')
				}
				this.classList.add('is-selected')
			})

			calendarApril.addEventListener('click', function(){
				calendarFlkty.select(0)
				for (var i = 0; i < calendarFilter.length; i++) {
					calendarFilter[i].classList.remove('is-selected')
				}
				this.classList.add('is-selected')
			})

			calendarFlkty.on('select', function() {
				for (var i = 0; i < calendarFilter.length; i++) {
					calendarFilter[i].classList.remove('is-selected')
				}

				if( calendarFlkty.selectedIndex <= 13) {
					
					calendarApril.classList.add('is-selected')
				} else {
					calendarMay.classList.add('is-selected')
				}
			})

			for (var i = 0; i < calendarDate.length; i++) {


				// calendarDate[i].addEventListener('click', function(){
				// 	document.querySelector('.calendar .featured-date.active').classList.remove('active')
				// 	this.classList.add('active')
				// })


			}

			let collection = Array.from(calendar.querySelectorAll('.featured-date'))
			console.log(collection)


				calendar.addEventListener( 'click', function( event ) {
					  if ( !matchesSelector( event.target.parentNode, '.calendar .featured-date' ) ) {
					    return;
					  }

					  var index = collection.indexOf( event.target.parentNode );
					  calendarFlkty.select( index );
					  calendar.querySelector('.active').classList.remove('active');
					  event.target.parentNode.classList.add('active')

					  repopulateCalendar(event.target.parentNode)

					});



			


		}
	}
}

export default Agenda