# Tweeter Project

Tweeter is a simple, single-page Twitter clone which demonstrates CSS, jQuery, AJAX, and responsive front-end design.

## Functionality

Users can craft tweets and receive immediate feedback on their character count. Empty tweets (including tweets composed of whitespace) and tweets over the 140-character limit are not allowed, and will result in an error.

There are no user accounts in Tweeter; all tweets are posted anonymously under randomly generated usernames.

There is no persistent database of tweets; data is stored in volatile memory, and will be erased whenever the server is restarted.

Tweeter is for demonstration purposes only.

## Screenshots

!["Wide display for desktop or laptop resolutions."](https://github.com/philipd/tweeter/blob/master/docs/desktop.png)
!["Tweet compose box in action, with counter updating to display number of characters remaining until the limit is reached."](https://github.com/philipd/tweeter/blob/master/docs/compose.png)
!["An example error message, which displays when the user attempts to submit a tweet over the 140-character limit. Note that the counter has turned red as well."](https://github.com/philipd/tweeter/blob/master/docs/too-long.png)
!["Tweets display additional information when the user hovers over them."](https://github.com/philipd/tweeter/blob/master/docs/hover.png)

## Dependencies

- Express
- Node 5.10.x or above
- Body-parser 1.15.2 or above
- Chance 1.0.2 or above
- MD5 2.1.0 or above
- Moment 2.27.0 or above