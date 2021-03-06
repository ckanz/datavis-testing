import { line } from 'd3-shape';
import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { max, min } from 'd3-array';

const dataIsValid = data => {
  return data && data.length > 0;
};

export default (container, data) => {
  if (!container) {
    return;
  }
  if (!dataIsValid(data)) {
    container.innerHTML = 'Missing or invalid data';
    return container;
  }

  const height = 200, width = 800, margin = 10;

  const xScale = scaleLinear()
    .domain([0, data.length-1])
    .range([0, width]);
  const yScale = scaleLinear()
    .domain([max(data), min(data)])
    .range([margin, height - margin]);

  const myLine = line()
    .x((d, i) => xScale(i))
    .y(d => yScale(d));

  const svg = select(container)
    .append('svg')
    .attr('id', 'chart-svg')
    .attr('width', width)
    .attr('height', height);

  svg.append('path')
    .attr('id', 'chart-line')
    .datum(data)
    .attr('fill', 'none')
    .attr('stroke', '#b6c630')
    .attr('stroke-width', 3)
    .attr('d', myLine)
    .on('mouseover', () => {
      select('#footer').style('display', 'block');
    })
    .on('mouseout', () => {
      select('#footer').style('display', 'none');
    });

  return container;
};

export {
  dataIsValid
};
