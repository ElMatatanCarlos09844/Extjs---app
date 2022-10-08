Ext.define('app.view.canciones.form.ComboCanciones', {
    extend:'Ext.form.ComboBox',

    xtype:'combocanciones',

    //queryMode: 'local', por defecto remoto
    displayField: 'Title',
    valueField: 'id',

    pageSize:'25',

    // hideTrigger: true,

    initComponent: function(){
       
        Ext.apply(this, {
            store: Ext.create('app.store.canciones.StoreCanciones'),

            tpl: Ext.create('Ext.XTemplate',
                `<ul class="x-list-plain"><tpl for=".">
                    <li class="x-boundlist-item">{Artist} - {Title}, {AlbumArtist}</li>
                    <hr>
                </tpl></ul>`
            ),

            displayTpl: Ext.create('Ext.XTemplate', 
                `<tpl for=".">
                    {Artist}, {Title}
                </tpl>`
            ),
        });

        this.callParent();

    }
});