const mushroomMaker = (mushroom) => {
  // mushroom.name
  // .locations
  // .size
  // .weight

  const domString = `
    <div class="col-3">
        <div class="card">
        <div class="card-body">
        <div class="card-header">${mushroom.name}</div>
          <h5 class="card-title">${mushroom.location}</h5>
          <p class="card-text">This mushroom is ${mushroom.size}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  `;

  return domString;
};

export default { mushroomMaker };
