const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = '+';

bot.on('message', msg => {
  if (msg.content === prefix + 'ping') {
    msg.reply(`**${bot.ping}** pong`);
  }
  if (msg.content === prefix + 'yardım') {
    const embed = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor(msg.author.username, msg.author.avatarURL)
      .addField("Modearatör Komutları", `${prefix}ban = Kişiyi sunucudan banlar`)
      .setDescription(`${bot.user.username} Komut Yardımı`)
      .setFooter("TerbiyesizBOT")
      .setTimestamp()
    const embed2 = new Discord.RichEmbed()
      .setColor("GREEN")
      .setDescription("Özel mesajlarını kontrol et :postbox:")
      .setAuthor(msg.author.username, msg.author.avatarURL)
      .setFooter("TerbiyesizBOT")
      .setTimestamp()
    msg.channel.send(embed2).then(msg.author.send(embed));
    /*const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .addField("Modearatör Komutları", `${prefix}ban = Kişiyi sunucudan banlar`) // Falan fistan :D
    .setDescription(`${bot.user.username} Komut Yardımı`)
    .setFooter("Created By Özcan")
    .setTimestamp()
    msg.channel.send(embed);
    */
  }
  if (msg.content === prefix + 'sunucubilgi') {
    const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(msg.author.avatarURL)
      .addField("Sunucu Sahibi", msg.guild.owner)
      .addField("Toplam Üye Sayısı", msg.guild.members.size)
      .addField("Oluşturulma Tarihi", msg.guild.createdAt)
    // bla bla
    msg.channel.send(embed)
  }
});

/* Botun Token'i */
bot.login('NDM3MjcwNjM2OTEwNDc3MzEz.Dbz5xw.aKtVdBPmMpwJIQspZpS2f7I3JcI');

/* Bot Açılınca */
bot.on('ready', () => {
  console.log(`Yapımcısı Enes Onur Ata olan ${bot.user.username} botu sunucuya katıldı!`);
});

/* Botun Oynuyor Kısmı */
bot.on('ready', () => {
  bot.user.setStatus("STREAMING"); // Aynı zamanda STREAMING: YAYINDA: WATCHING: İZLİYOR: DND: RAHATSIZ ETMEYİN GİBİ TERİMLERDE VARDIR
  bot.user.setActivity('+yardım | TerbiyesizBOT', {
    type: "STREAMING"
  }); // Aynı zamanda STREAMING: YAYINDA: WATCHING: İZLİYOR: DND: RAHATSIZ ETMEYİN GİBİ TERİMLERDE VARDIR
})

/* Yeniden Başlatma */
bot.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'yeniden başlat') {
  if (msg.author.id !== '274551537139712001') {
    msg.reply(':name_badge: Benim yapımcım değilsin!');
  } else {
    msg.channel.sendMessage(`:white_check_mark: Bot yeniden başlatılıyor...`).then(msg => {
    console.log(`BOT: Bot yeniden başlatılıyor...`);
    process.exit(0);
  })
 }}}); 

/* Yazdırma */
bot.on('message', msg => {
    if (msg.content.startsWith(prefix + "yaz")) {
      if (msg.channel.type !== "dm"){
      let mesaj = msg.content.substring(2 + 3);
      msg.delete (msg.content == 'yaz' + mesaj)
      let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
         .setDescription(mesaj)
  return msg.channel.send({embed})}
  
      }
      });


/* Selam Verme */
bot.on('message', async msg => {
  if (msg.content.toLowerCase() === 'sa') {
    await msg.react('🇦');
    msg.react('🇸');
  }
});

/* Otomatik Mesajlar */
bot.on('message', msg => {
  if (msg.author.bot) return;
  if (msg.content.toLowerCase().includes('of')) msg.reply('Of deme ah de!');
  if (msg.content.toLowerCase().includes('ah')) msg.reply('Ah deme oh de!');
  if (msg.content.toLowerCase().includes('oh')) msg.reply('Oh deme püf de!');
  if (msg.content.toLowerCase().includes('püf')) msg.reply('Püf deme of de!');
  if (msg.content.toLowerCase().includes('günaydın')) msg.reply('sana da günaydın');
  if (msg.content.toLowerCase().includes('herkese günaydın')) msg.reply('günaydın :)');
  if (msg.content.toLowerCase().includes('iyi geceler')) msg.reply('sana da iyi geceler');
  if (msg.content.toLowerCase().includes('sa')) msg.reply('as');
  if (msg.content.toLowerCase().includes('iyi akşamlar')) msg.reply('sana da iyi akşamlar');
  if (msg.content.toLowerCase().includes('selamın aleyküm')) msg.reply('aleyküm selam');
  if (msg.content.toLowerCase().includes('güle güle')) msg.reply('sana da güle güle');
  if (msg.content.toLowerCase().includes('eoo')) msg.reply('Neoo!');
  if (msg.content.toLowerCase().includes('seni seviyorum')) msg.reply(':heart: Bende Seni Seviyorum :heart:');
});

