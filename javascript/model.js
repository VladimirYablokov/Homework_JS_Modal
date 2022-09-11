// // массив с данными
// const modals  = [
//  {
//   button_text: 'конпка 1',
//   modal_text: 'Какой-нибудь текст для модального окна 1'
//  },
//  {
//   button_text: 'конпка 2',
//   modal_text: 'Какой-нибудь текст для модального окна 2'
//  },
//  {
//   button_text: 'конпка 3',
//   modal_text: 'Какой-нибудь текст для модального окна 3'
//  },
//  {
//   button_text: 'конпка 4',
//   modal_text: 'Какой-нибудь текст для модального окна 4'
//  }
// ];

// const rootElem = document.querySelector('#root');
// // функция вывода модельного окна

// function addModalWindow(text){
// 	const modalContainerElem = document.createElement('div');
// 	const modalElem = document.createElement('div');
// 	const modalDelElem = document.createElement('div')

// 	modalContainerElem.classList.add('modal-container');
// 	modalElem.classList.add('modal');
// 	modalDelElem.classList.add('del_elem');
// 	modalDelElem.innerText = `❌`;
// 	modalElem.innerText = text;

// 	modalElem.appendChild(modalDelElem);
// 	modalContainerElem.appendChild(modalElem);
// 	rootElem.appendChild(modalContainerElem);

// 	modalDelElem.addEventListener('click', ()=> modalContainerElem.remove())
// 	modalContainerElem.addEventListener('click', ()=> modalContainerElem.remove())
// 	modalElem.addEventListener('click', event => event.stopPropagation())
// };

// // добавляем кнопки и при нажатии выплоывает окно
// const buttonContainerElem = document.createElement('div');
// root.appendChild(buttonContainerElem);
// for(let i = 0; i<modals.length; i++){
// 	const buttonElem = document.createElement('button');
// 	buttonElem.innerText = modals[i].button_text;
// 	buttonContainerElem.appendChild(buttonElem);
// 	buttonElem.addEventListener('click', ()=>addModalWindow(modals[i].modal_text));
// }

const rootElem = document.querySelector('#root');
const modals = [
	{
		buttonText: 'button 1',
		modalText: 'text for modal window 1'
	},
	{
		buttonText: 'button 2',
		modalText: 'text for modal window 2'
	},
	{
		buttonText: 'button 3',
		modalText: 'text for modal window 3'
	},
	{
		buttonText: 'button 4',
		modalText: 'text for modal window 4'
	},
];

function addModalWindow(modals) {
	const modalContainer = document.createElement('div');
	const modalElem = document.createElement('div');
	const modalDelElem = document.createElement('div');
	modalElem.classList.add('modal');
	modalContainer.classList.add('modal-container');
	modalDelElem.classList.add('del_elem');
	rootElem.append(modalContainer);
	modalContainer.append(modalElem);
	modalElem.append(modalDelElem);
	modalDelElem.innerText = `❌`;
	modalElem.append(modals)
	modalDelElem.addEventListener('click', () => modalContainer.remove());
	modalContainer.addEventListener('dblclick', () => modalContainer.remove());
	modalElem.addEventListener('click', event => event.stopPropagation());
};

const buttonContainerElem = document.createElement('div');
buttonContainerElem.classList.add('btns')
root.append(buttonContainerElem);

function addBtns() {
	for (let i = 0; i < modals.length; i++) {
		const buttonElem = document.createElement('button');
		buttonElem.classList.add('btn')
		buttonContainerElem.append(buttonElem);
		buttonElem.innerText = modals[i].buttonText;
		buttonElem.addEventListener('click', () => addModalWindow(modals[i].modalText));
	}
}
addBtns()