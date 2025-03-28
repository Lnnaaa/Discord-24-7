const discord = require("discord.js-selfbot-v13");

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min) * 60 * 60 * 1000; // Convert hours to ms
}

function reloadPresence(client) {
  const detailsList = [
    "Editing Loader.php",
    "Editing Main.php",
    "Editing MythrilOre.php",
    "Editing Grimoire.php"
  ];

  const statesList = [
    "Workspace: Mythoria",
    "Workspace: Mythoria",
    "Workspace: Plugins",
    "Workspace: MythoriaAPI",
  ];

  function updatePresence() {
    const activity = new discord.RichPresence()
      .setApplicationId("1119170929747050506")
      .setType("PLAYING")
      .setName("Visual Studio Code")
      .setDetails(getRandomElement(detailsList))
      .setState(getRandomElement(statesList))
      .setStartTimestamp(global.startTime)
      .setAssetsLargeImage(
        "mp:attachments/832891477352775711/1355116038768824320/vHG7tf1.png?ex=67e7c1a8&is=67e67028&hm=802d27cf7520af7a5d7d2c03c54f39a7cff41a070c214e27e394b43f295a1061&=&width=3500&height=3500",
      )
      .setAssetsLargeText("Editing a PHP file")
      .setAssetsSmallImage(
        "mp:attachments/832891477352775711/1355124093057241230/fDW5JeU.png?ex=67e7c928&is=67e677a8&hm=382b2716bcf4a690bca97a13a0e5afa2ad082356295b59759132588ccb00b9ba&=&width=2500&height=2500",
      )
      .setAssetsSmallText("Visual Studio Code");
    client.user.setActivity(activity.toJSON());
    client.user.setStatus("idle");

    const nextUpdate = getRandomInterval(1, 4);
    setTimeout(updatePresence, nextUpdate);
  }

  updatePresence();
}

module.exports = reloadPresence;
