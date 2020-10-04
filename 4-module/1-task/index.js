/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  const ul = document.createElement('ul');

  let nameFriend = friends.map(user => 
    `${user.firstName} ${user.lastName}`
         )

    .forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;

    if (item.children) {
      li.appendChild(makeFriendsList(item.children));
    }

    ul.appendChild(li);
  });

  return ul;
}
