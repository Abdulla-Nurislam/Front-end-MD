import StepCounter from './StepCounter';

function CounterApp() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Lab 3.1</h1>
      <p>Два независимых счетчика с разными начальными значениями и шагами:</p>
      
      {/* Первый счетчик: начало с 0, шаг 1 */}
      <StepCounter initialValue={0} step={1} />
      
      {/* Второй счетчик: начало с 10, шаг 5 */}
      <StepCounter initialValue={10} step={5} />
    </div>
  );
}

export default CounterApp;