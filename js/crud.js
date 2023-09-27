import {
  onGetUsers,
  saveUser,
  deleteUser,
  getUser,
  updateUser,
  getUsers,
} from "./firebase.js";

const formEle = document.querySelector('#submitForm');
const modal = document.querySelector('#modal');
const nameSpan = document.querySelector('.modal-name');
const containerEle = document.querySelector('table tbody');

document.addEventListener('DOMContentLoaded', async (e) => {
  const querySnapshot = await getUsers();
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
  if (containerEle) {

    onGetUsers((querySnapshot) => {
      containerEle.innerHTML = "";

      querySnapshot.forEach((doc) => {
        const user = doc.data();
        containerEle.innerHTML += `
          <tr>
            <td class="text-slate-400">${user.name}</td>
            <td class="text-slate-400">${user.description}</td>
            <td><button data-id="${doc.id}" class="btn-delete">Delete</button></td>
          </tr>
        `;
      });

      const btnDelete = containerEle.querySelectorAll('.btn-delete');

      btnDelete.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          try {
            var result = confirm("Bạn có chắc xóa không ?");
            if (result) {
              await deleteUser(e.target.dataset.id);
            }
          } catch (error) {
            console.log(error);
          }
        })
      })

    })
  }

  if (formEle) {
    formEle.addEventListener('submit', async(e) => {
      e.preventDefault()

      const name = formEle['name'];
      const description = formEle['description'];

      try {
        await saveUser(name.value, description.value);
        nameSpan.innerHTML = name.value;
        modal.style.display = 'flex';
        formEle.reset();
      } catch (error) {
        console.log(error);
      }
    })
  }
})