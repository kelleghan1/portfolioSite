angular.module('portfolioSite')

.factory('HomeService', function(){
  var imageArr = [
    {
      type: 'graphic',
      project: 'Absinthe House',
      url: 'absinthehouse',
      primary: ['../images/primary/absinthehouseblack.jpg'],
      images: [
        '../images/mockups/absinthemenumockup.png',
        '../images/primary/absinthehousewhite.jpg',
        '../images/mockups/absinthehousesite-square.jpg'
      ],
      description: 'Absinthe House is a bar and nightclub in Boulder, Colorado. Adobe Illustrator and Adobe InDesign were used to create the vector banner and menu. The Absinthe House website was designed using Adobe Illustrator and built in Wix.'
    },
    {
      type: 'graphic',
      project: 'Family Home Health',
      url: 'familyhomehealth',
      primary: ['../images/primary/fhhbrochuresquare-inside.jpg'],
      images: [
        '../images/mockups/fhhsite-square.jpg',
        '../images/primary/fhhbrochuresquare-outside.jpg'
      ],
      description: 'Family Home Health is a Colorado based company that offers health care at the homes of their patients. Their trifold brochure was created utilizing Adobe Indesign, Adobe Illustrator, and Adobe Photoshop.'
    },
    {
      type: 'graphic',
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
      type: 'graphic',
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
      type: 'graphic',
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
      type: 'graphic',
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
      type: 'graphic',
      project: 'Alchemist Labs',
      url: 'alchemistlabs',
      primary: ['../images/primary/alchemistlabswater.jpg'],
      images: [
        '../images/primary/alchemistlabsblue.jpg'
      ],
      description: 'Alchemist Labs produces vapor concentrate for vaporizer products.'
    },
    {
      type: 'graphic',
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
      type: 'graphic',
      project: 'Revmatek',
      url: 'revmatek',
      primary: ['../images/primary/revmatekorange.jpg'],
      images: [
        '../images/primary/revmatekblack.jpg',
        '../images/primary/revmatekwhite.jpg'
      ],
      description: 'Revmatek offers peer to peer streaming service and solutions. The design was created using Adobe Illustrator.'
    },
    {
      type: 'graphic',
      project: 'Rising Sun',
      url: 'risingsun',
      primary: ['../images/primary/risingsuncover.jpg'],
      images: [
        '../images/primary/risingsunbook.jpg',
        '../images/primary/risingsundisc.jpg',
        '../images/primary/risingsunlogo.jpg'
      ],
      description: 'Rising sun is an English DJ and producer. To create his album booklet we utilized Adobe Illustrator, Adobe Photoshop, and Adobe InDesign.'
    },
    {
      type: 'graphic',
      project: 'Teneo Talent',
      url: 'teneotalent',
      primary: ['../images/primary/teneotalentwhite.jpg'],
      images: [
        '../images/primary/teneotalentblack.jpg'
      ],
      description: 'Teneo Talent is a job placement service based in Colorado. Their logo and the Teneo Talent website was redesigned using Adobe Illustrator.'
    },
    {
      type: 'graphic',
      project: 'Proper Motion',
      url: 'propermotion',
      primary: ['../images/primary/propermotioncover.jpg'],
      images: [],
      description: 'Proper Motion is a music production duo based in Colorado. Adobe Illustrator was used to design the logo.'
    },
    {
      type: 'graphic',
      project: 'Family Hospice',
      url: 'familyhospice',
      primary: ['../images/primary/familyhospicebrochuresquare-inside.jpg'],
      images: [
        '../images/mockups/familyhospicesite-square.jpg',
        '../images/primary/familyhospicebrochuresquare-outside.jpg'
      ],
      description: 'Family Hospice is an end of life care service. They serve patients at their homes in order to maximize quality of life. Their brochure was creaed using Adobe Illustrator, Adobe InDesign, Adobe Photoshop. We created the Family Hospice website using the Adobe Creative Suite and Wordpress.'
    },
    {
      type: 'graphic',
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
      type: 'graphic',
      project: 'Purple State Productions',
      url: 'purplerstateproductions',
      primary: ['../images/primary/purplestateblack.jpg'],
      images: [
        '../images/mockups/purplestatepostermock.png',
        '../images/primary/purplestatewhite.jpg'
      ],
      description: 'Purple State organizes shows and music related events. The logo was created using Adobe Illustrator. The event poster was created using Adobe Illustrator, Adobe Photoshop, and Adobe InDesign.'
    }
  ]

  return imageArr
})
