const editCat = (cat) => {
  return `        
    <form action="/edit-cat/${cat.id}" method="POST" class="cat-form" enctype="multipart/form-data">
        <h2>Edit Cat</h2>
        <label for="name">Name</label>
        <input type="text" id="name" value="${cat.name}">
        <label for="description">Description</label>
        <textarea id="description">${cat.description}</textarea>
        <label for="image">Image</label>
        <input type="file" id="image">
        <label for="group">Breed</label>
        <select id="group">
            <option value="${cat.breed}">${cat.breed}</option>
        </select>
        <button>Edit Cat</button>
    </form>`;
};

module.exports = editCat