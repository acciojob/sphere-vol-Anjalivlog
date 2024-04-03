function volume_sphere() {
    //Write your code here
	const radiusInput = document.getElementById('radius').value;
	const radius = parseFloat(radiusInput);
	if (!NaN(radius) || radius < 0) {
		document.getElementById('volume').value = 'NaN';
	} else {
		const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
		document.getElementById('volume').value = volume.toFixed(4);
	}
  return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
