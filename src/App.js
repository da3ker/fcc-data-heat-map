import * as d3 from 'd3';
import { useState, useEffect } from 'react';
import './App.scss';

function App() {
const [baseTemp, setBaseTemp] = useState('')
const [monthlyVariance, setMonthlyVariance] = useState([])

useEffect(() => {
 async function fetchData(){
   let response = await fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json')
   let data = await response.json()
   setMonthlyVariance(data.monthlyVariance)
   setBaseTemp(data.baseTemperature)
   console.log(data.monthlyVariance)
   console.log(data.baseTemperature)
 }
 fetchData()
}, [])

let xScale, yScale, minYear, maxYear;

let width = 1200;
let height = 550;
let padding = 80;

let canvas = d3.select('#canvas')
canvas.attr("width", width)
canvas.attr("height", height)

let tooltip = d3.select('#tooltip')

const generateScales = () => {
  minYear = d3.min(monthlyVariance, (d) => d['year'])
  maxYear = d3.max(monthlyVariance, (d) => d['year'])

  xScale = d3.scaleLinear()
             .domain([minYear, maxYear + 1])
             .range([padding, width - padding])

  yScale = d3.scaleTime()
             .domain([new Date(0, 0, 0, 0, 0, 0, 0), new Date(0, 12, 0, 0, 0, 0, 0)])
             .range([padding, height - padding])


}

const drawCells = () => {
  canvas.selectAll('rect')
     .data(monthlyVariance)
     .enter()
     .append('rect')
     .attr('class', 'cell')
     .attr('fill', (d) => {
       let variance = d.variance
       if(variance <= -1){
        return '#4795FF'
       }else if(variance <= 0){
         return '#47E3FF'
       }else if(variance <= 1){
         return '#FFBF47'
       }else{
         return '#FEFF47'
       } 
     })
     .attr('data-year', (d) => d['year'])
     .attr('data-month', (d) => d['month']- 1)
     .attr('data-temp', (d) => baseTemp + d['variance'])
     .attr('height', (height - (2 * padding)) / 12)
     .attr('y', (d) => {
       return yScale(new Date(0, d['month'] - 1, 0, 0, 0, 0, 0 ))
     })
     .attr('width', (d) => {
       let totalYears = maxYear - minYear
       return (width - (2 * padding)) / totalYears
     })
     .attr('x', (d) => xScale(d['year']))
     .on('mouseover', (d) => {
        tooltip.transition()
        .duration(100)
                .style('visibility', 'visible')
        
        let months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ]        
        tooltip.html(d['year'] + ' - ' + months[d['month'] - 1] 
                    + '<br/>' 
                    + d3.format('+.1f')(baseTemp + d['variance'])
                    + '&#8451; <br/>' 
                    + d3.format('+.1f')(d['variance']) + '&#8451;')
         tooltip.style("left", d3.event.pageX + 20 + "px")
                .style("top", d3.event.pageY - 20 + "px")      

        tooltip.attr('data-year', d['year'])
     })
     .on('mouseout', (d) => {
       tooltip.transition()
               .duration(100)
               .style('visibility', 'hidden')
     })

}

const generateAxes = () => {
  let xAxis = d3.axisBottom(xScale)
                .tickFormat(d3.format('d'))
  let yAxis = d3.axisLeft(yScale)
                .tickFormat(d3.timeFormat('%B'))
            

  canvas.append('g')
     .call(xAxis)
     .attr('id', 'x-axis')
     .attr('transform', 'translate(0, '+ (height - padding) + ')')

  canvas.append('g')
     .call(yAxis)
     .attr('id', 'y-axis')
     .attr('transform', 'translate('+ padding +', 0)')

}

useEffect(() => {
  generateScales()
  drawCells()
  generateAxes()
},[baseTemp])


  return (
    <div className="App">
      <h1 id="title">Monthly Global Land-Surface Temperature</h1>
      <div id="container">
        <svg id="canvas">
        <text x="50%" y="7%" dominantBaseline="middle" textAnchor="middle" id="description">1753 - 2015: Base Temperature 8.66℃</text>
        </svg>
        <div id="name">
          <svg height="180" width="160" id="legend">
            <text x="50%" y="10%" dominantBaseline="middle" textAnchor="middle">Variance</text>
            <g>
            <rect x="40" y="40" width ="20" height="20" fill="#4795FF" />
            <text x="70" y="52" fill="black" >-1 or less</text>
            </g>
            <g>
            <rect x="40" y="70" width ="20" height="20" fill="#47E3FF" />
            <text x="70" y="82" fill="black" >0 or less</text>
            </g>
            <g>
            <rect x="40" y="100" width ="20" height="20" fill="#FFBF47" />
            <text x="70" y="113 " fill="black" >1 or less</text>
            </g>
            <g>
            <rect x="40" y="130" width ="20" height="20" fill="#FEFF47" />
            <text x="70" y="142" fill="black" >1 or more</text>
            </g>
          </svg>
          <br/>
          <span id="da3ker">by da3ker</span>
        </div>
        <div id ="tooltip"></div>
      </div>
      
    </div>
  );
}

export default App;
