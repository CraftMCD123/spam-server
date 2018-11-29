const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "3";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "505286693532729345"; // ايدي السررفر
var channel = "516025565229219840";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**https://discord.gg/qxrupv3 @everyone , **')
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "wow") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
client.login('NTAxMDQ2NDgzNjY4MzAzODcy.DuGtPg.OUcZ47OwSBSnkNcVUZLbAD2qH34');
