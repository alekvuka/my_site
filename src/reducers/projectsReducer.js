export default function projectsReducer(
  state = {
    projects: [
      {name: "NYC Traffic",
       description: "Organises live traffic cameras in NYC based on avenue and borough enabeling users to easely see traffic conditions live on a given route. Built with React along with a Rails API.",
       github: "https://github.com/alekvuka/nyc_traffic_cam",
       website: ""},
      {name: "Bookshare",
       description: "Allows readers to lend books to one another. Built using Sinatra",
       github: "https://github.com/alekvuka/community_book_share",
       website: ""},
      {name: "Apollo Clockface",
       description: "Clockface app for FitBit Ionic and Versa devices that displays time and user's heart rate. Built with FitBit Studio in JavaScript.",
       github: "https://github.com/alekvuka/apolloClockFace",
       website: ""},
      {name: "Routine Tracker",
       description: "Users can track and share their daily routines. Built with Rails with MVC framework.",
       github:"https://github.com/alekvuka/routine_tracker",
       website: "" },
      {name: "Routine Tracker JS",
       description: "Users can track their daily routines. Built in JavaScript as front end and Rails API to persist data.",
       github: "https://github.com/alekvuka/routines_js",
       website: ""},
      {name: "Scraper GEM",
       description: "A ruby gem that provides a CLI for the user to interact with. Uses Nokogiri to scrape a heath web site and organize its doctors and specialties.",
       github: "https://github.com/alekvuka/health_clinic_scraper",
       website: ""},
      {name: "This Site",
      description: "Built with React incorpirating React Bootstrap and CSSTransitions libraries.",
      github: "https://github.com/alekvuka/my_site",
      website: ""}
    ],
    seenAnimations: false
  }, action

) {
  switch(action.type) {
    case "SEEN":
      return {
        ...state,
        seenAnimations: true
      };
      default:
        return state;
  }

}
