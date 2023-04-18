// function chatPopup(){
//   window.addEventListener('mouseover', initLandbot, { once: true });
//   window.addEventListener('touchstart', initLandbot, { once: true });
//     console.log("## signed in - 02")
//     const myLandbotPopup = new LandbotPopup({
//       index: 'https://storage.googleapis.com/chats.landbot.io/v3/H-991902-B8YMZ7OY1RAF9PMQ/index.html',
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
    var myLandbot = new Landbot.Fullpage({
      configUrl: 'https://storage.googleapis.com/chats.landbot.io/v3/H-991902-B8YMZ7OY1RAF9PMQ/index.json',
    });
  }
}


