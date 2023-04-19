function chatPopup(){
  var myLandbot;
  if (!myLandbot) {
    var s = document.createElement('script');s.type = 'text/javascript';s.async = true;
    s.addEventListener('load', function() {
      myLandbot = new Landbot.Popup({
        configUrl: 'https://storage.googleapis.com/chats.landbot.io/v3/H-991902-B8YMZ7OY1RAF9PMQ/index.json',
      });
      myLandbot.onLoad(function() { 
            myLandbot.open()        
      })  
    });
    s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
  }
}