const Database = require("./db");
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
  //inserir dados na tabela
  await saveOrphanage(db, {
    id: 1,
    lat: "-23.6815315",
    lng: "-46.8354829",
    name: "lar dos meninos",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "789648698789567",
    images: [

        "https://images.unsplash.com/photo-1601180964546-f5c6ac9fdc14?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

        "https://images.unsplash.com/photo-1600720642653-529b16872835?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(),
    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "horário de visitas Das 18h até 8h",
    open_on_weekends: "0"
  })

  //consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  // consultar somente 1 orfanato, pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
  console.log(orphanage)

  // deletar dado da tabela
//   console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
//   console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
//   console.log(await db.run("DELETE FROM orphanages WHERE id = '6'"))

})