"use strict";

require("dotenv").config();

const http = require("http");
const express = require("express");
const app = express();

//
app.use(express.static("public"));

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Servidor corriendo");
});

///////////////////////////////////////////////////////////////////////
////////////////////////BOT REAL/////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

const { Client, MessageEmbed } = require("discord.js");

const client = new Client();

client.on("ready", () => {
  console.log(`Bot esta listo como ${client.user.tag}`);

  client.user.setStatus("dnd");

  console.log(client.user.presence.status);
});

// BIENVENIDA

client.on("ready", () => {
  console.log("Bienvenida Lista!");
});

// Create an event listener for new guild members
client.on("guildMemberAdd", (member) => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(
    (ch) => ch.name === "bienvenida"
  );

  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(` Bienvenid@, ${member} ahora eres un tester xd`);
});

client.on("message", async (message) => {
  // recibiendo el mensaje
  console.log(message.content);

  // mensaje de respuesta
  if (message.content === "ping") {
    message.reply("pong");
  }
   if (message.content === "pong") {
    message.reply("MXMX");
  }

  if (message.content === "Hello") {
    message.channel.send(`Hello ${message.author}`);
  }

  if (message.content === "Nigga") {
    message.channel.send(`No se que decir ${message.author} u//w//u`);
  }

  if (message.content === "Omae wa mou shindeiru") {
    message.channel.send(`NANI!!!`);
  }

  if (message.content.includes(">F")) {
    message.channel.send(
      `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSu29hzgOBB3o5Vn1alac7j6M_hkekQhEh2YGv5dnRsEMHlWQ-P&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSu29hzgOBB3o5Vn1alac7j6M_hkekQhEh2YGv5dnRsEMHlWQ-P&usqp=CAU`
    );
  }
  // COMANDOS

  if (message.content.includes(">p")) {
    message.channel.send("Aun no tengo audio :c");
  }

  if (message.content === ".paisana") {
    const Personajes = new MessageEmbed()
      .setColor("RED")
      .setImage(
        "https://i.pinimg.com/originals/ec/e5/21/ece52119e28d28af5caf4e72ceaf24cb.jpg"
      )
      .setTitle("PAISANA JACINTA")
      .addField("ñañaña", "sjsj");

    message.channel.send(Personajes);
  }
  if (message.content === ".F") {
    const F = new MessageEmbed()
      .setColor("BLACK")
      .setImage(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSu29hzgOBB3o5Vn1alac7j6M_hkekQhEh2YGv5dnRsEMHlWQ-P&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSu29hzgOBB3o5Vn1alac7j6M_hkekQhEh2YGv5dnRsEMHlWQ-P&usqp=CAU"
      )
      .setTitle("F")
      .addField("Has mostrado tus respetos ", "Bien hecho soldado");

    message.channel.send(F);
  }

  if (message.content === ".mascaly") {
    const mascaly = new MessageEmbed()
      .setColor("RED")
      //.setImage('https://i.ytimg.com/vi/QAIg_lIkUWI/hqdefault.jpg')
      .setImage("https://i.makeagif.com/media/2-12-2016/HDhw8P.gif")
      .setTitle("Mascaly")
      .addField("Ten cuidado con su...", "GAAAAAAAAAAAAAAAAAAAAAAAAAA")
      .setDescription("¡¡HAS INVOCADO A MASCALY!!");
    message.channel.send(mascaly);

    message.reply("Ha muerto en manos de Mascaly...");
  }

  if (message.content === ".vizcacha") {
    const Viscarra = new MessageEmbed()
      .setColor("#2271b3")
      .setImage("https://pbs.twimg.com/media/ETfYSY9UUAA5ARE.jpg")
      .setTitle("Martin Vizcacha")
      .setDescription("Todo un papucho...");

    message.channel.send(Viscarra);
  }

  if (message.content === ".peruano") {
    const Peruano = new MessageEmbed()
      .setColor("#2271b3")
      .setImage(
        "https://lh6.googleusercontent.com/proxy/3R8XcE1-Zw8ftq9vvC2uzOXs9M_OzKyhR9RzYMczZXLDZVo2fgQYRjdg6yDtuwnztlBm3mroxR0tvLULBbUT1mSeJhDSfg88eSzQtOKsK4V1MYYybv37PJPSeqFTsd5US5QpS655-xkt1S0oF9wFY5-gF4FcvA=w1200-h630-p-k-no-nu"
      )
      .setTitle("El Peruano")
      .setDescription("Cuidado que es muy poderoso");

    message.channel.send(Peruano);
  }

  if (message.content === ".harem") {
    const Harem = new MessageEmbed()
      .setThumbnail()
      .setDescription("Se aceptan recomendaciones")
      .setColor("WHITE")
      .setTitle("HAREM ACTUAL")
      .addField("Waifus", "mascaly\npaisana\n--------")
      .addField("Husbandos", "vizcacha\nperuano\n--------");

    message.channel.send(Harem);
  }

  var SaludoRandom = [
    "hola uwu",
    "Hola ¿Como estas?",
    "Konnichiwa",
    "alv funciono",
  ];
  var MensajeAleatorio = Math.floor(Math.random() * SaludoRandom.length);

  if (message.content.startsWith("Hola <@721756632547328130>")) {
    message.channel.send(SaludoRandom[MensajeAleatorio]);
  }

  var GifHug = [
    "https://media.tenor.com/images/acd0a348a4dc3ac55049bc83e4e75d92/tenor.gif",
    "https://cdn63.picsart.com/198502143004202.gif",
    "https://media1.tenor.com/images/bb841fad2c0e549c38d8ae15f4ef1209/tenor.gif?itemid=10307432",
    "https://pa1.narvii.com/6088/9c72715f55756f0a70094f77867bd3a2e8611309_hq.gif",
    "https://pa1.narvii.com/6384/6d0504803221232f32b187120c45566c640fb09f_00.gif",
    "https://cdn73.picsart.com/199107256000202.gif?to=min&r=640",
    "https://i.pinimg.com/originals/aa/3f/f9/aa3ff9b708e9255382c70e2c2570ef83.png",
  ];
  var HugAleatorio = Math.floor(Math.random() * GifHug.length);

  if (message.content.startsWith(".hug")) {
    const Abrazo = new MessageEmbed()

      // .setImage('https://media.tenor.com/images/acd0a348a4dc3ac55049bc83e4e75d92/tenor.gif')
      .setImage(GifHug[HugAleatorio]);

    let user = message.mentions.users.first() || message.author;

    message.channel.send(
      "<@" + message.author + "> abrazó  a <@" + user.id + "> uwu"
    );
    message.channel.send(Abrazo);
  }

  // ROLES
  if (message.content.startsWith(".clear")) {
    if (
      message.member.roles.cache.find((rol) => rol.id === "722892500066500660")
    ) {
      var MensajesObtenidos = await message.channel.messages.fetch({
        limit: 10,
      });
      message.channel.bulkDelete(MensajesObtenidos);
      console.log("Mensajes eliminados");
    } else {
      message.channel
        .send(":x: No tienes el rol :x:  ")
        .then((msg) => msg.delete({ timeout: 5000 }));
    }
  }

  var AvatarPerfil = message.author.displayAvatarURL();

  //AVATAR
  if (message.content === ".avatar") {
    const Avatar = new MessageEmbed().setImage(AvatarPerfil);

    // Send the user's avatar URL
    message.reply(Avatar);
  }

  if (message.content === ".info") {
    const Info = new MessageEmbed()
      .setThumbnail(
        "https://media.giphy.com/media/j0kP7fOkKQlYsXTO2r/giphy.gif"
      )
      .setAuthor(message.member.displayName, message.author.displayAvatarURL())
      .setColor("YELLOW")
      .setTitle(":hatched_chick: Informacion Del Servidor :hatched_chick:")
      .setDescription(
        "Hola este es el servidor que he creado para poder probar a mi bot.\nEsto solo es un proyecto de prueba para ver que puedo hacer.\nSi les molesto con menciones por favor notificarme para ya no hacerlo \n Gracias."
      )
      .addField("ID:", message.guild.id)
      .addField("Region:", message.guild.region)
      .addField("Dueño", message.guild.owner.displayName)
      .addField("Miembros", message.guild.memberCount);

    message.channel.send(Info);
  }
});

client.login(process.env.DISCORD_TOKEN);
