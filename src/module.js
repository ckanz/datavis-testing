import { line } from 'd3-shape';
import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { max } from 'd3-array';

export default () => {
  const data = [2, 6, 1, 9, 8, 7];
  const height = 200;
  const width = 800;

  const xScale = scaleLinear()
    .domain([0, data.length-1])
    .range([0, width]);
  const yScale = scaleLinear()
    .domain([max(data), 0])
    .range([0, height]);

  const myLine = line()
    .x((d, i) => xScale(i))
    .y(d => yScale(d));

  const svg = select('#chart-container')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  svg.append('path')
    .datum(data)
    .attr('fill', 'none')
    .attr('stroke', 'yellow')
    .attr('stroke-width', 3)
    .attr('d', myLine);
};
