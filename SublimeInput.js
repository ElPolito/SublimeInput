window.addEventListener("load", () => {
	SublimeInput_Check.bind("*[sub-input-check]");
	SublimeInput_Slide.bind("*[sub-input-slide]");
	SublimeInput_Radio.bind("*[sub-input-radio]");
});

class SublimeInput{

	constructor(element){
		this.element = element;
	}

	insertAfter(newNode, referenceNode){
		referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
	}
}

class SublimeInput_Check extends SublimeInput{

	static bind(selector){
		document.querySelectorAll(selector).forEach(element => new SublimeInput_Check(element));
	}

	constructor(element){
		super(element);
		this.createNew();
	}

	createNew(){
		let newE = document.createElement("span");
		newE.classList.add("SublimeInput_Check");
		this.element.style.display = "none";
		let check = document.createElement("span");
		newE.appendChild(check);
		if(!this.element.checked){
			check.style.display = "none";
			
		}
		newE.addEventListener("click", this.toggleOn.bind(this));
		check.addEventListener("click", (event) => this.toggleOff(event).bind(this));
		this.newelement = newE;
		this.check = check;
		this.insertAfter(newE, this.element);
	}

	toggleOn(){
		this.check.style.display = "inline-block";
		this.element.checked = true;
	}

	toggleOff(event){
		event.stopPropagation();
		this.check.style.display = "none";
		this.element.checked = false;
	}
}

class SublimeInput_Slide extends SublimeInput{

	static bind(selector){
		document.querySelectorAll(selector).forEach(element => new SublimeInput_Slide(element));
	}

	constructor(element){
		super(element);
		this.createNew();
	}

	createNew(){
		let newE = document.createElement("span");
		newE.classList.add("SublimeInput_Slide");
		this.element.style.display = "none";
		let check = document.createElement("span");
		newE.appendChild(check);
		if(this.element.checked){
			check.style.left = "auto";
			check.style.right = "0";
			newE.classList.add("active");
		}
		newE.addEventListener("click", this.toggle.bind(this));
		this.newelement = newE;
		this.check = check;
		this.insertAfter(newE, this.element);
	}

	toggle(){
		if(this.element.checked){
			this.newelement.classList.remove("active");
			this.check.style.left = "0";
			this.check.style.right = "auto";
			this.element.checked = false;	
		}else{
			this.newelement.classList.add("active");
			this.check.style.left = "auto";
			this.check.style.right = "0";
			this.element.checked = true;
		}
		
	}
}

class SublimeInput_Radio extends SublimeInput{

	static bind(selector){
		document.querySelectorAll(selector).forEach(element => new SublimeInput_Radio(element));
	}

	constructor(element){
		super();
		this.eles = [];
		let sele = "input[name=" + element.getAttribute("name") + "]";
		this.elements = document.querySelectorAll(sele);
		this.elements.forEach(ele => this.createNew(ele));
		
	}

	createNew(element){
		let newE = document.createElement("span");
		newE.classList.add("SublimeInput_Radio");
		element.style.display = "none";
		let check = document.createElement("span");
		newE.appendChild(check);
		if(!element.checked){
			check.style.display = "none";
		}
		newE.addEventListener("click", () => this.toggleOn(newE, element));
		this.insertAfter(newE, element);
		this.eles.push(newE);
	}

	toggleOn(ele, input){
		this.eles.forEach(e => {
			e.children[0].style.display = "none";
		});
		this.elements.forEach(e => {
			e.checked = false;
		});
		ele.children[0].style.display = "inline-block";
		input.checked = true;
	}
}

