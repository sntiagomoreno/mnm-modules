import './global.scss'

import HomeAgenda from './Components/HomeAgenda/HomeAgenda'
import Story from './Components/Story/Story'
import Profiles from './Components/Profiles/Profiles'
import EducationModule from './Components/EducationModule/EducationModule'
import Agenda from './Components/Agenda/Agenda'
import Sidebar from './Components/Sidebar/Sidebar'
import Menu from './Components/Menu/Menu'
import Downloads from './Components/Downloads/Downloads'
import Gallery from './Components/Gallery/Gallery'
import Mapa from './Components/Mapa/Mapa'
import InnerCover from './Components/InnerCover/InnerCover'

let agenda = new HomeAgenda()
let story = new Story()
let profiles = new Profiles()
let education = new EducationModule()
let agenda_program = new Agenda()
let sidebar = new Sidebar()
let menu = new Menu()
let downloads = new Downloads()
let map = new Mapa()
let inner_cover = new InnerCover()

window.onload = () => {
	menu.create('.container')
	agenda.create('.container')
	story.create('.container')
	profiles.create('.container')
	education.create('.container')
	agenda_program.create('.container')
	sidebar.create('.container')
	downloads.create('.container')
	map.create('.container')
	inner_cover.create('.container')
}
