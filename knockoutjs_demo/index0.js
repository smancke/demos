
function PersonList() {
    this.person = {
        first: "Sebastian",
        last: "Mancke",
    };
}
    
ko.applyBindings(new PersonList());