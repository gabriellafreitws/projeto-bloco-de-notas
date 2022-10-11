let app = new Vue({
    el: '.app',
    data: {
        notes: [],
    },
    methods: {
        toggleEditor(key){
            this.notes[key].editor = !this.notes[key].editor;
            this.updateLocalStorage();
        },
        newNote(){
            this.notes.push({
                text: '',
                editor: false,
            });
            this.updateLocalStorage();
        },
        deleteNote(key){
            this.notes.splice(key, 1);
            this.updateLocalStorage();
        },
        updateLocalStorage(){
            localStorage.setItem('NOTAS_GABI', JSON.stringify(this.notes));
        }
    },
    mounted(){
        if (localStorage.getItem('NOTAS_GABI')){
            this.notes = JSON.parse(localStorage.getItem('NOTAS_GABI'))
        }
    },
});