/* Bilmece */
bot.on('message', msg => {
    if (msg.content === prefix + 'bilmece sor 1') {
      const soru1 = new Discord.RichEmbed()
        .setColor("RED")
        .setAuthor(msg.author.username, msg.author.avatarURL)
        .addField("Soru", `2+2 Kaç yapar`)
        .setDescription(`Hadi Bil`)
        .setFooter("TerbiyesizBOT | Bilmece")
        .setTimestamp()
      const botsoru1 = new Discord.RichEmbed()
        .setColor("GREEN")
        .setDescription("Demek bilmece istiyorsun özelden yolladım hadi bil :postbox:")
        .setAuthor("Cevabını bilmiyorsan : ${prefix}bilmece cevap 1")
        .setFooter("TerbiyesizBOT | Bilmece")
        .setTimestamp()
        msg.channel.send(botsoru1).then(msg.author.send(soru1));
    }
  });
  bot.on('message', msg => {
    if (msg.content === prefix + 'bilmece sor 2') {
      const soru2 = new Discord.RichEmbed()
        .setColor("RED")
        .setAuthor(msg.author.username, msg.author.avatarURL)
        .addField("Soru", `Bir şeker bir çaya ne demiş?`)
        .setDescription(`Hadi Bil`)
        .setFooter("TerbiyesizBOT | Bilmece")
      const botsoru2 = new Discord.RichEmbed()
        .setColor("GREEN")
        .setDescription("Demek bilmece istiyorsun özelden yolladım hadi bil :postbox:")
        .setAuthor(msg.author.username, msg.author.avatarURL)
        .setFooter("TerbiyesizBOT | Bilmece")
        msg.channel.send(botsoru2).then(msg.author.send(soru2));
    }
  });

/* Bilmecenin Cevabı */
bot.on('message', msg => {
    if (msg.content === prefix + 'bilmece cevap 1') {
      const cevap1 = new Discord.RichEmbed()
        .setColor("GREEN")
        .setDescription("Cevabı Söylüyorum")
        .addField("Cevap: 4",)
        .setFooter("TerbiyesizBOT | Bilmece")
        msg.channel.send(cevap1);
    }
  });
  bot.on('message', msg => {
    if (msg.content === prefix + 'bilmece cevap 2') {
      const cevap2 = new Discord.RichEmbed()
        .setColor("GREEN")
        .setDescription("Cevabı Söylüyorum")
        .addField("Cevap: Senin İçin Eriyorum",)
        .setFooter("TerbiyesizBOT | Bilmece")
        msg.channel.send(cevap2);
    }
  });  


  /*
bot.on('message', msg => {
    if (msg.content === prefix + 'ping') {
      msg.reply(`**${bot.ping}** pong`);
    }
    if (msg.content === prefix + 'yardım') {
      const embed = new Discord.RichEmbed()
        .setColor("RED")
        .setAuthor(msg.author.username, msg.author.avatarURL)
        .addField("Modearatör Komutları", `${prefix}ban = Kişiyi sunucudan banlar`) // Falan fistan :D
        .setDescription(`${bot.user.username} Komut Yardımı`)
        .setFooter("TerbiyesizBOT")
        .setTimestamp()
      const embed2 = new Discord.RichEmbed()
        .setColor("GREEN")
        .setDescription("Özel mesajlarını kontrol et :postbox:")
        .setAuthor(msg.author.username, msg.author.avatarURL)
        .setFooter("TerbiyesizBOT")
        .setTimestamp()
      msg.channel.send(embed2).then(msg.author.send(embed));
    }
    if (msg.content === prefix + 'sunucubilgi') {
      const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setThumbnail(msg.author.avatarURL)
        .addField("Sunucu Sahibi", msg.guild.owner)
        .addField("Toplam Üye Sayısı", msg.guild.members.size)
        .addField("Oluşturulma Tarihi", msg.guild.createdAt)
      // bla bla
      msg.channel.send(embed)
    }
  });*/

/* Giriş Çıkış */
bot.on('guildMemberAdd', member => {
  let guild = member.guild;
  let joinRole = guild.roles.find('name', 'Sapık'); // Burada girişte verilcek rolu seçelim.
  member.addRole(joinRole); // seçtiğimiz rolu verelim.

  const channel = member.guild.channels.find('name', 'terbiyesiz'); // burda ise kanalı belirleyelim hangi kanala atsın ben mod-log dedim.
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('📥 | Sunucuya katıldı!')
  .setTimestamp()
  channel.sendEmbed(embed); // belirlediğimiz kanala mesaj gönderelim.
});

bot.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'terbiyesiz');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('📤 | Sunucudan ayrıldı | Görüşmek üzere!')
  .setTimestamp()
  channel.sendEmbed(embed); 
});

/* Sohbet Temizleme */
const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`temizle` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) {
	const botunmesajyonet = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', 'Mesajları silebilmem için `Mesajları Yönet` yetkisine sahip olmalıyım.')
    return message.author.sendEmbed(botunmesajyonet);
  }
  let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
    const sohbetsilindi = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Sohbet silme')
    .addField('Yetkili:', message.author.username)
    .addField('Silinen mesaj sayısı:', messagecount)
    .addField('Sonuç:', `Başarılı`)
    return message.channel.sendEmbed(sohbetsilindi);
    console.log("Sohbet " + message.member + " tarafından silindi!");
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'temizle <temizlenecek mesaj sayısı>'
};
