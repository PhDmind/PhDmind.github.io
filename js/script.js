// Cytoscape.js 초기화
document.addEventListener('DOMContentLoaded', function () {
  const cy = cytoscape({
    container: document.getElementById('cy'), // Cytoscape가 렌더링될 컨테이너
    elements: [
      { data: { id: 'a' } },
      { data: { id: 'b' } },
      { data: { id: 'c' } },
      { data: { source: 'a', target: 'b' } },
      { data: { source: 'b', target: 'c' } }
    ],
    style: [
      {
        selector: 'node',
        style: {
          'background-color': '#0074d9',
          'label': 'data(id)'
        }
      },
      {
        selector: 'edge',
        style: {
            'width': 3,
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle'
        }
      }
    ],
    layout: {
        name: 'grid',
        rows: 1
    }
  });
});

// p5.js 설정
let sketch = (p) => {
  p.setup = function () {
    // 캔버스를 p5-container에 배치
    let canvas = p.createCanvas(document.getElementById('p5-container').clientWidth, document.getElementById('p5-container').clientHeight);
    canvas.parent('p5-container'); // p5.js 렌더링 컨테이너 설정
    p.background('#9a8bbf');
    // p.strokeWeight(2);
  };

  p.draw = function () {
    p.fill(200, 100, 150);
    p.ellipse(p.mouseX, p.mouseY, 50, 50);

    // let width1 = 300;
    // let height1 = 300;
    // p.fill(
    //   p.random(width1 - 100),
    //   p.random(height1 - 100),
    //   58 + p.random(150),
    //   p.random(150)
    // );
    // p.circle(p.random(width1), p.random(height1), p.random(height1 / 2));
  };

   // 창 크기 변경 시 p5 캔버스 리사이즈
  p.windowResized = function () {
    p.resizeCanvas(document.getElementById('p5-container').clientWidth, document.getElementById('p5-container').clientHeight)
  };
};

// p5.js 인스턴스 생성
new p5(sketch, 'p5-container');
