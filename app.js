document.addEventListener("DOMContentLoaded", () => {
  const platformSelect = document.getElementById("platform");
  const socketSelect = document.getElementById("socket");
  const cpuSelect = document.getElementById("cpu");
  const buildDisplay = document.getElementById("buildDisplay");
  const buildParts = document.getElementById("buildParts");
  const totalPrice = document.getElementById("totalPrice");

  function populateSockets(platform) {
    socketSelect.innerHTML = '<option value="">Select Socket</option>';
    Object.keys(cpuDatabase[platform]).forEach(socket => {
      let opt = document.createElement("option");
      opt.value = socket;
      opt.textContent = socket.toUpperCase();
      socketSelect.appendChild(opt);
    });
  }

  function populateCPUs(socket) {
    cpuSelect.innerHTML = '<option value="">Select CPU</option>';
    const platform = platformSelect.value;
    cpuDatabase[platform][socket].forEach((cpu, i) => {
      let opt = document.createElement("option");
      opt.value = i;
      opt.textContent = `${cpu.name} (${cpu.generation}) - ${cpu.price}`;
      cpuSelect.appendChild(opt);
    });
  }

  function displayBuild(cpu) {
    buildParts.innerHTML = "";
    let total = parseFloat(cpu.price.replace('$','')) || 0;
    
    Object.entries(cpu.compatibleParts).forEach(([type, part], idx) => {
      let card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${type.toUpperCase()}</h3>
        <p class="part-name">${part.name}</p>
        <p class="part-price">${part.price}</p>
      `;
      buildParts.appendChild(card);
      setTimeout(() => card.style.opacity = 1, idx * 150);
      
      total += parseFloat(part.price.replace('$','')) || 0;
    });

    totalPrice.textContent = `Total Estimated Price: $${total.toFixed(2)}`;
    buildDisplay.classList.remove("hidden");
  }

  platformSelect.addEventListener("change", () => {
    populateSockets(platformSelect.value);
    buildDisplay.classList.add("hidden");
  });

  socketSelect.addEventListener("change", () => {
    if (socketSelect.value) {
      populateCPUs(socketSelect.value);
    }
    buildDisplay.classList.add("hidden");
  });

  cpuSelect.addEventListener("change", () => {
    if (cpuSelect.value) {
      const platform = platformSelect.value;
      const socket = socketSelect.value;
      const cpu = cpuDatabase[platform][socket][cpuSelect.value];
      displayBuild(cpu);
    } else {
      buildDisplay.classList.add("hidden");
    }
  });

  populateSockets("intel");
});