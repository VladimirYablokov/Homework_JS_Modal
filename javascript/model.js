// массив с данными
const modals  = [
 {
  button_text: 'конпка 1',
  modal_text: 'Какой-нибудь текст для модального окна 1'
 },
 {
  button_text: 'конпка 2',
  modal_text: 'Какой-нибудь текст для модального окна 2'
 },
 {
  button_text: 'конпка 3',
  modal_text: 'Какой-нибудь текст для модального окна 3'
 },
 {
  button_text: 'конпка 4',
  modal_text: 'Какой-нибудь текст для модального окна 4'
 }
];

const rootElem = document.querySelector('#root');
// функция вывода модельного окна

function addModalWindow(text){
	const modalContainerElem = document.createElement('div');
	const modalElem = document.createElement('div');
	const modalDelElem = document.createElement('div')

	modalContainerElem.classList.add('modal-container');
	modalElem.classList.add('modal');
	modalDelElem.classList.add('del_elem');
	modalDelElem.innerText = `❌`;
	modalElem.innerText = text;

	modalElem.appendChild(modalDelElem);
	modalContainerElem.appendChild(modalElem);
	rootElem.appendChild(modalContainerElem);

	modalDelElem.addEventListener('click', ()=> modalContainerElem.remove())
	modalContainerElem.addEventListener('click', ()=> modalContainerElem.remove())
	modalElem.addEventListener('click', event => event.stopPropagation())
};

// добавляем кнопки и при нажатии выплоывает окно
const buttonContainerElem = document.createElement('div');
root.appendChild(buttonContainerElem);
for(let i = 0; i<modals.length; i++){
	const buttonElem = document.createElement('button');
	buttonElem.innerText = modals[i].button_text;
	buttonContainerElem.appendChild(buttonElem);
	buttonElem.addEventListener('click', ()=>addModalWindow(modals[i].modal_text));
}
