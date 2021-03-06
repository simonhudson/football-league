# Football League club website
Inspired by the poor usability and accessibility of the boilerplate website used by many Football League clubs, I decided to have a go at re-building it from the ground up, using [Derby County FC](http://www.dcfc.co.uk) as an example.

## Aims
* Re-assess information architecture and look for ways to cut down on complexity, whilst bringing important information more to the fore
* Re-build the front-end using an adaptive, "mobile first" approach
* Improve accessibility

## Existing status

### Page size
Created using Firefox's Web Developer extension (Web Developer -> Information -> View Document Size)

####Overview
* 15 documents: 69KB (265KB uncompressed)
* 123 images: 995KB (995KB uncompressed)
* 0 objects
* 22 scripts: 718KB (1897KB uncompressed)
* 10 style sheets: 108KB (560KB uncompressed)
* **Total** 170 files: 1890KB (3716KB uncompressed)

[View full report](https://github.com/simonhudson/football-league/blob/master/Document_Size_from_www.dcfc.co.uk_-_2016-01-04_11.50.46.png) 


### Page structure
* **Home**
* **News** (Latest news, Pre-match interviews, Post-match interviews, Your 90 minutes, Designated charity, Rams Player, Twitter, Facebook, Instagram, Rams Wall, YouTube, Vine, Google+)
* **Fixtures & Results** (League table, Fixtures list, Match preview, Match report, Image gallery, U21 fixtures, U18 fixtures, Match highlights, Live match commentary, The Full 90, The Ram, Download fixtures, Matchday betting)
* **Tickets** (How to buy, Group tickets, Roadrider, Disabled supporters, Terms & conditions, 2015/16 season tickets, Home match tickets, Away match tickets, Away supporters details, Opening hours, Demand Pricing details, Membership & Rams Squad, Parking passes)
* **Team** (Player profiles, Staff profiles, U21 player profiles, U18 player profiles, About the Academy, U21 news & reports, U18 news & reports, BU21PL table, BU18PL table, Derby County Academy, Players Twitter feed, DCFC Ladies, DCFC Girls' CoE)
* **Stats** (Head-to-head stats, Player stats, FA Rules & Governance)
* **Fans** (Competitions, Sponsor offers, Rams Trust, Fans First, wearederby.com, Rams Lotto, Travel information, First Time Rams, Supporters' club, Rams Recollections, Disabled Supporters' Club)
* **Club** (Business finder, Contact us, History, Ownership & Board, Who's who, Club Charter, iPro Stadium, Stadium tours, DCFC Megastore, Derby County Community Trust, iPro Stadium events, Jobs, Rammie, Rams Football Weekends, Press & Media)
* **Commercial** (Commercial stories, Advertisters & Partners, QTS Group, University of Derby, Team Derby, Hospitality website, Matchday hospitality, Seasonal hospitality, Fan packages, Hospitality T&Cs Meetings & conferences, Igor's Upcoming events)

### Home page features
* New carousel (5 items)
* Latest news
* Fixtures (next (default) & previous)
* Feature carousel x 2 (sponsors, tickets, Rams Player)
* Form pie chart
* Video
* Image gallery (12 imgs)
* League table (displays 2 above and 2 below club position)
* Poll
* Twitter feed (latest Tweet)
* Players carousel
* Search (right side flyout)
* Mailing list (right side flyout)

## Approach

### Information Architecture
* Classify each page as "Supporter interest", "Club info" or "Commercial"
* Consolidate and remove repetition
  * Social media links duplicated on page
  * Mailing list functionality on right side flyout and in header

### Page size
* Target use of images as priority
  * Improve compression
  * Make use of srcset
* Review use of scripts
  * Third-party
  * Repeated calls
    * http://platform.twitter.com/widgets.js is called twice @ 86KB each time
    * jQuery is called from both the Google CDN and also included as part of http://www.dcfc.co.uk/js/combinedjs/combinedtop.js

### Front-end build
* Implement adaptive grid
