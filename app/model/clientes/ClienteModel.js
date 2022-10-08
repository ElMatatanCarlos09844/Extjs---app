Ext.define('app.model.clientes.ClienteModel', {
    extend: 'Ext.data.Model',

    fields: [{name:"cliente_k", type:'int'},
        "email",
        "nombre",
        "apellido_paterno",
        "apellido_materno",
        {name:"fecha_nacimiento", type:'date', format:'Y-m-d'},
        {name:"genero", type:'int'},
        {name:"limite_credito", type:'float'},
        "rol",
        "color_favorito",
        {name:"estatus", type:'int'
    }],

    nombreToHTML: function (){
        return this.data.apellido_paterno+' '+this.data.apellido_materno+', <b>'+this.get('nombre')+'</b>';
    },
    
})