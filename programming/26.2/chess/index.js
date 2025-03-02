const PiecesTypes = {
    bishop: "bishop",
    queen: "queen",
    knight: "knight",
    king: "king",
    tomer: "tomer"
}

function Piece(_type, _location, _color) {
    this.type = _type;
    this.location = _location;
    this.color = _color;
    this.isAlive = true;
}
Piece.prototype.move = function (_newLocation) {
    switch (this.type) {
        case PiecesTypes.king:
            console.log("i am king..")
            break;
        case PiecesTypes.queen:
            console.log("i am queen..")
            break;
        case PiecesTypes.bishop:
            console.log("i am bishop..")
            break;
        case PiecesTypes.tomer:
            console.log("i am tomer..")
            break;

        default:
            break;
    }
}

const queen = new Piece(PiecesTypes.king, "D8", "white")
queen.move("H16")
console.log(queen)