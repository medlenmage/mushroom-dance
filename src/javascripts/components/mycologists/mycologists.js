const mycologistMaker = (mycologist) => {
  const domString = `
  <div class="col-3">
  <div class="card myco-card border-0 rounded-0" id=${mycologist.id}>
    <div class="card-body">
      <h5 class="card-title text-center">${mycologist.name}</h5>
    </div>
  `;

  return domString;
};

export default { mycologistMaker };
