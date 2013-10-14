
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

    this.saveList = function() {
        $.ajax({
            type: 'POST', 
            url: 'save.php', 
            data: JSON.stringify(ko.toJS(this.persons))
        })
    }

    this.loadList = function() {
        self = this;
        $.ajax({
            url: 'save.php', 
            dataType: 'json'
        }).done(function(data) {
            self.persons(data);
        });
    }
}
    
ko.applyBindings(new PersonList());