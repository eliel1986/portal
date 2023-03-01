import { Global } from "./styles";

export function Peso() {
  return (
    <form>
      <Global>
      <div className="box-peso">
        <p>Densidade de origem</p>
        <input type="text" id="dens_orig" placeholder="0.000"></input>
        <p>Densidade de destino</p>
        <input type="text" id="dens_dest" placeholder="0.000"></input>
        <p>Peso origem</p>
        <input type="number" id="peso_orig" placeholder="Kg"></input>
        <p>Peso destino</p>
        <input type="number" id="peso_dest" placeholder="Kg"></input>
        <p></p>
        <button id="btn_calc" type="button" onClick={calculo}>Calcular</button>


       
      </div>
      </Global>
    </form>

  )

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


      if(display == "none")
            document.getElementById(box-peso).style.display = 'block';
        else
            document.getElementById(box-peso).style.display = 'none';
    }


      <form>
        <Global>
      <div className="box-peso1">
      <p>Peso destino / Densidade destino</p>
        <input type="text" id="pDest_dDest"></input>

        <p>Peso destino / Densidade origem</p>
        <input type="text" id="pDest_dOrig"></input>

        <p>Diferença densidades</p>
        <input type="text" id="dif_Dens"></input>

        <p>Peso destino - Peso origem</p>
        <input type="text" id="pDest_pOrig"></input>

        <p>Diferença PESOS / Dens origem</p>
        <input type="text" id="dif_Peso"></input>

        <p>Resultado:</p>
        <input type="text" id="result" ></input>
        </div>
</Global>
        </form>

    }
    else {
      document.getElementById('result').value = 'Preencha todos os dados!!!';

      document.getElementById('result').style.backgroundColor = 'yellow';
    }
  }
}