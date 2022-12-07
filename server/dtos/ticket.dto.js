module.exports = class TicketDto {
    name;
    price;
    date;
    time;
    placeFrom;
    placeTo;
    vip;
    id;
    constructor(model) {
        this.name = model.name;
        this.price = model.price;
        this.date = model.date;
        this.time = model.time;
        this.placeFrom = model.placeFrom;
        this.placeTo = model.placeTo;
        this.vip = model.vip;
        this.id = model._id;
    }
}