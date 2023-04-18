function chatPopup(){
    console.log("## signed in - 02")
    // const myLandbotPopup = new LandbotPopup({
    //   index: 'https://chats.landbot.io/v3/H-991902-B8YMZ7OY1RAF9PMQ/index.html',
    //   open: true,
    //   launcherOptions: {
    //     enable: false,
    //   }
    // });
    var initLandbot = new Landbot.Fullpage({
      configUrl: 'https://storage.googleapis.com/chats.landbot.io/v3/H-991902-B8YMZ7OY1RAF9PMQ/index.json',
      open: true,
      launcherOptions: {
        enable: false,
      }
    });
}
