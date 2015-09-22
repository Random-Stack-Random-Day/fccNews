$(document).ready(function() {
  var hotNewsAPI = "http://www.freecodecamp.com/news/hot";
  $.get(hotNewsAPI, function(hotNews) {
    hotNews.forEach(function(hotNew) {
      var headline = hotNew.headline;
      if (headline.length > 20){
        headline = headline.substr(0, 17) + '...'
      }
      var storyLink = hotNew.link;
      var discussionLink = hotNew.storyLink;
      var authorPicture = hotNew.author.picture;
      var authorName = hotNew.author.username;
      var link = hotNew.link;
      var timePosted = new Date(hotNew.timePosted).toGMTString().slice(0, -13);
      timePosted = "Posted on: " + timePosted;
      if (authorName === undefined) {authorName = "unknown"};
      var upVotes = hotNew.rank; 
      
    $('#news').append('<div class="newsPost col-sm-3"><a href="'+link+'"><img src='+authorPicture+' id="newsLogo"></a><div class="nameHead"> By - '+authorName+ '<p class="hlTest">'+headline+'<p class="nextL">Current Upvotes: '+upVotes+ '<br>'+timePosted+'</div></div>');
    });
    
    
  });
});