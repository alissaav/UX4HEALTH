const settings = {
  "name": "toolkit",
  "state": {
    "frontity": {
      "url": "https://ux.codeforhealth.de",
      "title": "UX4Health - Toolkit",
      "description": "A collection of ux methods designed for health."
    }
  },
  "packages": [
    {
        name: "wireframe-theme",
        state: {
          theme: {
            menu: [
              ["Home", "/"],
              ["Methoden", "/methodology/"],
              ["Templates", "/templates/"],
              ["Workshop-Tool", "/workshop-tool/"]
            ],
            featured: {
              showOnList: true,
              showOnPost: true
            }
          }
        }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          url: "https://ux-wp.codeforhealth.de",
          "homepage": "home",
          "postsPage": "/methodology",
          "categoryBase": "/methodology/category",

          // "tagBase": "/methodology/tag"       
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
