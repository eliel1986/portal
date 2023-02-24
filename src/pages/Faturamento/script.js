export function 


const calcular = document.getElementById('btn_calc');
const resetar = document.getElementById('clean');
calcular.addEventListener('click', calculo);
resetar.addEventListener('click', reset);

function reset() {
	document.getElementById('result').style.backgroundColor = '';
	document.getElementById('dif_Dens').style.backgroundColor = '';
	document.getElementById('pDest_pOrig').style.backgroundColor = '';
	document.getElementById('dif_Peso').style.backgroundColor = '';
}

function calculo() {
	const densOrig = document.getElementById('dens_orig').value;
	const densDest = document.getElementById('dens_dest').value;
	const pesoOrig = document.getElementById('peso_orig').value;
	const pesoDest = document.getElementById('peso_dest').value;

	if (densDest !== '' && pesoDest !== '' && densOrig !== '' && pesoOrig) { //validação do preenchimento
		const pesoDest_densDest = (pesoDest / densDest).toFixed(0);
		
		document.getElementById('pDest_dDest').value = `${pesoDest_densDest} litros`;

		const pesoDest_densOrig = (pesoDest / densOrig).toFixed(0);
		
		document.getElementById('pDest_dOrig').value = `${pesoDest_densOrig} litros`;

		const dif_Dens = (pesoDest_densDest - pesoDest_densOrig).toFixed(0);

		if (dif_Dens < 0) {
			document.getElementById('dif_Dens').style.backgroundColor = 'red';
		}
		else {
			document.getElementById('dif_Dens').style.backgroundColor = 'green';
		}

		document.getElementById('dif_Dens').value = `${dif_Dens} litros`;

		const difPesos = (pesoDest - pesoOrig).toFixed(0);

		document.getElementById('pDest_pOrig').value = `${difPesos} Kilos`;

		if (difPesos < 0) {
			document.getElementById('pDest_pOrig').style.backgroundColor = 'red';
		}
		else {
			document.getElementById('pDest_pOrig').style.backgroundColor = 'green';
		}

		const difPesosdensDest = (difPesos / densDest).toFixed(0);

		document.getElementById('dif_Peso').value = `${difPesosdensDest} litros`;

		if (difPesosdensDest < 0) {
			document.getElementById('dif_Peso').style.backgroundColor = 'red';
		}
		else {
			document.getElementById('dif_Peso').style.backgroundColor = 'green';
		}

		const apurado = Number(dif_Dens) + Number(difPesosdensDest);

		document.getElementById('result').value = `${apurado} litros`;

		if (apurado < 0) {
			document.getElementById('result').style.backgroundColor = 'red';
		}
		else {
			document.getElementById('result').style.backgroundColor = 'green';
		}
	}
	else {
		document.getElementById('result').value = 'Preencha todos os dados!!!';

document.getElementById('result').style.backgroundColor = 'yellow';
	}
}