# Take-home challenge instructions

### Aim of this challenge:

- Develop a simple app using React Native & TypeScript
- You have full freedom over the styling of your app and while this is not as important to your overall score as functionality and code conventions we would expect your app to be responsive and follow best CSS practices (e.g. BEM naming conventions)
- App.tsx currently imports dummy json data - you **MUST** use data returned from an api call in your final submission, rather than this data.
- The app must run on ios and android (if there is something preventing you from running either of these builds, please let us know)

### Running the app

To fire up the project run `npm install` and then `npx react-native run-ios` (for ios devices) or `npx react-native run-android` (for android devices) in the root directory. You must have xcode and the relevant ios emulators or android studio with android emulators to run this project. See https://reactnative.dev/docs/environment-setup for details


### Requirements and expectations:
[DELETE NON-APPLICABLE]
#### Junior Developer
  - Create at least two separate pages:
    - Home page with ~10 items displayed
    - Individual page to show info on each item, accessed by clicking on an item on the home page
  - Use of at least 3 separate front-end components to display data (you may edit and use the existing `Card` component but `App` does not count 😉 )
  - Integrate with one of the APIs listed below to retrieve data using a GET request (any method of implementation is allowed)
    - https://openwhyd.github.io/openwhyd/API
    - https://www.tvmaze.com/api (this api is used for the dummyData but you would be expected to use a different endpoint(s) to display your data and the corresponding components)
    - https://elephant-api.herokuapp.com/
  - Push to a repo on github/gitlab with properly labelled commits

#### Mid-Weight Developer
  - Create at least two separate pages, ideally with some navigation/links/routing:
    - Home page with ~10 items displayed
    - Individual page to show info on each item, accessed by clicking on an item on the home page
  - Use of at least 3 separate front-end components to display data (you may edit and use the existing `Card` component but `App` does not count 😉 )
  - Integrate with one of the APIs listed below to retrieve data using an authenticated GET request (any method of implementation is allowed)
    - https://developers.themoviedb.org/3/getting-started/authentication
    - https://developer.spotify.com/documentation/web-api/
    - https://developers.gettyimages.com/docs/
  - Include a search component using queries to filter results
  - Apply atomic design priniciples to the app structure
  - Setup linting config and apply to your repo
  - Push to a repo on github/gitlab with properly labelled commits

  #### Senior Developer
  - Create at least two separate pages, ideally with some navigation/links/routing:
    - Home page with ~10 items displayed
    - Individual page to show info on each item, accessed by clicking on an item on the home page
  - Use of at least 3 separate front-end components to display data (you may edit and use the existing `Card` component but `App` does not count 😉 )
  - Integrate with one of the APIs listed below to retrieve data using an authenticated GET request (any method of implementation is allowed)
    - https://developers.themoviedb.org/3/getting-started/authentication
    - https://developer.spotify.com/documentation/web-api/
    - https://developers.gettyimages.com/docs/
  - Include a search component using queries to filter results
  - Apply atomic design priniciples to the app structure
  - Setup linting config and apply to your repo
  - Implement performant code and comment to show where you have made improvements or tested your output
  - Keep the size of your built repo as small as possible
  - Push to a repo on github/gitlab with properly labelled commits