const fs = require('fs')
const flatted = require('flatted')

class BaseDatabase {   // modeli parametrik olarak alacak. Yani booking modeli, driver modeli gibi.
  constructor(model) {
    this.model = model
    this.filename = model.name.toLowerCase()
  }

  save(objects) {   //arrayı al, stringe çevir, JSON'a yaz.
    fs.writeFileSync(`${__dirname}/${this.filename}.json`, flatted.stringify(objects, null, 2))
  }

  load() {  // aynı json'dan oku ve objelere dönüştür.
    const file = fs.readFileSync(`${__dirname}/${this.filename}.json`, 'utf8')
    const objects = flatted.parse(file)

    return objects.map(this.model.create)  // crate, new etmeye gerek kalmasın diye, driver ve passanger'da oluşturduk.
  }

  insert(object) {
    const objects = this.load()

    this.save(objects.concat(object))
  }

  remove(index) {
    const objects = this.load()

    objects.splice(index, 1)
    this.save(objects)
  }

  update(object) {
    const objects = this.load()

    const index = objects.findIndex(o => o.id == object.id)

    if (index == -1) throw new Error(`Cannot find ${this.model.name} instance with id ${object.id}`)

    objects.splice(index, 1, object)
    this.save(objects)
  }

  find(id) {
    return this.load().find(o => o.id == id)
  }

  findBy(property, value) {
    return this.load().find(o => o[property] == value)
  }
}

module.exports = BaseDatabase