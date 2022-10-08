Ext.define( 'app.view.canciones.PanelCancionesController', {
    extend: 'Ext.app.ViewController',
    
    alias: 'controller.panelcancionesctr',
    
    showClienteDetalle: function(grid, record){
        console.log(record);

        var panel= this.lookupReference('paneldetalle');
        panel.update(record.data);
    },

    buscarCanciones: function(){
        console.log("Empezando a hacer la peticion para buscar las canciones, ");
        // console.log(this.getComponent('busqueda'));
        console.log(this.lookupReference('busqueda').value);
    },

    agregarCanciones: function( ){
        var window = Ext.create('app.view.common.WindowForm',{
            modal: true,
            title: 'Agregar una nueva canción',
            //draggable: false,
            height: 460,
            width: 400,
            layout: 'fit',
            items:[{
                xtype: 'formcanciones'
            }],
            
        });

        //OnClick the button submit
        window.down('#submit').setHandler(function(){
            var form = window.down('formcanciones');
            if( form.isValid() )
                form.doSubmit();
        });
        //OnClick the button load
        window.down('#load').setHandler(function(){
            var form = window.down('formcanciones');
            form.doLoad();
        });

        
        //console.log("Componente: ", window.down('#submit'));

        window.show();
    }
});