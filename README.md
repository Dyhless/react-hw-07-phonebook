Перейти к основному содержимому Критерии приема Используй этот шаблон
React-проекта как стартовую точку своего приложения.

Создан репозиторий goit-react-hw-07-phonebook Использована библиотека Redux
Toolkit Книга контактов Выполни рефакторинг кода приложения «Книга контактов».
Удали код отвечающий за хранение и чтение контактов из локального хранилища, и
добавь взаимодействие с бэкендом для хранения контактов.

Бэкенд Создай свой персональный бэкенд для разработки при помощи UI-сервиса
mockapi.io. Зарегистрируйся используя свой аккаунт GitHub. Создай ресурс
contacts чтобы получить ендпоинт /contacts. Используй конструктор ресурса и
опиши объект контакта как на иллюстрации.

Contact schema Форма состояния Добавь в состояние Redux обработку индикатора
загрузки и ошибки. Для этого измени форму состояния.

{ contacts: { items: [], isLoading: false, error: null }, filter: "" }

Операции Используй функцию createAsyncThunk для объявления асинхронный
генераторов экшенов и выполнения HTTP-запросов. Обработку экшенов и изменение
данных в состоянии Redux сделай при помощи createSlice.

Объяви следующие операции:

fetchContacts - получение массива контактов (метод GET) запросом. Базовый тип
экшена "contacts/fetchAll". addContact - добавление контакта (метод POST).
Базовый тип экшена "contacts/addContact". deleteContact - удаление контакта
(метод DELETE). Базовый тип экшена "contacts/deleteContact".
