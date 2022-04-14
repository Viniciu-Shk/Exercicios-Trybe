let info = { 
    personagem1: { 
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
        recorrente: 'Sim',
    },
    personagem2: {
        personagem: 'Tio Patinhas',
        origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
        nota: 'O último MacPatinhas',
        recorrente: 'Sim',
    }
  };
  let concat1 = null;
  let concat2 = null;


  for(let key in info.personagem1, info.personagem2) {
    concat1 = (info['personagem1'][key] + " e ");
    concat2 = (info['personagem2'][key]);
    console.log(concat1 + concat2);
  }
  if(info['personagem1']['recorrente'] === info['personagem1']['recorrente']) {
      console.log("Ambos recorrentes");
  } else {
      console.log("Não são todos recorrentes");
  }