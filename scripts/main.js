function multiply(num1, num2) {
  let result = num1 * num2;
  console.log(result);
  return result;
}

let img = document.querySelector("img");
img.onclick= function (){
	console.log("换个图片");
	let src = img.getAttribute("src");
	if(src === "images/img1.jpg"){
		img.setAttribute("src","images/img2.jpg");
	}else {
		img.setAttribute("src","images/img1.jpg");
	}
}


let bt = document.querySelector("button");
let hTitle = document.querySelector("h1");

function setUserName(){
	let myName = prompt("请输入你的名字");
	localStorage.setItem("name",myName);
	hTitle.textContent = myName+",今天天气不错啊！";
}

bt.onclick = function(){
	setUserName();
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let myName = localStorage.getItem('name');
  hTitle.textContent = myName+",今天天气不错啊！";
}