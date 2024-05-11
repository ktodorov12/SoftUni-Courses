const editCat = (cat) => {
  return `        
    <form action="/edit-cat/${cat.id}" method="POST" class="cat-form" enctype="multipart/form-data">
        <h2>Edit Cat</h2>
        <label for="name">Name</label>
        <input type="text" name="name" value="${cat.name}">
        <label for="description">Description</label>
        <textarea name="description">${cat.description}</textarea>
        <label for="image">Image</label>
        <input type="file" name="image">
        <label for="group">Breed</label>
        <select name="group">
            <option value="${cat.breed}">${cat.breed}</option>
        </select>
        <button>Edit Cat</button>
    </form>`;
};

module.exports = editCat