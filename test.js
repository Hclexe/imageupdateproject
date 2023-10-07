const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb+srv://ifkadeveloper:<Ddoblo2009%>@cluster0.kkmktmm.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model("Photo", PhotoSchema);

Photo.create({
  title: "merhaba",
  description: "Dunya",
})
  .then((createdPhoto) => {
    console.log("Fotoğraf başarıyla oluşturuldu:", createdPhoto);
  })
  .catch((error) => {
    console.error("Fotoğraf oluşturulurken bir hata oluştu:", error);
  });

/*
// read a photo okuma
Photo.find({})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
*/

/* // foto guncelleme once id belirtilir...
const id = "6467291bce71c495764a1a2e";

Photo.findByIdAndUpdate(
   id,{
    title:"merhaba",
    description:"dunyaaaa",
   }, 
).then((data)=>{
    console.log("veri gonderme basarili",data);
}).catch((err)=>{
    console.log("Tekrar Deneyiniz",err);
})
*/

/* 
const id = '6079f04e5916c524d4bdcb74';
Photo.findByIdAndUpdate(
  id,
  {
    title: 'Photo Title 111 updated',
    description: 'Photo description 111 updated',
  },
  {
      new: true //konsolda guncellenmis veriyi gosterir...
  },
  (err, data) => {
    console.log(data);
  }
);
*/
