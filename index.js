/* Syntaxe pour écrire des objets*/
	var me = {
		prenom: "Jerome",
		name : "Mouly",
		birthday: 130177,
		github: "JeromeMouly",
		occupation: "Chargé de Projet",
		getFullname: function(){
			return me.prenom+ " " +me.name;
		},
		getOccupation: function() {
			return me.occupation;
		},
		setName: function(data) {
			this.name = data;
		},
		getField: function(fieldname) {
			return me.name;
		},
		setField: function(clef, valeur) {
			this[clef]=valeur;
		},
		getGithub: function(){
			return 'https://github.com/'+ this.github;
		},
		setGithub: function(data){
			this.github = data;
		},
		/*getInfos: function(){

		},*/
	};

	/*me.setField('name', 'Truc');
	me.setName('Bidule');*/
console.log(me.github);
console.log(me.getGithub());