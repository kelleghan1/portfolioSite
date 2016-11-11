angular.module('portfolioSite')

.factory('HomeService', function(){
  var imageArr = [
    {
      type: 'development',
      project: 'Dropzio',
      url: 'dropzio',
      homePrimary: ['../images/primary/dropziomocksquare.jpg'],
      product: 'Logo, Mobile App',
      primary: ['../images/primary/dropzio.jpg'],
      images: [
        '../images/mockups/dropziomock3.jpg',
        '../images/mockups/dropziomock1.jpg',
        '../images/mockups/dropziomock2.jpg',
        '../images/mockups/dropziomock4.jpg'
      ],
      description: 'Dropzio is a geolocation hybrid app that allows users to post images and messages to their current location. The posts then become visible to other users in the vicinity. Dropzio was created with Cordova and Ionic and was written in AngularJS. The back end was created using Ruby on Rails and manages users, posts, and geographic data through CRUD operations. The logo was created with Adobe Illustrator. You can see the front end on GitHub <a href="https://github.com/kelleghan1/dropzioApp2" target="_blank"><strong>here</strong></a> and the back end <a href="https://github.com/kelleghan1/dropzio_server"target="_blank"><strong>here</strong></a>.'
    },
    {
      type: 'design',
      project: 'Silverline Media',
      url: 'silverlinemedia',
      product: 'Logo',
      primary: ['../images/primary/silverlinemediagrey.jpg'],
      images: [
        '../images/primary/silverlinemediablack.jpg',
        '../images/primary/silverlinemediawhite.jpg'
      ],
      description: 'Silverline Media offers photo and video production services. The logo was created using Adobe Illustrator.'
    },
    {
      type: 'design development',
      project: 'Flight Switch',
      url: 'flightswitch',
      homePrimary: ['../images/primary/flightswitchblack.jpg'],
      product: 'Logo, Shirt Designs, Online Store',
      primary: ['../images/primary/flightswitchblack.jpg'],
      images: [
        '../images/mockups/flightswitchsitemock.jpg',
        '../images/primary/flightswitchwhite.jpg',
        '../images/mockups/shirtastro.png',
        '../images/mockups/shirtflag.png',
        '../images/mockups/shirtsoldier.png',
        '../images/mockups/shirtcity.png'
      ],
      description: 'Flight Switch is a Colorado based clothing company. The brand and products were created using Adobe Illustrator, Adobe Photoshop, and Adobe InDesign. The online store was created with JavaScript and Handlebars on the front end. The back end was created with Express, Bookshelf, and Knex to manage a robust inventory management system for administrators. You can demo the online store <a target="_blank" href="http://flight-switch-store.herokuapp.com/shirts"><strong>here</strong></a>. To see the GitHub page click <a href="https://github.com/kelleghan1/flight-switch-store" target="_blank"><strong>here</strong></a>.'
    },
    {
      type: 'design',
      project: 'Grillerz Pub',
      url: 'grillerzpub',
      product: 'Logo',
      primary: ['../images/primary/grillerzflames.jpg'],
      images: [
        '../images/primary/grillerzsign.jpg',
        '../images/primary/grillerzwhite.jpg'
      ],
      description: 'Grillerz Pub is a bar and restaurant in Englewood, Colorado. The logo was created using Adobe Illustrator.'
    },
    {
      type: 'design',
      project: 'Sunshine Tree Farm',
      url: 'sunshinetreefarm',
      product: 'Logo',
      primary: ['../images/primary/sunshinetreefarmwhite.jpg'],
      images: [
        '../images/primary/sunshinetreefarmgreen.jpg',
        '../images/primary/sunshinetreefarmblack.jpg'
      ],
      description: 'Sunshine Tree Farm grows and sell a variety of trees in Colorado. The logo was created with Adobe Illustrator.'
    },
    {
      type: 'development',
      project: 'Geoball',
      url: 'geoball',
      product: 'Browser Game',
      primary: ['../images/primary/geoball.jpg'],
      images: [],
      description: 'Geoball is a game created using JavaScript, jQuery, and canvas elements. It was then modified to function in AngularJS on this website. The game contacts an image API to retrieve a random background image for each game. Play the game <a href="/geoballdemo"><strong>here</strong></a>. To see the GitHub page click <a href="https://github.com/kelleghan1/mySite.github.io" target="_blank"><strong>here</strong></a>.'
    },
    {
      type: 'development',
      project: 'Yodel',
      url: 'yodel',
      homePrimary: ['../images/primary/yodelmocksquare.jpg'],
      product: 'Logo, Mobile App',
      primary: ['../images/primary/yodel.jpg'],
      images: [
        '../images/mockups/yodelmock3.jpg',
        '../images/mockups/yodelmock.jpg',
        '../images/mockups/yodelmock4.jpg',
        '../images/mockups/yodelmock1.jpg'
      ],
      description: 'Yodel is a social geolocation hybrid app designed to promote meeting new people and face to face interaction. The app allows users to see others within a custom range and send those users messages. It was created in Ionic and Cordova and written in AngularJS. It has a CRUD back end in Express and Knex to manage users and their location data. The logo was created using Adobe Illustrator. To see the front end on GitHub click <a href="https://github.com/MSturges/YodelApp" target="_blank"><strong>here</strong></a> and to see the back end click <a href="https://github.com/MatieuB/yodel" target="_blank"><strong>here</strong></a>'
    },
    {
      type: 'design',
      project: 'Alchemist Labs',
      url: 'alchemistlabs',
      product: 'Logo',
      primary: ['../images/primary/alchemistlabswater.jpg'],
      images: [
        '../images/primary/alchemistlabsblue.jpg'
      ],
      description: 'Alchemist Labs produces vapor concentrate for vaporizer products. The logo was created using Adobe Illustrator.'
    },
    {
      type: 'design',
      project: 'Jam Factory',
      url: 'jamfactory',
      product: 'Logo',
      primary: ['../images/primary/jamfactorywhite.jpg'],
      images: [
        '../images/primary/jamfactoryblack.jpg',
        '../images/primary/jamfactoryblackandwhite.jpg'
      ],
      description: 'Jam Factory is a music and entertainment event coordination and promotion company. The logo was created using Adobe Illustrator.'
    },
    {
      type: 'design development',
      project: 'Family Home Health',
      url: 'familyhomehealth',
      product: 'Brochure, Website',
      primary: ['../images/mockups/fhhsite-square.jpg'],
      images: [
        '../images/primary/fhhbrochuresquare-inside.jpg',
        '../images/primary/fhhbrochuresquare-outside.jpg'
      ],
      description: 'Family Home Health is a Colorado based company that offers health care at the homes of their patients. Their trifold brochure was created using Adobe Indesign, Adobe Illustrator, and Adobe Photoshop. The <a target="_blank" href="http://familyhomehealthservices.net/">Family Home Health website</a> was created in Wordpress.'
    },
    {
      type: 'design',
      project: 'Revmatek',
      url: 'revmatek',
      product: 'Logo',
      primary: ['../images/primary/revmatekorange.jpg'],
      images: [
        '../images/primary/revmatekblack.jpg',
        '../images/primary/revmatekwhite.jpg'
      ],
      description: 'Revmatek offers peer to peer streaming service and solutions. The logo was created using Adobe Illustrator.'
    },
    {
      type: 'design',
      project: 'Purple State Productions',
      url: 'purplerstateproductions',
      product: 'Logo, Event Poster',
      primary: ['../images/primary/purplestateblack.jpg'],
      images: [
        '../images/mockups/purplestatepostermock.png',
        '../images/primary/purplestatewhite.jpg'
      ],
      description: 'Purple State organizes shows and music related events. The logo was created using Adobe Illustrator. The event poster was created using Adobe Illustrator, Adobe Photoshop, and Adobe InDesign.'
    },
    {
      type: 'design',
      project: 'Rising Sun',
      url: 'risingsun',
      product: 'Logo, Album Cover, Booklet',
      primary: ['../images/primary/risingsuncover.jpg'],
      images: [
        '../images/primary/risingsunbook.jpg',
        '../images/primary/risingsundisc.jpg',
        '../images/primary/risingsunlogo.jpg'
      ],
      description: 'Rising sun is an English DJ and producer. The album cover and logo were created using Adobe Illustrator, Adobe Photoshop, and Adobe InDesign.'
    },
    {
      type: 'design',
      project: 'Teneo Talent',
      url: 'teneotalent',
      product: 'Logo',
      primary: ['../images/primary/teneotalentwhite.jpg'],
      images: [
        '../images/primary/teneotalentblack.jpg'
      ],
      description: 'Teneo Talent is a job placement service based in Colorado. The logo and the Teneo Talent website were redesigned using Adobe Illustrator.'
    },
    {
      type: 'design',
      project: 'Proper Motion',
      url: 'propermotion',
      product: 'Album Cover',
      primary: ['../images/primary/propermotioncover.jpg'],
      images: [],
      description: 'Proper Motion is a music producer based in Colorado. The album cover was created using Adobe Photoshop and Adobe Illustrator.'
    },
    {
      type: 'development',
      project: 'Knight Moves',
      url: 'knightmoves',
      homePrimary: ['../images/primary/knightmoves.png'],
      product: 'Side Project',
      primary: ['../images/primary/knightmoves.png'],
      images: [
        '../images/primary/knightmovesmock.png'
      ],
      description: 'Knight Moves is a web application that calculates the minimum number of moves a chess knight can take to reach a given position. The app was written in Javascript with an AngularJS front end. Try the app <a href="/knightmovesdemo"><strong>here</strong></a>. To see the GitHub page click <a href="https://github.com/kelleghan1/knight" target="_blank"><strong>here</strong></a>.'
    },
    {
      type: 'design development',
      project: 'Family Hospice',
      url: 'familyhospice',
      product: 'Brochure, Website',
      primary: ['../images/mockups/familyhospicesite-square.jpg'],
      images: [
        '../images/primary/familyhospicebrochuresquare-inside.jpg',
        '../images/primary/familyhospicebrochuresquare-outside.jpg'
      ],
      description: 'Family Hospice is an end of life care service. They serve patients at their homes in order to maximize quality of life. Their brochure was creaed using Adobe Illustrator, Adobe InDesign, and Adobe Photoshop. The Family Hospice website was created using the Adobe Creative Suite and Wordpress.'
    },
    {
      type: 'design',
      project: 'Moonwalkers',
      url: 'moonwalkers',
      product: 'Logo',
      primary: ['../images/primary/moonwalkerswhite.jpg'],
      images: [
        '../images/primary/moonwalkersblack.jpg',
        '../images/primary/moonwalkerspink.jpg'
      ],
      description: 'Moonwalkers is an all cancer benefit and fundraising team. Their logo was created using Adobe Illustrator.'
    },
    {
      type: 'design',
      project: 'Absinthe House',
      url: 'absinthehouse',
      product: 'Logo, Menu, Website',
      primary: ['../images/primary/absinthehouseblack.jpg'],
      images: [
        '../images/mockups/absinthemenumockup.png',
        '../images/primary/absinthehousewhite.jpg',
        '../images/mockups/absinthehousesite-square.jpg'
      ],
      description: 'Absinthe House is a bar and nightclub in Boulder, Colorado. Adobe Illustrator and Adobe InDesign were used to create the vector banner and menu. The Absinthe House website was designed using Adobe Illustrator and built in Wix.'
    }
  ]

  return imageArr
})
