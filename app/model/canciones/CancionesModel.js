Ext.define('app.model.canciones.CancionesModel', {
    extend: 'Ext.data.Model',

    fields: [
        "id",
        "Title",
        "Artist",
        "Genre",
        "Year_Released",
        "Bitrate",
        "Composer",
        "Filesize",
        "AlbumArtist",
        "Duration",
        "TrackTotal",
    ],

    titleToHTML: function (){
        return '<b>'+this.get('Title')+'</b>';
    },
    
})