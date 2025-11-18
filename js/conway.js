(() => {
  const GRID_SIZE = 8;
  const FRAME_LENGTH = 2500;

  const canvas = document.getElementById('conwayCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let cellSize = -1;

  function resize() {
    const parentWidth = canvas.parentElement ? canvas.parentElement.clientWidth : 240;
    const size = Math.max(120, Math.min(360, parentWidth));
    canvas.width = size;
    canvas.height = size;
    cellSize = Math.floor(size / GRID_SIZE);
  }

  window.addEventListener('resize', resize);
  resize();

  function createGrid() {
    return Array.from({ length: GRID_SIZE }, () => Array.from({ length: GRID_SIZE }, () => 0));
  }

  let grid = createGrid();

  function randomizeGrid() {
    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        grid[i][j] = Math.random() < 0.3 ? 1 : 0;
      }
    }
  }

  function draw() {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        const x = j * cellSize;
        const y = i * cellSize;
        if (grid[i][j]) {
          ctx.fillStyle = '#111111';
          ctx.fillRect(x, y, cellSize, cellSize);
        }
      }
    }
  }

  function step() {
    const next = createGrid();
    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        let neighbors = 0;
        for (let di = -1; di <= 1; di++) {
          for (let dj = -1; dj <= 1; dj++) {
            if (di === 0 && dj === 0) continue;
            const ni = (i + di + GRID_SIZE) % GRID_SIZE;
            const nj = (j + dj + GRID_SIZE) % GRID_SIZE;
            neighbors += grid[ni][nj];
          }
        }

        if (grid[i][j]) {
          next[i][j] = neighbors === 2 || neighbors === 3 ? 1 : 0;
        } else {
          next[i][j] = neighbors === 3 ? 1 : 0;
        }
      }
    }
    grid = next;
    draw();
  }

  randomizeGrid();
  draw();

  setInterval(step, FRAME_LENGTH);

  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const j = Math.floor(x / cellSize);
    const i = Math.floor(y / cellSize);
    if (i >= 0 && i < GRID_SIZE && j >= 0 && j < GRID_SIZE) {
      grid[i][j] = grid[i][j] ? 0 : 1;
      draw();
    }
  });
})();
