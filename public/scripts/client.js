/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const createTweetElement = function(tweetData) {
  let tweetHTML =
    `<article class="tweet">
        <header>
          <div class="userinfo">
            <img class="avatar" src="${tweetData.user.avatars}">
            <div class="username">${tweetData.user.name}</div>
          </div>
          <div class="userid">${tweetData.user.handle}</div>
        </header>
        <div class="content">${tweetData.content.text}</div>
        <footer>
          <span class="date-tweeted">${tweetData.created_at}</span>
          <span class="links"># $ &</span>
        </footer>
      </article>`;
  return $(tweetHTML);
};

const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    let $tweet = createTweetElement(tweet);
    $('#tweets').prepend($tweet);
  }
};

const loadTweets = function() {
  $.ajax('tweets/', { method: 'GET' })
    .then(function(response) {
      // console.log('Success: ', response);
      renderTweets(response);
    });
};

$(document).ready(function() {
  loadTweets();

  const $tweetForm = $('#new-tweet-form');

  $tweetForm.submit(function(event) {
    event.preventDefault();
    // validate data
    tweetText = $('#tweet-text').val();

    if (tweetText.trim().length === 0) {
      alert('Empty tweets are not allowed')
    } else if (tweetText.length > 140) {
      alert('Your tweet is too long')
    } else {
      // serialize the form data for submission to the server
      const serializedTweet = $(this).serialize();
      $('#tweet-text').val(''); 
      // submit serialized data to the server via a POST request to `/api/posts`
      $.post('tweets/', serializedTweet)
        .then((response) => {
          // console.log(response);
          loadTweets();
        });
    }
  });


});
