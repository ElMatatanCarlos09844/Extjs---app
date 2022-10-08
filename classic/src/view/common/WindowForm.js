Ext.define('app.view.common.WindowForm',{
    extend: 'Ext.window.Window',

    buttons: [{
        itemId: 'submit',
        text: 'Submit',
    },{
        itemId: 'load',
        text: 'Load',
    },{
        text: 'Close',
        handler: function(){
            var form = this.up('window');
            //console.log(form)
            form.close();
        }
    }]
});