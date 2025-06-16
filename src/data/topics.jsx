//aquivo de tópicos para o aplicativo de nutrição
// Este arquivo contém uma lista de tópicos relacionados à nutrição e saúde, cada um com um título e conteúdo descritivo. Os tópicos abordam conceitos básicos, cálculo de IMC, macronutrientes, ingestão dietética de referência (DRI), necessidades energéticas e outros conceitos relevantes. O objetivo é fornecer informações úteis e educativas para os usuários do aplicativo.
// const topics.js contém um arrey com o título e conteúdo de cada tópico. O título é uma string que representa o nome do tópico, enquanto o conteúdo é uma string que descreve o que será abordado nesse tópico. Esses tópicos podem ser utilizados em um aplicativo de nutrição para fornecer informações relevantes aos usuários.
import EnergyCalculator from '../components/EnergyCalculator';
import '../styles/SectionBox.css';
import '../styles/SectionDataTopics.css';
import React from 'react';
import { BlockMath, InlineMath } from 'react-katex';

const topics = [
  {
    title: 'Conceitos Básicos',
    content: (
      <div>
        <p className="topic1" style={{ fontSize: '1.2em' }}>
          O cálculo de calorias é essencial para entender as necessidades
          energéticas do corpo humano. As calorias representam a energia
          fornecida pelos alimentos e são utilizadas pelo corpo para manter
          funções vitais, realizar atividades físicas e processar nutrientes.
        </p>

        <p className="topic2" style={{ fontSize: '1.20rem' }}>
          Os principais macronutrientes fornecem diferentes quantidades de
          energia:
        </p>
        <ul>
          <li className="list1">
            <strong>Carboidratos:</strong>{' '}
            <span className="valorTopics">4 kcal/g</span>
          </li>
          <li className="list1">
            <strong>Proteínas:</strong>{' '}
            <span className="valorTopics">4 kcal/g</span>
          </li>
          <li className="list1">
            <strong>Gorduras:</strong>{' '}
            <span className="valorTopics">9 kcal/g</span>
          </li>
        </ul>
        <p className="topic2" style={{ fontSize: '1.20rem' }}>
          Conhecer esses valores é o primeiro passo para montar uma dieta
          equilibrada e individualizada.
        </p>

        <p className="topic3">
          <strong>Requisitos prévios para melhor compreensão:</strong>
        </p>
        <ul className="listUL">
          <li className="list1">Entendimento básico de metabolismo.</li>
          <li className="list1">
            Noções de bioquímica (especialmente sobre macronutrientes).
          </li>
          <li className="list1">
            Familiaridade com a função energética dos alimentos.
          </li>
          <li className="list1">
            Conhecimento sobre TMB (Taxa Metabólica Basal) e GET (Gasto
            Energético Total).
          </li>
          <li className="list1">
            Capacidade de interpretar tabelas nutricionais.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Ingestão Dietética de Referência (DRI)',
    content: (
      <div>
        <p className="topic1" style={{ fontSize: '1.2rem' }}>
          A DRI inclui diversos tipos de valores de referência de nutrientes, é
          uma ferramenta para avaliação e planejar a dieta. Como qualquer
          ferramenta, seu uso é melhor quando compreendemos seus princípios e a
          sua finalidade. É importante ressaltar que os valores de DRI são
          voltados para especificar as necessidades de componentes essenciais
          dos alimentos que sejam fundamentais ou importantes para a saúde.
        </p>
        <ul>
          <li className="listDRI">
            <strong>RDA (Recommended Dietary Allowance):</strong>
            <br /> Quantidade média diária de um nutriente considerada
            suficiente para atender às necessidades da quase totalidade (97-98%)
            das pessoas saudáveis em um grupo específico. Serve como meta para
            ingestão diária individual.
            <div style={{ marginTop: '0.5em' }}>
              A fórmula é:
              <BlockMath math={'\\text{RDA} = \\text{EAR} + 2 \\times SD'} />
              Onde <InlineMath math={'SD'} /> é o desvio padrão da necessidade
              do nutriente.
            </div>
          </li>
          <li className="listDRI">
            <strong>AI (Adequate Intake):</strong>
            <br /> Valor estimado usado quando não há dados suficientes para
            definir o RDA. Baseia-se em observações ou experimentos com
            populações saudáveis.
            <div style={{ marginTop: '0.5em' }}>
              <em>Não possui fórmula matemática direta</em>, pois é definido a
              partir de médias observadas.
            </div>
          </li>
          <li className="listDRI">
            <strong>UL (Tolerable Upper Intake Level):</strong>
            <br /> O limite máximo diário de ingestão de um nutriente que
            provavelmente não causará efeitos adversos à saúde na maioria das
            pessoas.
          </li>
          <li className="listDRI">
            <strong>EAR (Estimated Average Requirement):</strong> <br />
            Reflete a necessidade média diária estimada(50%), sendo
            particularmente apropriada para a avaliação de consumo por grupos de
            pessoas.
            <div style={{ marginTop: '0.5em' }}>
              Pode ser obtido por análise de estudos populacionais ou inferido
              estatisticamente:
              <BlockMath
                math={'\\text{EAR} = \\text{Média} \\pm \\text{Erro padrão}'}
              />
            </div>
          </li>
        </ul>
        <p className="listDRIp" style={{ fontSize: '1rem' }}>
          O uso adequado das DRIs ajuda a prevenir deficiências nutricionais e
          problemas causados pelo consumo excessivo, promovendo a saúde e o
          bem-estar.
        </p>
      </div>
    ),
  },
  {
    title: 'Necessidades Energéticas',
    content: (
      <div>
        <p
          className="titleNR"
          style={{ fontSize: '1.25rem', fontWeight: 'bold' }}
        >
          As necessidades energéticas em seres humanos envolvem:
        </p>
        <ul>
          <li className="listNR">Metabolismo Basal (TMB)</li>
          <li className="listNR">Termogênese</li>
          <li className="listNR">Atividade física (ou trabalho externo)</li>
          <li className="listNR">Crescimento (deposição de novos tecidos)</li>
          <li className="listNR">Gestação e lactação (produção de leite)</li>
        </ul>

        <p className="titleNR" style={{ fontSize: '1.25rem' }}>
          <strong>Taxa Metabólica Basal (TMB):</strong> energia necessária para
          manter funções vitais como circulação e respiração em estado de
          alerta.
        </p>
        <p className="title2NR" style={{ fontSize: '1.25rem' }}>
          Fatores que influenciam a TMB:
        </p>
        <ul>
          <li className="listNR">Idade</li>
          <li className="listNR">Sexo</li>
          <li className="listNR">Composição corporal</li>
          <li className="listNR">Estado nutricional e geral</li>
        </ul>

        <p className="titleNR" style={{ fontSize: '1.25rem' }}>
          <strong>Taxa Metabólica de Repouso (TMR):</strong> semelhante à TMB,
          mas medida em condições práticas do cotidiano.
        </p>

        <p className="title2NR" style={{ fontSize: '1.25rem' }}>
          <strong>Termogênese:</strong> aumento do metabolismo basal em resposta
          a estímulos não musculares, como:
        </p>
        <ul>
          <li className="listNR">Ingestão de alimentos</li>
          <li className="listNR">Exposição ao frio</li>
          <li className="listNR">Exposição ao calor</li>
        </ul>

        <p className="title2NR" style={{ fontSize: '1.25rem' }}>
          <strong>Modelos de estimativa da TMB:</strong>
        </p>
        <ul>
          <li className="listNR">
            <strong>Fórmula de Brody-Kleiber:</strong> TMB = 70 × (peso em kg)
            <sup>0,75</sup>
          </li>
          <li className="listNR">
            <strong>Fórmula de Harris-Benedict (1919):</strong>
          </li>
          <ul>
            <li className="listNR">
              Homens: TMB = 66,5 + (13,75 × peso em kg) + (5,0 × altura em cm) −
              (6,78 × idade em anos)
            </li>
            <li className="listNR">
              Mulheres: TMB = 655,1 + (9,56 × peso em kg) + (1,85 × altura em
              cm) − (4,68 × idade em anos)
            </li>
          </ul>
          <li className="listNR">
            <strong>Equações de Schofield:</strong> utilizadas pela FAO/OMS,
            variam por sexo e faixa etária.
          </li>
        </ul>

        <p className="titleNR" style={{ fontSize: '1.25rem' }}>
          <strong>Atividade Física:</strong> componente mais variável do Gasto
          Energético Total (GET).
        </p>
        <p className="title2NR" style={{ fontSize: '1.25rem' }}>
          Classificação dos níveis de atividade física:
        </p>
        <ul>
          <li className="listNR">Sedentário</li>
          <li className="listNR">Pouco ativo</li>
          <li className="listNR">Ativo</li>
          <li className="listNR">Muito ativo</li>
        </ul>

        <p className="titleNR" style={{ fontSize: '1.25rem' }}>
          <strong>Necessidade Energética Individual:</strong> é a ingestão
          energética que equilibra o gasto energético, mantendo composição
          corporal e saúde geral a longo prazo.
        </p>

        <p className="titleNR" style={{ fontSize: '1.25rem' }}>
          Em crianças, gestantes e lactantes, também inclui os gastos com
          crescimento e produção de leite.
        </p>
        <p className="title2NR" style={{ fontSize: '1.25rem' }}>
          Para mulheres gestantes, além da fórmula de Harris-Benedict, deve-se
          adicionar uma necessidade energética extra de acordo com o trimestre
          da gestação:
        </p>
        <ul>
          <li className="listNR">
            1º trimestre: adicionar cerca de <strong>+85 kcal/dia</strong>
          </li>
          <li className="listNR">
            2º trimestre: adicionar cerca de <strong>+285 kcal/dia</strong>
          </li>
          <li className="listNR">
            3º trimestre: adicionar cerca de <strong>+475 kcal/dia</strong>
          </li>
        </ul>
        <p className="title2NR" style={{ fontSize: '1.25rem' }}>
          Essa adição visa suprir as demandas de crescimento fetal,
          desenvolvimento de tecidos maternos e aumento do metabolismo basal.
        </p>
      </div>
    ),
  },
  {
    title: 'Calculando Necessidades Energéticas',
    content: (
      <div className="contentCE">
        <p
          className="titleCE"
          style={{ fontSize: '1.2rem', fontWeight: 'bold' }}
        >
          Como calcular a necessidade energética diária?
        </p>
        <p className="subtitleCE" style={{ fontSize: '1rem' }}>
          A necessidade energética diária pode ser estimada com base na Taxa
          Metabólica Basal (TMB) e no nível de atividade física. A fórmula mais
          usada é a de Harris-Benedict:
        </p>
        <ul>
          <li className="listCE">
            Homens: TMB = 66,5 + (13,75 × peso em kg) + (5,0 × altura em cm) −
            (6,78 × idade em anos)
          </li>
          <li className="listCE">
            Mulheres: TMB = 655,1 + (9,56 × peso em kg) + (1,85 × altura em cm)
            − (4,68 × idade em anos)
          </li>
        </ul>
        <p className="subtitleCE" style={{ fontSize: '1rem' }}>
          Depois de calcular a TMB, multiplica-se pelo Fator de Atividade Física
          (FAF):
        </p>
        <ul>
          <li className="listCE">Sedentário: × 1,2</li>
          <li className="listCE">Pouco ativo: × 1,375</li>
          <li className="listCE">Ativo: × 1,55</li>
          <li className="listCE">Muito ativo: × 1,725</li>
        </ul>
        <p className="subtitleCE">
          Para gestantes, é necessário adicionar uma quantidade extra de
          energia:
        </p>
        <ul>
          <li className="listCE">1º trimestre: +85 kcal</li>
          <li className="listCE">2º trimestre: +285 kcal</li>
          <li className="listCE">3º trimestre: +475 kcal</li>
        </ul>
        <p className="titleCE">
          Agora, que tal calcular sua necessidade energética?
        </p>
        <EnergyCalculator />
      </div>
    ),
  },
  {
    title: 'Necessidades Energéticas',
    content: 'Revisão de conteúdos sobre energia e metabolismo.',
  },
];

export default topics;
