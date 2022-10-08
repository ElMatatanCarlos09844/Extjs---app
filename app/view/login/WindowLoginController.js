Ext.define( 'app.view.login.WindowLoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.windowlogincontroller',
    closeLoginWindow : function(){//atajo del evento onClick
        //var fromLogin = this.lookupReference('loginForm').getValues();

        // Ext.Ajax.request({
        //     url:'server/dologin.json',
        //     scope: this, //same scope
        //     params: fromLogin,

        //     success: function(response, opts) {
        //         var obj = Ext.decode(response.responseText);
        //         console.dir(obj);

        //         this.getView().close();
        //         Ext.Msg.alert('Hola', 'Bienvenidooooooo! ' + obj.fullname);
                
        //     },
       
        //     failure: function(response, opts) {
        //         console.log('server-side failure with status code ' + response.status);
        //     }
        // });

        //Second Method
        var loginForm = this.lookupReference('loginForm');
        loginForm.getForm().submit({
        
            url:'server/dologin.json',
            scope: this, //same scope

            success: function(response, opts) {
                //var obj = Ext.decode(response.responseText);
                // console.dir(opts.result);

                Ext.Msg.alert('Hola', 'Bienvenidooooooo! ' + opts.result.fullname, function (){
                    this.getView().close();
                }, this /*the same scope*/);
            },
       
            failure: function(response, opts) {
                console.log('server-side failure with status code ' + response.status, opts);
            }
        });
        
    }
});