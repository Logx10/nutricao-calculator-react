import { useState } from 'react';
import '../styles/SectionBox.css';
import React from 'react';
import { BlockMath, InlineMath } from 'react-katex';

function EnergyCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('female');
  const [activityLevel, setActivityLevel] = useState('1.2');
  const [isPregnant, setIsPregnant] = useState(false);
  const [gestationTrimester, setGestationTrimester] = useState('1');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    if (isNaN(w) || isNaN(h) || isNaN(a)) {
      setResult(
        <p style={{ color: 'red' }}>
          Por favor, preencha todos os campos corretamente.
        </p>,
      );
      return;
    }

    let tmb = 0;

    if (sex === 'male') {
      tmb = 66.5 + 13.75 * w + 5.0 * h - 6.78 * a;
    } else {
      tmb = 655.1 + 9.56 * w + 1.85 * h - 4.68 * a;
    }

    let get = tmb * parseFloat(activityLevel);

    if (isPregnant && sex === 'female') {
      const extraEnergy =
        gestationTrimester === '1'
          ? 85
          : gestationTrimester === '2'
          ? 285
          : 475;
      get += extraEnergy;
    }

    setResult(
      `Sua necessidade energética diária estimada é de ${Math.round(
        get,
      )} kcal.`,
    );
  };

  return (
    <div className="calculadora-container">
      <p className="calculadora-title">
        Preencha os dados para calcular sua necessidade energética:
      </p>

      <div className="calculadora-input">
        <label>Peso (kg): </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <div className="calculadora-input">
        <label>Altura (cm): </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>

      <div className="calculadora-input">
        <label>Idade: </label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <div className="calculadora-input">
        <label>Sexo: </label>
        <select value={sex} onChange={(e) => setSex(e.target.value)}>
          <option value="female">Feminino</option>
          <option value="male">Masculino</option>
        </select>
      </div>

      <div className="calculadora-input">
        <label>Nível de atividade física: </label>
        <select
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value)}
        >
          <option value="1.2">Sedentário</option>
          <option value="1.375">Pouco ativo</option>
          <option value="1.55">Ativo</option>
          <option value="1.725">Muito ativo</option>
        </select>
      </div>

      {sex === 'female' && (
        <div className="calculadora-input">
          <label>Está grávida? </label>
          <input
            type="checkbox"
            checked={isPregnant}
            onChange={(e) => setIsPregnant(e.target.checked)}
          />
        </div>
      )}

      {isPregnant && (
        <div className="calculadora-input">
          <label>Trimestre da gestação: </label>
          <select
            value={gestationTrimester}
            onChange={(e) => setGestationTrimester(e.target.value)}
          >
            <option value="1">1º trimestre</option>
            <option value="2">2º trimestre</option>
            <option value="3">3º trimestre</option>
          </select>
        </div>
      )}

      <button className="botaocalcular" onClick={handleCalculate}>
        Calcular
      </button>

      {result && (
        <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>{result}</p>
      )}
    </div>
  );
}

export default EnergyCalculator;
