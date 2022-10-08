Ext.define( 'app.view.clientes.PanelClientesController', {
    extend: 'Ext.app.ViewController',
    
    alias: 'controller.panelclientesctr',
    
    showClienteDetalle: function(grid, record){
        console.log(record);

        var panel= this.lookupReference('paneldetalle');
        panel.update(record.data);
    },

    agregarCliente: function( ){
        var window = Ext.create('app.view.common.WindowForm',{
            modal: true,
            title: 'Agregar un nuevo cliente',
            //draggable: false,
            height: 460,
            width: 400,
            layout: 'fit',
            items:[{
                xtype: 'formcliente'
            }],
            
        });

        //OnClick the button submit
        window.down('#submit').setHandler(function(){
            var form = window.down('formcliente');
            if( form.isValid() )
                form.doSubmit();
        });

        window.down('#load').setHandler(function(){
            var form = window.down('formcliente');
            form.doLoad();
        });

        window.show();
    }
});