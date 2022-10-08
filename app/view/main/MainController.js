/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('app.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        var panel = Ext.create('app.view.clientes.PanelClientes');

        var win= Ext.create('app.view.common.WindowStatusBar',{
            width: 800,
            height: 600,

            title: 'Seleccionar cliente',
            items: panel,

            buttons:[{
                text:'Seleccionar',
                scope: this,
                handler: function(){
                    //console.log("Aquí debería mandar a llamar al metodo seleccionar del panel creado")
                    panel.seleccionar();
                }
            },{
                text:'Cancelar',
                handler: function(){
                    win.hide();
                }
            }],


        });

        panel.on({
            selectcliente: function(panelclientes, record){
                console.log("Item seleccionada desde el panel 2",record);
                Ext.Msg.confirm(`Cliente ${record.data.cliente_k}`, `El cliente ${record.data.nombre} fue seleccionado`);
            }
        });

        win.show();
        
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
