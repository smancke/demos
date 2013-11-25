describe('the save.php service', function() {
    
    var self;

    beforeEach(function() {
        self = this;

    });



    it('should be possible to save and retrieve a string', function() {

        teststring = Math.random().toString(36).substring(2,7);

        // save the data
        $.ajax({
            url: '/demo/save.php', 
            async: false,
            type: 'POST',
            dataType: 'text',
            data: teststring

        }).done(function(result) {
            self.expect(result).toEqual(teststring);
        }).fail(function(jqXHR, textStatus, errorThrown) {
            self.fail("failed with http status "+ jqXHR.status);                
        });


        // retrieve the data
        $.ajax({
            url: '/demo/save.php', 
            dataType: 'text',
            async: false,
        }).done(function(result) {
            self.expect(result).toEqual(teststring);
        }).fail(function(jqXHR, textStatus, errorThrown) {
            self.fail("failed with http status "+ jqXHR.status);                
        });
    });

});