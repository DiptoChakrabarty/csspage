document.querySelector('.upload-btn').addEventListener('click', upload);

function upload() {
	document.querySelector('.bar').classList.toggle('active');
	document.querySelector('.syncing').classList.toggle('active');
	document.querySelector('.done').classList.toggle('active');
	document.querySelector('.upload').classList.toggle('active');
	document.querySelector('.filename').classList.toggle('filename');
	document.querySelector('.input').classList.toggle('active');
	
	if(document.querySelector('.upload-btn').innerText=='Upload file'){
		document.querySelector('.upload-btn').innerText = "Loading..."; 
		
		setTimeout(() =>
							document.querySelector('.upload-btn').innerText = "Done",3900);
	}else {
		document.querySelector('button').innerText = 'upload file';
	}
}