export function Faturamento() {
    return (
      <form>
        <div>
            <p>Densidade de origem</p>
            <input type="text" id="dens_orig" placeholder="0.000"></input>
            <p>Densidade de destino</p>
            <input type="text" id="dens_orig" placeholder="0.000"></input>
            <p>Peso origem</p>
            <input type="number" id="peso_orig" placeholder="Kg"></input>
            <p>Peso destino</p>
            <input type="number" id="peso_dest" placeholder="Kg"></input>
            <p></p>
            <button id="btn_calc" type="button">Calcular</button>

            
        </div>
      </form>
       
       /* <form>
            

            

            <p>Peso destino / Densidade destino</p>
            <input type="text" id="pDest_dDest">

            <p>Peso destino / Densidade origem</p>
            <input type="text" id="pDest_dOrig">

            <p>Diferença densidades</p>
            <input type="text" id="dif_Dens">

            <p>Peso destino - Peso origem</p>
            <input type="text" id="pDest_pOrig">

            <p>Diferença PESOS / Dens origem
            </p>
            <input type="text" id="dif_Peso">



            <p>Resultado:</p>
            <input type="text" id="result" >

            <button id="clean" type="reset">Limpar</button>

            <a href="../index.html"><button type="button" >Voltar</button></a>
        </form> */
    
    );
  }