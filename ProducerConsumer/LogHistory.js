class LogHistory {
	constructor(div) {
		this.div = div;
		this.clear();
	}

	addData(color) {
		let line = document.createElement("span");
		let spanData = document.createElement("span");
		spanData.innerHTML = "DATA";
		spanData.style = "color :" + color;
		line.classList.add("text-success");
		line.appendChild(spanData);
		line.innerHTML += " has been added";
		this.add(line);
	}

	override(color) {
		let line = document.createElement("span");
		let spanData = document.createElement("span");
		spanData.innerHTML = "DATA";
		spanData.style = "color :" + color;
		line.classList.add("text-danger");
		line.appendChild(spanData);
		line.innerHTML += " has been overrided";
		this.add(line);
	}

	pickEmpty() {
		let line = document.createElement("span");
		line.classList.add("text-danger");
		line.innerHTML += "An entity tried to pick a in an empty buffer, please restart the simulation";
		this.add(line);
	}

	simulationStart(nbBuffers, bufferSize, sync) {
		let line = document.createElement("span");
		line.classList.add("text-info");
		let syncModeText = sync ? "sync" : "async";
		line.innerHTML += "Simulation started with " + nbBuffers + " buffers with a size of " + bufferSize + " in " + syncModeText + " mode";
		this.add(line);
	}

	add(d) {
		let today = new Date();
		let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

		let line = document.createElement("div");
		line.innerHTML += time + " : ";
		line.appendChild(d);
		this.div.appendChild(line);
		this.div.scrollTop = this.div.scrollHeight;
	}

	clear() {
		this.div.innerHTML = "";
	}
}
