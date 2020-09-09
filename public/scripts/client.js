/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const createTweetElement = function(tweetData) {
  let $article = $('<article>').addClass('tweet');
  let $header = $('<header>');
  let $userinfo = $('<div>').addClass('userinfo');
  let $avatar = $('<img>').addClass('avatar').attr('src',tweetData.user.avatars);
  let $username = $('<div>').addClass('username').text(tweetData.user.name);
  let $userid = $('<div>').addClass('userid').text(tweetData.user.handle);
  let $content = $('<div>').addClass('content').text(tweetData.content.text);
  let $footer = $('<footer>');
  let $dateTweeted = $('<span>').addClass('date-tweeted').text(tweetData.created_at);
  let $links = $('<span>').text('# $ &');
  
  $userinfo.append($avatar, $username);
  $header.append($userinfo, $userid);
  $footer.append($dateTweeted, $links)
  $article.append($header, $content, $footer);
  return $article;
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
