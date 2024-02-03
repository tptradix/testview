document.getElementById("email").addEventListener("input", () => {
		let clickup = document.getElementById("create"); let oninput1 = document.getElementById("email"); let oninput2 = document.getElementById("password"); let email = document.getElementById("email").value; let pass = document.getElementById("password").value; let form1 = document.getElementById("1-step-reg"); let form2 = document.getElementById("2-step-reg");
		if ((email.length > 3 && pass.length > 7)) {
			clickup.style.display = "block"; oninput1.style.border = "2px solid limegreen"; oninput2.style.border = "2px solid limegreen";
		}
		if ((email.length < 4 || pass.length < 8) ||(email.length > 15 || pass.length > 20)) {
			clickup.style.display = "none"; oninput1.style.border = "2px solid red"; oninput2.style.border = "2px solid red";
		}
	})
document.getElementById("password").addEventListener("input", () => {
	let clickup = document.getElementById("create"); let oninput1 = document.getElementById("email"); let oninput2 = document.getElementById("password"); let email = document.getElementById("email").value; let pass = document.getElementById("password").value; let form1 = document.getElementById("1-step-reg"); let form2 = document.getElementById("2-step-reg");
	if ((email.length > 3 && pass.length > 7)) {
		clickup.style.display = "block"; oninput1.style.border = "2px solid limegreen"; oninput2.style.border = "2px solid limegreen";
	}
	if ((email.length < 4 || pass.length < 8) || (email.length > 15 || pass.length > 20)) {
		clickup.style.display = "none"; oninput1.style.border = "2px solid red"; oninput2.style.border = "2px solid red"; 
	}
})
document.getElementById("create").addEventListener("click", () => {
	let pass = document.getElementById("password").value; let form1 = document.getElementById("1-step-reg"); let form2 = document.getElementById("2-step-reg"); let auth = document.getElementById("token").value; let authView = document.getElementById("token"); let sub = document.getElementById("sub");
	let othersign = document.getElementById("other_s")
	form1.style.display = "none"; form2.style.display = "block"; othersign.style.display = "none"
})
document.getElementById("token").addEventListener("input", () => {
	let sub = document.getElementById("sub"); let auth = document.getElementById("token").value; let authView = document.getElementById("token");
	if (auth.length > 20 || auth.length < 30) {
		sub.style.display = "block"; sub.setAttribute('type', 'submit'); authView.style.border = "2px solid limegreen";
	}
	if (auth.length < 20 || auth.length > 30) {
		sub.style.display = "none"; sub.setAttribute('type', 'button'); authView.style.border = "2px solid red";
	}
})