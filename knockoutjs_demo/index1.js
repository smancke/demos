
function PersonList() {
    this.person = {
        first: ko.observable(''),
        last: ko.observable(''),

        fullName: function() {
            return this.first() + " " + this.last();
        }
    };
}
    
ko.applyBindings(new PersonList());