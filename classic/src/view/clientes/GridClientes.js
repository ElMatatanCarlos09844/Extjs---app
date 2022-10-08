Ext.define('app.view.clientes.GridClientes', {
    extend:'Ext.grid.GridPanel',

    xtype:'gridclientes',

    initComponent: function (){

        var mistore = Ext.create('app.store.clientes.StoreClientes',{
            autoLoad: true,
        });

        Ext.apply(this,{
            
            store: mistore,

            columns: [
                {text:'Nombre', dataIndex:'nombre', flex:1,
                    renderer: 
                    function(val, meta, rec){
                        return  rec.nombreToHTML()
                    },
                },
                {
                    text:'Fecha de nacimiento', dataIndex:'fecha_nacimiento',flex:1.2,
                    renderer: Ext.util.Format.dateRenderer('d-m-Y'),
                },
                {text:'Email', dataIndex:'email', flex:1, menuDisabled:true},
                {text:'Estatus', dataIndex:'estatus', width:80,
                    renderer: 
                    function(val, meta, rec){
                        if(rec.data.estatus != 0){
                            return '<span style="color:#f00;">Inactivo</span>';
                        }
                        return  '';
                    },
                },
                {text:'Límite de crédito', dataIndex:'limite_credito', flex: 0.8},
                {
                    xtype:'actioncolumn',
                    width:60,
                    padding:'1rem',
                    items: [{
                        icon: 'resources/img/edit.png',
                        tooltip: 'Edit',
                        handler: function(grid, rowIndex, colIndex) {
                            var rec = grid.getStore().getAt(rowIndex);
                            alert("Edit " + rec.get('nombre'));
                        }
                    },{
                        icon: 'resources/img/delete.png',
                        tooltip: 'Delete',
                        handler: function(grid, rowIndex, colIndex) {
                            var rec = grid.getStore().getAt(rowIndex);
                            console.log(rec)
                            Ext.MessageBox.confirm('Eliinar Cliente',
                                'Está seguro de eliminar el registro <b>'+ rec.get('nombre')+' '+rec.data.apellido_paterno+'</b>?',
                                function(res){
                                    if(res=='yes'){
                                        grid.store.remove(rec);
                                    }
                                },

                            );
                        }
                    }]
                }
            ],

            dockedItems: [{
                xtype:'pagingtoolbar',
                store: mistore,
                dock: 'bottom',
                displayInfo: true
            }]

        });

        this.callParent();
    }
});