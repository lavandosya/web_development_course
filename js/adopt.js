const pets = [
    { id: 1, name: 'Чарлі', description: 'Дружній і активний, обожнює гратися з м\'ячиком.', age: '2 роки', breed: 'Джек-Рассел', sex: 'Хлопчик' },
    { id: 2, name: 'Люсі', description: 'Енергійна і весела собачка, завжди готова до гри.', age: '3 роки', breed: 'Вішла', sex: 'Дівчинка' },
    { id: 3, name: 'Макс', description: 'Розумний та слухняний.', age: '1 рік', breed: 'Бігль', sex: 'Хлопчик' },
    { id: 4, name: 'Бейлі', description: 'Лагідний котик з великим серцем.', age: '3 роки', breed: 'Скотіш-фолд', sex: 'Дівчинка' },
    { id: 5, name: 'Дейзі', description: 'Мила та пухнаста.', age: '2 роки', breed: 'Чарльз-Спанієль', sex: 'Дівчинка' },
    { id: 6, name: 'Купер', description: 'Грайливий хлопчик.', age: '2 роки', breed: 'Ретривер', sex: 'Хлопчик' },
    { id: 7, name: 'Такер', description: 'Доброзичливий та відданий.', age: '3 роки', breed: 'Мальтійська болонка', sex: 'Хлопчик' },
    { id: 8, name: 'Пайпер', description: 'Чутливий та ніжний.', age: '2 роки', breed: 'Німецький пінчер', sex: 'Хлопчик' }
];

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('adopt-modal');
    const modalTitle = document.getElementById('adopt-modal-title');
    const modalDescription = document.getElementById('adopt-modal-description');
    const modalAge = document.getElementById('adopt-modal-age');
    const modalBreed = document.getElementById('adopt-modal-breed');
    const modalSex = document.getElementById('adopt-modal-sex');
    const closeModal = document.querySelector('.adopt-close');

    document.querySelectorAll('.details-button').forEach(button => {
        button.addEventListener('click', () => {
            const petId = parseInt(button.getAttribute('data-id')); // Отримуємо ID тварини
            const pet = pets.find(p => p.id === petId); // Знаходимо тварину за ID

            if (pet) {
                modalTitle.textContent = pet.name; // Додаємо ім'я
                modalDescription.textContent = pet.description; // Додаємо опис
                modalAge.textContent = `Вік: ${pet.age}`; // Додаємо вік
                modalBreed.textContent = `Порода: ${pet.breed}`; // Додаємо породу
                modalSex.textContent = `Стать: ${pet.sex}`; // Додаємо стать
                modal.style.display = 'block'; // Відкриваємо модальне вікно
            }
        });
    });

    // Закриття модального вікна
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Закриття при кліку за межі модального вікна
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
