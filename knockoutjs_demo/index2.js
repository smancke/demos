
function PersonList() {
    this.person = {
        first: ko.observable(''),
        last: ko.observable(''),

        fullName: function() {
            return this.first() + " " + this.last();
        }
    };

    this.persons = ko.observableArray([]);

    this.add = function() {
        this.persons.push(ko.toJS(this.person));
        this.person.first('');
        this.person.last('');        
        $('#firstname').focus();
    }
}
    
ko.applyBindings(new PersonList());