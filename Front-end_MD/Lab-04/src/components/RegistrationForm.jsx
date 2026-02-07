/**
 * Компонент RegistrationForm
 * Лабораторная 4.1: Обработка событий и валидация форм
 * 
 * Особенности:
 * - Контролируемые компоненты (паттерн value + onChange)
 * - Валидация в реальном времени при изменении полей
 * - Отправка формы с preventDefault
 * - Отображение ошибок и сообщения об успехе
 */

import { useState } from 'react';

const RegistrationForm = () => {
  // Состояния для полей формы
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  // Состояния для сообщений об ошибках валидации
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [ageError, setAgeError] = useState('');

  // Состояние для отображения сообщения об успешной регистрации
  const [success, setSuccess] = useState(false);

  /**
   * Валидация поля имени
   * @param {string} nameValue - Значение поля имени
   * @returns {string} Сообщение об ошибке или пустая строка если валидно
   */
  const validateName = (nameValue) => {
    if (!nameValue.trim()) {
      return 'Имя обязательно для заполнения';
    }
    if (nameValue.trim().length < 2) {
      return 'Имя должно содержать минимум 2 символа';
    }
    return '';
  };

  /**
   * Валидация поля email с использованием регулярного выражения
   * @param {string} emailValue - Значение поля email
   * @returns {string} Сообщение об ошибке или пустая строка если валидно
   */
  const validateEmail = (emailValue) => {
    if (!emailValue.trim()) {
      return 'Email обязателен для заполнения';
    }
    // Простое регулярное выражение для проверки email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      return 'Введите корректный email адрес';
    }
    return '';
  };

  /**
   * Валидация поля возраста
   * @param {string} ageValue - Значение поля возраста
   * @returns {string} Сообщение об ошибке или пустая строка если валидно
   */
  const validateAge = (ageValue) => {
    if (!ageValue) {
      return 'Возраст обязателен для заполнения';
    }
    const ageNum = parseInt(ageValue, 10);
    if (isNaN(ageNum)) {
      return 'Возраст должен быть числом';
    }
    if (ageNum < 18) {
      return 'Вам должно быть не менее 18 лет';
    }
    return '';
  };

  /**
   * Обработчик отправки формы
   * Использует синтетическое событие для предотвращения стандартной отправки браузера
   * @param {React.SyntheticEvent} e - Событие отправки формы
   */
  const handleSubmit = (e) => {
    // Предотвращаем стандартную отправку формы (перезагрузку страницы)
    e.preventDefault();

    // Валидируем все поля перед отправкой
    const nameValidationError = validateName(name);
    const emailValidationError = validateEmail(email);
    const ageValidationError = validateAge(age);

    // Обновляем состояния ошибок
    setNameError(nameValidationError);
    setEmailError(emailValidationError);
    setAgeError(ageValidationError);

    // Проверяем, есть ли ошибки валидации
    if (nameValidationError || emailValidationError || ageValidationError) {
      setSuccess(false);
      return; // Останавливаем отправку если валидация не пройдена
    }

    // Успех: показываем сообщение и очищаем форму
    setSuccess(true);
    setName('');
    setEmail('');
    setAge('');
    setNameError('');
    setEmailError('');
    setAgeError('');
  };

  return (
    <div className="registration-form-container" style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Регистрация пользователя</h2>
      
      <form onSubmit={handleSubmit}>
        {/* Поле имени */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>
            Имя:
          </label>
          <input
            type="text"
            id="name"
            placeholder="Введите ваше имя"
            value={name}
            onChange={(e) => {
              const value = e.target.value;
              setName(value);
              setNameError(validateName(value));
              setSuccess(false);
            }}
            style={{ width: '100%', padding: '8px' }}
          />
          {nameError && (
            <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
              {nameError}
            </p>
          )}
        </div>

        {/* Поле email */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Введите ваш email"
            value={email}
            onChange={(e) => {
              const value = e.target.value;
              setEmail(value);
              setEmailError(validateEmail(value));
              setSuccess(false);
            }}
            style={{ width: '100%', padding: '8px' }}
          />
          {emailError && (
            <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
              {emailError}
            </p>
          )}
        </div>

        {/* Поле возраста */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="age" style={{ display: 'block', marginBottom: '5px' }}>
            Возраст:
          </label>
          <input
            type="number"
            id="age"
            placeholder="Введите ваш возраст"
            value={age}
            onChange={(e) => {
              const value = e.target.value;
              setAge(value);
              setAgeError(validateAge(value));
              setSuccess(false);
            }}
            style={{ width: '100%', padding: '8px' }}
          />
          {ageError && (
            <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
              {ageError}
            </p>
          )}
        </div>

        {/* Кнопка отправки */}
        <button 
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Отправить
        </button>
      </form>

      {/* Сообщение об успехе */}
      {success && (
        <p style={{ color: 'green', marginTop: '15px', textAlign: 'center' }}>
          Регистрация прошла успешно!
        </p>
      )}
    </div>
  );
};

export default RegistrationForm;