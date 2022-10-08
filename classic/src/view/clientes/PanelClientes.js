Ext.define('app.view.clientes.PanelClientes', {
    extend: 'Ext.Panel',

    xtype: 'panelclientes',
    
    controller: 'panelclientesctr',

    layout: 'border',
    tbar:[{//topbar
        // Este primer componente es por defecto un boton
        // no es necesario usar el xtype para expecificar que debe ser un botón
        //xtype: 'button',
        text: 'Agregar clientes',
        iconCls: 'x-fa fa-plus',
        handler: 'agregarCliente'
    },'->',{//flecha que se interpreta: todo lo que encuentre despues de la flecha
        // se pone del lado derecho
        xtype: 'comboclientes',
        emptyText: 'Buscar cliente',
        width: 300//px
    }],

    items:[{
        region: 'center',
        layout:'fit',
        xtype: 'tabpanel',

        items: [{
            title: 'Listado de clientes',
            xtype: 'gridclientes',
            reference: 'gridlistado',
            bodyPadding: 10,
            bodyStyle: 'background-color: #777; color:#FFF; font-size: 30px;',

            listeners:{
                itemClick: 'showClienteDetalle'
            }
        }],
        // agregar un toolbar  bbar significa bottombar.
        // un toolbar contiene el texto ademas de caracters interpretales como el - 
        // - que significa que se renderizará un componente visual para separa los componentes
        bbar:['Bottom bar (Zona baja)','-',{
            text:'Agregar nuevo contenido',
            scale: 'large',
            handler: function( ){
                var numId = Ext.id(), //crea un identificador aleatorio
                    panel = Ext.create('Ext.Panel', {
                    // configuraciones del panel hijo dinámico
                    title: 'Detalle cliente '+ numId,
                    html: 'Info cliente '+ numId,
                    closable: true,

                    layout: {
                        type: 'hbox',
                        pack: 'start',
                        align: 'stretch'
                    },
                    items: [{
                        title: 'detalle del cliente: '+ numId,
                        xtype: 'panel',
                        flex: 3,
                        layout: 'card',
                        items:[{
                            bodyStyle: 'background-color: black; font-size: 30px; color: white',
                            html: "detalle 1"
                        },{
                            bodyStyle: 'background-color: white; font-size: 30px; color: black',
                            html: "detalle 2"
                        }],
                        buttons: [{
                            text: 'panel 1',
                            scale: 'large',
                            handler: function (){
                                this.up('panel').layout.setActiveItem(0);
                            }
                        },{
                            text: 'panel 2',
                            scale: 'large',
                            handler: function (){
                                this.up('panel').layout.setActiveItem(1);
                            }
                        }]
                    },{
                        text: 'Al seleccionar el panel 2',
                        height: 300,
                        bodyStyle: 'background-color: #e1e1e1; font-size: 30px: color: black; border: 1px solid black;'
                    }]
                });
                this.up('tabpanel').add(panel);
                this.up('tabpanel').setActiveItem(panel);

            }
        }]
    },{
        height: 190,//px
        region: 'south',
        bodyStyle: 'background-color:#eee;',
        reference:'paneldetalle',
        tpl: 
            '<div>'+
                '<div style="float: left; margin-right:20px; width:20%; ">'+
                    '<img src="resources/img/yo.jpg" style="width:100%;">'+
                '</div>'+
                '<h2>{nombre}</h2>'+
                '<span style="font-size:16px; color:#5fa2dd">{rol}</span><br>'+
                '<span style="font-size:16px;">{email}</span><br>'+
            '</div>',
    }],

    seleccionar: function(){
        var record = this.lookupReference('gridlistado').getSelectionModel().getSelection();
        // console.log("Item seleccionada desde el panel 2",record);
        this.fireEvent('selectcliente', this, record[0]);
    }


});