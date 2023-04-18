// function chatPopup(){
//   window.addEventListener('mouseover', initLandbot, { once: true });
//   window.addEventListener('touchstart', initLandbot, { once: true });
//     console.log("## signed in - 02")
//     const myLandbotPopup = new LandbotPopup({
//       index: 'https://chats.landbot.io/v3/H-991902-B8YMZ7OY1RAF9PMQ/index.html',
//       open: true,
//       launcherOptions: {
//         enable: false,
//       }
//     });
// }



function chatPopup(){
  console.log("## signed in - 02")
  window.addEventListener('mouseover', initLandbot, { once: true });
  window.addEventListener('touchstart', initLandbot, { once: true });
  var myLandbot;
  function initLandbot() {
    if (!myLandbot) {
      var s = document.createElement('script');s.type = 'text/javascript';s.async = true;
      s.addEventListener('load', function() {
        myLandbot = new Landbot.Popup({
          configUrl: 'https://storage.googleapis.com/chats.landbot.io/v3/H-991902-B8YMZ7OY1RAF9PMQ/index.json',
        });
      });
      s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }
  }
}