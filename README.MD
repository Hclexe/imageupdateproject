Veritabanlarına bakmak için:



show dbs


Yeni bir veritabanı oluşturmak ve kullanmak için:



use pcat-test-db


Photos collection ve bu collection içerisindeki ilk dökümanımızı oluşturmak için:



db.photos.insertOne(
  {title: "Photo 1", description: "Photo description lorem ipsum", qty:20}
)


Oluşturduğumuz dökümanı görebilmek için:



db.photos.find()


Döküman ile beraber collectionda oluşacağını belirtmiştik, collectionları görmek için:



show collections


Birden daha fazla dökümanı oluşturmak için:



db.photos.insertMany([
  {title: "Photo 2", description: "Photo 2 description", qty:50},
  {title: "Photo 3", description: "Photo 3 description", qty:150}
])


Belirli özelliklere sahip dökümanları sıralamak için 2 örnek:



db.photos.find({title: "Photo 1"})
db.photos.find({title: "Photo 1", qty:200})


Dökümanı güncellemek için, öncelikle hangi dökümanı güncelleyeceğimizi belirtmemiz gerekir. Aşağıdaki örneğimizde {title: "Photo 1"} ile hangi dökümanı güncelemek istediğimizi belirtiyoruz, $set ile de yapacağımız değişikliği belirtiyoruz:



db.photos.updateOne( {title: "Photo 1"}, { $set: {qty:222}} )


Bir Dökümanı silmek için de yine öncelikle hangi gökümanı silmek istediğimizi yakalamamız gerekiyor. Aşağıdaki örneğimizde qty:50 olan dökümanı siliyoruz. Eğer birden daha fazla döküman varsa ilki silinir. Birden fazla döküman silmek için, deleteMany() kullanılır.



db.photos.deleteOne({qty: 50})