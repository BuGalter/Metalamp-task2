import {refs} from './refs-on-element';
import './index.scss';

//Ждем загрузки дом дерева, событие подходит для добавления узлов
document.addEventListener("DOMContentLoaded", addListRefs());

/**
  * Формируем список ссылок на сверстаные страницы проекта
  * @name addListRefs()
  * @private Импортируем массив объектов refs, которые содержат данные для формирования 
  * @private ссылок.
  * @private Находим блок, создаем список, добавляем в дерево, создаем элемент списка,
  * @private добавляем элемент в список, добавляем ссылку.
  */
function addListRefs() {
    let listNode = document.body.querySelector('.list-refs');
    let list = document.createElement('ul');
    listNode.append(list);
    list.classList.add('list-refs__list');
    refs.forEach((refAttributes) => {
        let listItem = document.createElement('li');
        list.append(listItem);
        let ref = document.createElement('a');
        ref.href = refAttributes.ref;
        ref.text = refAttributes.title;
        listItem.append(ref);
    });
};