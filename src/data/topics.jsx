//aquivo de tópicos para o aplicativo de nutrição
// Este arquivo contém uma lista de tópicos relacionados à nutrição e saúde, cada um com um título e conteúdo descritivo. Os tópicos abordam conceitos básicos, cálculo de IMC, macronutrientes, ingestão dietética de referência (DRI), necessidades energéticas e outros conceitos relevantes. O objetivo é fornecer informações úteis e educativas para os usuários do aplicativo.
// const topics.js contém um arrey com o título e conteúdo de cada tópico. O título é uma string que representa o nome do tópico, enquanto o conteúdo é uma string que descreve o que será abordado nesse tópico. Esses tópicos podem ser utilizados em um aplicativo de nutrição para fornecer informações relevantes aos usuários.

import '../styles/SectionBox.css';

const topics = [
  {
    title: 'Conceitos Básicos',
    content: 'Aqui vão entrar os conceitos básicos em breve...',
  },
  {
    title: 'Ingestão Dietética de Referência (DRI)',
    content: 'Valores de referência para ingestão de nutrientes.',
  },
  {
    title: 'Necessidades Energéticas',
    content: 'Como calcular as calorias necessárias por dia.',
  },
  {
    title: 'Calculando Necessidades Energéticas',
    content: (
      <div
        style={{
          display: 'block',
          width: '200px',
          height: '200px',
          backgroundColor: 'lightblue',
        }}
      >
        <p>Os conceitos básicos envolvem nutrientes, metabolismo e energia.</p>
      </div>
    ),
  },
  {
    title: 'Necessidades Energéticas',
    content: 'Revisão de conteúdos sobre energia e metabolismo.',
  },
];

export default topics;
