Ext.define('app.view.canciones.GridCanciones', {
    extend:'Ext.grid.GridPanel',

    xtype:'gridcanciones',

    initComponent: function (){

        var mistore = Ext.create('app.store.canciones.StoreCanciones',{
            autoLoad: true,
        });

        Ext.apply(this,{
            
            store: mistore,

            columns: [
                {text:'Title', dataIndex:'Title', flex:1,
                    renderer: 
                    function(val, meta, rec){
                        return  rec.titleToHTML();
                    },
                },
                {text:'Artist', dataIndex:'Artist',flex:1.2,},
                {text:'Album', dataIndex:'AlbumArtist', flex:1, menuDisabled:true},
                {text:'Año de lanzamiento', dataIndex:'Year_Released', width:80,},
                {text:'Genero', dataIndex:'Genre', flex: 0.8},
                {
                    xtype:'actioncolumn',
                    width:60,
                    padding:'1rem',
                    items: [{
                        icon: 'resources/img/edit.png',
                        tooltip: 'Edit',
                        handler: function(grid, rowIndex, colIndex) {
                            var rec = grid.getStore().getAt(rowIndex);
                            alert("Edit " + rec.get('Title')+", "+rec.get('Artist'));
                        }
                    },{
                        icon: 'resources/img/delete.png',
                        tooltip: 'Delete',
                        handler: function(grid, rowIndex, colIndex) {
                            var rec = grid.getStore().getAt(rowIndex);
                            console.log(rec)
                            Ext.MessageBox.confirm('Eliinar Cliente',
                                'Está seguro de eliminar el registro <b>'+ rec.get('Title')+", "+rec.get('Artist')+'</b>?',
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