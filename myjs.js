function dosome() {

	let x = new XMLHttpRequest();

	let mylist = document.getElementById('list');

	x.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			let data = JSON.parse(this.response);
			let html = "<p><b> Names </b></p>";

			for (let i = 0; i < data.length; i++){
				html += "<br>" + data[i].name + "<br>";
			}
			mylist.innerHTML = html;
		}

	}

	x.open('GET','https://jsonplaceholder.typicode.com/users', true);
	x.send();
}
