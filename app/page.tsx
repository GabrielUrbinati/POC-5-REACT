"use client";
import { useState } from "react";
import Botao from "./Componentes/Botao";
import Contador from "./Componentes/Contador";
import Frases from "./Componentes/Frases";

export default function PaginaInicial() {
  const [contagem, setContagem] = useState(0);
  const [frase, setFrase] = useState(
    "Clique no botão para gerar uma curiosidade sobre física quântica!"
  );
  const [ultimoIndice, setUltimoIndice] = useState<number | null>(null);

  const curiosidadesQuantica = [
    "Experimento da Fenda Dupla: Quando partículas subatômicas, como elétrons, são disparadas contra uma barreira com duas fendas, elas se comportam como ondas e criam um padrão de interferência, mas quando são observadas, agem como partículas. O simples ato de observá-las muda seu comportamento.",
    "Dualidade Onda-Partícula: Na mecânica quântica, partículas podem se comportar tanto como ondas quanto como partículas, dependendo da forma como são medidas.",
    "Princípio da Incerteza de Heisenberg: Não é possível saber simultaneamente a posição e a velocidade de uma partícula com precisão absoluta. Quanto mais precisamente você mede uma, menos precisa é a medida da outra.",
    "Entrelaçamento Quântico: Partículas podem ficar 'entrelaçadas', de forma que o estado de uma afeta o estado da outra, não importa quão distantes estejam uma da outra. Isso levou Einstein a chamá-lo de 'ação fantasmagórica à distância'.",
    "Deslocamento Superluminal?: Embora informações quânticas pareçam se mover mais rápido que a luz no entrelaçamento, a teoria da relatividade não é violada, já que nenhuma informação útil pode ser transmitida mais rápido que a luz.",
    "Gato de Schrödinger: Uma famosa experiência mental que coloca um gato em uma caixa, onde ele pode estar simultaneamente vivo e morto, até que seja observado. Isso ilustra a estranheza da superposição quântica.",
    "Superposição Quântica: Partículas podem existir em múltiplos estados ao mesmo tempo até que sejam medidas. Um elétron, por exemplo, pode estar em dois lugares ao mesmo tempo.",
    "Colapso da Função de Onda: Ao observar ou medir uma partícula, sua função de onda colapsa, e ela 'escolhe' um estado específico (como estar em uma posição exata ou ter uma determinada velocidade).",
    "Túnel Quântico: Partículas podem 'atravessar' barreiras energéticas que, de acordo com a física clássica, deveriam ser intransponíveis. Isso é o que permite o funcionamento de dispositivos como o transistor.",
    "O Vácuo Quântico Não é Vazio: O vácuo quântico, ao contrário do que parece, está repleto de flutuações quânticas onde partículas e antipartículas surgem e desaparecem o tempo todo.",
    "Universos Paralelos: Uma interpretação da mecânica quântica sugere que cada vez que uma partícula quântica toma um caminho, o universo se divide em múltiplas realidades paralelas, cada uma correspondendo a um resultado diferente.",
    "Decoerência Quântica: Esse processo explica por que não vemos efeitos quânticos em objetos grandes. À medida que um sistema interage com seu ambiente, a coerência quântica desaparece, e o sistema passa a se comportar de maneira clássica.",
    "Computação Quântica: Usando princípios de superposição e entrelaçamento, os computadores quânticos podem processar enormes quantidades de informação de maneira simultânea, revolucionando a computação.",
    "Teletransporte Quântico: No nível quântico, é possível 'teletransportar' o estado quântico de uma partícula para outra, mesmo a grandes distâncias, usando entrelaçamento.",
    "Energia de Ponto Zero: Mesmo no zero absoluto, quando toda a energia térmica é removida, os sistemas quânticos ainda têm flutuações energéticas chamadas de energia de ponto zero.",
    "Criptografia Quântica: Informações criptografadas com princípios quânticos são teoricamente invioláveis, já que qualquer tentativa de interceptação colapsa o estado quântico das partículas envolvidas.",
    "Partícula de Deus: O bóson de Higgs, conhecido como a 'partícula de Deus', foi descoberto em 2012 e explica como as partículas adquirem massa.",
    "A Física Quântica é Probabilística: Diferente da física clássica, que é determinística, a física quântica lida com probabilidades. Não se pode prever o resultado exato de um experimento, apenas as chances de resultados possíveis.",
    "O Efeito Casimir: Partículas virtuais que surgem no vácuo quântico podem criar uma força medível entre duas superfícies muito próximas, mesmo no 'vazio'.",
    "Ondas de Matéria: Segundo Louis de Broglie, todas as partículas têm uma natureza ondulatória. Mesmo você, enquanto caminha, está se movendo como uma onda (embora a onda seja extremamente pequena).",
    "O Tempo na Física Quântica: Em nível quântico, o tempo não segue as regras da física clássica. As partículas podem até 'retroceder' no tempo em certos cenários matemáticos.",
    "Incerteza de Energia e Tempo: Assim como posição e velocidade, existe uma incerteza entre energia e tempo. Isso permite que partículas surjam do nada, desde que 'desapareçam' rapidamente.",
    "Partículas Fantasmagóricas: A equação de Schrödinger descreve partículas como 'fantasmagóricas', com suas posições sendo distribuídas por todo o espaço até serem medidas.",
    "Observador Cria a Realidade?: Algumas interpretações sugerem que a consciência do observador pode influenciar os resultados de experimentos quânticos, levando à especulação sobre o papel da mente na realidade.",
    "Paradoxo EPR: Einstein, Podolsky e Rosen argumentaram que a física quântica era incompleta porque permitia entrelaçamento quântico, o que parecia desafiar a causalidade. O paradoxo foi desafiado por experimentos reais que confirmaram o entrelaçamento.",
    "Infinitas Possibilidades: Na superposição, antes de ser observado, um sistema quântico pode estar em uma combinação de todos os estados possíveis.",
    "Limite de Planck: A física quântica tem um limite, a chamada escala de Planck, abaixo da qual as leis da física como as conhecemos deixam de fazer sentido.",
    "Efeito Zeno Quântico: Ao observar continuamente um sistema quântico, você pode impedir sua evolução, fazendo-o 'congelar' no tempo.",
    "O Spin é Quântico: Partículas como elétrons têm uma propriedade chamada 'spin', que é puramente quântica e não pode ser entendida como uma rotação clássica.",
    "Experimento de Aspect: Alain Aspect, em 1982, realizou experimentos que confirmaram que o entrelaçamento quântico realmente ocorre, violando as desigualdades de Bell e desafiando a noção de localidade de Einstein.",
  ];

  const gerarFrase = () => {
    let indiceAleatorio;
    do {
      indiceAleatorio = Math.floor(Math.random() * curiosidadesQuantica.length);
    } while (indiceAleatorio === ultimoIndice);

    setFrase(curiosidadesQuantica[indiceAleatorio]);
    setUltimoIndice(indiceAleatorio);
    setContagem(contagem + 1);
  };

  return (
    <main>
      <h2>Gerador de Curiosidades Quânticas</h2>
      <Frases texto={frase} /> {}
      <Botao onClick={gerarFrase} /> {}
      <Contador contagem={contagem} /> {}
    </main>
  );
}
