const bookProto = {
    describe: function () {
        console.log(`${this.title} by ${this.author}`)
    }
} 

const book = Object.create(bookProto)
book.title = "Sapiens"
book.author = "Yuval Noah"

book.describe()