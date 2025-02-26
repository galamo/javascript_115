// board
// rectangle
// arrow
// text

const board = {
    height: "500px",
    width: "500px",
    background: "white",
    createdAt: new Date().toString(),
    shapes: []
}

function RectangleShape(_location) {
    this.width = "20px"
    this.height = "20px"
    this.location = { x: _location.x, y: _location.y }
    this.color = "white"
    this.createdAt = new Date().toString()
    this.id = `rectangle-${Date.now() + Math.ceil(Math.random() * 9999)}`
}

function TextItem(_value) {
    this.value = _value
    this.fontSize = "16px"
    this.location = "center"
    this.color = "black"
    this.createdAt = new Date().toString()
    this.id = `text-${Date.now() + Math.ceil(Math.random() * 9999)}`
}

RectangleShape.prototype.setText = function (_text) {
    this.text = _text
}

const rec1 = new RectangleShape({ x: 100, y: 100 })
rec1.setText(new TextItem("company1"))

const rec2 = new RectangleShape({ x: 100, y: 200 })
rec2.setText(new TextItem("company"))

const arrow1 = new Arrow({ ...}) // implement arrow Function Constructor


board.shapes.push(rec1, rec2, arrow1)

console.log(board)

