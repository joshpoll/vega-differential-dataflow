import * as vega from "vega";

fetch('https://vega.github.io/vega/examples/bar-chart.vg.json')
.then(res => res.json())
.then(spec => render(spec))
.catch(err => console.error(err));

const render = (spec) => {
  const view = new vega.View(vega.parse(spec), {
    renderer: "canvas",
    container: '#view',   // parent DOM container
    hover:     true       // enable hover processing
  })

  return view.runAsync();
}