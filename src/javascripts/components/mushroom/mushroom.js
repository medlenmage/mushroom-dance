const mushroomMaker = (mushroom) => {
  // mushroom.name
  // .locations
  // .size
  // .weight

  const domString = `
    <div class="col-3">
        <div class="card border-0  rounded-0" id=""${mushroom.id}>
        <div class="card-body">
        <div class="card-header">${mushroom.name}</div>
          <h5 class="card-title">${mushroom.location}</h5>
          <p class="card-text">This mushroom is ${mushroom.size}</p>
          <button class="btn btn-danger delete-shroom">Delete Shroom</button>
        </div>
      </div>
    </div>
  `;

  return domString;
};

export default { mushroomMaker };
