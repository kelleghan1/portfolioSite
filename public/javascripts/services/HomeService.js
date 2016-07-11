angular.module('portfolioSite')

.factory('HomeService', function(){
  var imageArr = [
    {
      type: 'development',
      project: 'Dropzio',
      url: 'dropzio',
      homePrimary: ['../images/primary/dropziomocksquare.jpg'],
      primary: ['../images/primary/dropzio.jpg'],
      images: [
        '../images/mockups/dropziomock3.jpg',
        '../images/mockups/dropziomock1.jpg',
        '../images/mockups/dropziomock2.jpg',
        '../images/mockups/dropziomock4.jpg'
      ],
      description: 'Dropzio is a geolocation hybrid app that allows users to post images and messages to their current location. The posts then become visible to other users in the vicinity. Dropzio was created with cordova and ionic and was written in Angular. The backend was created using Ruby on Rails and managed users and posts through CRUD operations. The logo was created with Adobe Illustrator.'
    },
    {
      type: 'design',
      project: 'Silverline Media',
      url: 'silverlinemedia',
      primary: ['../images/primary/silverlinemediagrey.jpg'],
      images: [
        '../images/primary/silverlinemediablack.jpg',
        '../images/primary/silverlinemediawhite.jpg'
      ],
      description: 'Silverline Media offers photo and video production services. The logo was created using Adobe Illustrator.'
    },
    {
      type: 'design development',
      project: 'Family Home Health',
      url: 'familyhomehealth',
      primary: ['../images/primary/fhhbrochuresquare-inside.jpg'],
      images: [
        '../images/mockups/fhhsite-square.jpg',
        '../images/primary/fhhbrochuresquare-outside.jpg'
      ],
      description: 'Family Home Health is a Colorado based company that offers health care at the homes of their patients. Their trifold brochure was created utilizing Adobe Indesign, Adobe Illustrator, and Adobe Photoshop. The Family Home Health website was created in Wordpress.'
    },
    {
      type: 'design',
      project: 'Sunshine Tree Farm',
      url: 'sunshinetreefarm',
      primary: ['../images/primary/sunshinetreefarmwhite.jpg'],
      images: [
        '../images/primary/sunshinetreefarmgreen.jpg',
        '../images/primary/sunshinetreefarmblack.jpg'
      ],
      description: 'Sunshine Tree Farm grows and sell a variety of trees in Colorado. The logo was created with Adobe Illustrator.'
    },
    {
      type: 'design',
      project: 'Grillerz Pub',
      url: 'grillerzpub',
      primary: ['../images/primary/grillerzflames.jpg'],
      images: [
        '../images/primary/grillerzsign.jpg',
        '../images/primary/grillerzwhite.jpg'
      ],
      description: 'Grillerz Pub is a bar and restaurant in Englewood, Colorado'
    },
    {
      type: 'design development',
      project: 'Flight Switch',
      url: 'flightswitch',
      primary: ['../images/primary/flightswitchblack.jpg'],
      images: [
        '../images/primary/flightswitchwhite.jpg',
        '../images/mockups/shirtastro.png',
        '../images/mockups/shirtflag.png',
        '../images/mockups/shirtsoldier.png',
        '../images/mockups/shirtcity.png'
      ],
      description: 'Flight Switch is a Colorado based clothing company. The brand and products were created utilizing Adobe Illustrator, Adobe Photoshop, and Adobe InDesign.'
    },
    {
      type: 'development',
      project: 'Geoball',
      url: 'geoball',
      primary: ['../images/primary/geoball.jpg'],
      images: [],
      description: 'Geoball is a game created using JavaScript and jQuery and then modified to function in AngularJs on this website. Play the game <a href="/#/geoballdemo"> here</a>'
    },
    {
      type: 'development',
      project: 'Yodel',
      url: 'yodel',
      homePrimary: ['../images/primary/yodelmocksquare.jpg'],
      primary: ['../images/primary/yodel.jpg'],
      images: [
        '../images/mockups/yodelmock3.jpg',
        '../images/mockups/yodelmock.jpg',
        '../images/mockups/yodelmock4.jpg',
        '../images/mockups/yodelmock5.jpg'
      ],
      description: 'Yodel is a social geolocation hybrid app designed to promote meeting new people and face to face interaction. The app allows users to see others within a custom range and send those users messages. It was created in ionic and cordova and written in angular javascript. It had a CRUD backend in express and knex to manage users and their location data. The logo was created using Adobe Illustrator.'
    },
    {
      type: 'design',
      project: 'Alchemist Labs',
      url: 'alchemistlabs',
      primary: ['../images/primary/alchemistlabswater.jpg'],
      images: [
        '../images/primary/alchemistlabsblue.jpg'
      ],
      description: 'Alchemist Labs produces vapor concentrate for vaporizer products. The logo was created using Adobe Illustrator'
    },
    {
      type: 'design',
      project: 'Jam Factory',
      url: 'jamfactory',
      primary: ['../images/primary/jamfactorywhite.jpg'],
      images: [
        '../images/primary/jamfactoryblack.jpg',
        '../images/primary/jamfactoryblackandwhite.jpg'
      ],
      description: 'Jam Factory is a music and entertainment event coordination and promotion company. The logo was created using Adobe Illustrator.'
    },
    {
      type: 'design',
      project: 'Purple State Productions',
      url: 'purplerstateproductions',
      primary: ['../images/primary/purplestateblack.jpg'],
      images: [
        '../images/mockups/purplestatepostermock.png',
        '../images/primary/purplestatewhite.jpg'
      ],
      description: 'Purple State organizes shows and music related events. The logo was created using Adobe Illustrator. The event poster was created using Adobe Illustrator, Adobe Photoshop, and Adobe InDesign.'
    },
    {
      type: 'design',
      project: 'Revmatek',
      url: 'revmatek',
      primary: ['../images/primary/revmatekorange.jpg'],
      images: [
        '../images/primary/revmatekblack.jpg',
        '../images/primary/revmatekwhite.jpg'
      ],
      description: 'Revmatek offers peer to peer streaming service and solutions. The logo was created using Adobe Illustrator.'
    },
    {
      type: 'design',
      project: 'Rising Sun',
      url: 'risingsun',
      primary: ['../images/primary/risingsuncover.jpg'],
      images: [
        '../images/primary/risingsunbook.jpg',
        '../images/primary/risingsundisc.jpg',
        '../images/primary/risingsunlogo.jpg'
      ],
      description: 'Rising sun is an English DJ and producer. The album cover and logo was created using Adobe Illustrator, Adobe Photoshop, and Adobe InDesign.'
    },
    {
      type: 'design',
      project: 'Teneo Talent',
      url: 'teneotalent',
      primary: ['../images/primary/teneotalentwhite.jpg'],
      images: [
        '../images/primary/teneotalentblack.jpg'
      ],
      description: 'Teneo Talent is a job placement service based in Colorado. Their logo and the Teneo Talent website was redesigned using Adobe Illustrator.'
    },
    {
      type: 'design',
      project: 'Proper Motion',
      url: 'propermotion',
      primary: ['../images/primary/propermotioncover.jpg'],
      images: [],
      description: 'Proper Motion is a music producer based in Colorado. The album cover was created using Adobe Photoshop and Adobe Illustrator'
    },
    {
      type: 'design development',
      project: 'Family Hospice',
      url: 'familyhospice',
      primary: ['../images/primary/familyhospicebrochuresquare-inside.jpg'],
      images: [
        '../images/mockups/familyhospicesite-square.jpg',
        '../images/primary/familyhospicebrochuresquare-outside.jpg'
      ],
      description: 'Family Hospice is an end of life care service. They serve patients at their homes in order to maximize quality of life. Their brochure was creaed using Adobe Illustrator, Adobe InDesign, Adobe Photoshop. The Family Hospice website was created using the Adobe Creative Suite and Wordpress.'
    },
    {
      type: 'design',
      project: 'Moonwalkers',
      url: 'moonwalkers',
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
