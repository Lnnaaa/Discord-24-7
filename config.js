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
    "Editing Grimoire.php",
    "Editing index.js",
    "Editing player.js",
    "Editing Animations.json",
    "Editing AnimationControllers.json",
    "Editing MagmaAxe.json",
    "Editing Grimoire.ac.json",
    "Editing config.json",
  ];

  const statesList = [
    "Workspace: Mythoria",
    "Workspace: Plugins",
    "Workspace: MythoriaAPI",
  ];

  function updatePresence() {
    const details = getRandomElement(detailsList);
    const extension = details.split(".").pop();
    let largeImage, largeText;

    switch (extension) {
      case "php":
        largeImage = "mp:attachments/832891477352775711/1355143959608955031/avDKGKQ.png?ex=67e7dba9&is=67e68a29&hm=d25638454232d2b5463749ceef287b3ad38aa4f158298abb450d33ea29801b96&=&width=856&height=856";
        largeText = "Editing a PHP file";
        break;
      case "js":
        largeImage = "mp:attachments/832891477352775711/1355143961232015437/ZeXfAQD.png?ex=67e7dba9&is=67e68a29&hm=205ae486e6d25dd695bea55304409889a2f00a5fa95975b4ac1747577ce41501&=&width=856&height=856";
        largeText = "Editing a Javascript file";
        break;
      case "json":
        largeImage = "mp:attachments/832891477352775711/1355143957755203615/qDUEf6A.png?ex=67e7dba8&is=67e68a28&hm=53a615ce8b209adf14c9b294cc72db85f4540c719a929cbc96447ce7d90cdc8a&=&width=856&height=856";
        largeText = "Editing a JSON file";
        break;
      default:
        largeImage = "default_image_url";
        largeText = "Editing a file";
    }

    const activity = new discord.RichPresence()
      .setApplicationId("1119170929747050506")
      .setType("PLAYING")
      .setName("Visual Studio Code")
      .setDetails(details)
      .setState(getRandomElement(statesList))
      .setStartTimestamp(global.startTime)
      .setAssetsLargeImage(largeImage)
      .setAssetsLargeText(largeText)
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
