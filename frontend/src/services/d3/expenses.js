import * as d3 from 'd3'
import * as tip from 'd3-tip'
import './styles.css'

const margin = { top: 30, right: 10, bottom: 50 , left: 40 }

const findMaxTotal = arr => {
    let max = arr.reduce((max, { total }) => { 
        let floatTotal = parseFloat(total.$numberDecimal)
        if (floatTotal > max) {
            max = floatTotal
        }
        return max
    }, 0)

    return max
}

const findDateString = item => { 
    let date = new Date(item._id)
    let day = date.getDate()
    let month = date.getMonth() + 1

    return `${day}/${month}`
}

const parseStringToNumber = item => { 
    let value = item.$numberDecimal
    return parseFloat(value)
}

const DrawExpenseChart =  (element, { items }) => {
    const data = items
    const elementId = '#' + element
    const { offsetWidth } = document.getElementById(element) 
    const width = offsetWidth - margin.left - margin.right
    const height = 350 - margin.top - margin.bottom

    const tooltip = tip.default()
        .attr('class', 'd3-tip')
        .offset([-8, 0])
        .html(data => { 
            let expenses = data.items.map(item => { 
                return `
                    <div> 
                        <span> ${item.expense} ${item.comment} </span> 
                        <span> R$ ${parseStringToNumber(item.amount)} </span> 
                    </div>
                `
            }).join('')

            return expenses.concat(`
                <div> 
                    <span> <b> Total </b> </span> 
                    <span> <b> R$ ${parseStringToNumber(data.total)} </b> </span> 
                </div>
            `)
        })

    const canvas = d3.select(elementId)
        .append('svg')
            .attr('width', width + margin.right + margin.left)
            .attr('height', height + margin.top + margin.bottom)
        .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`)

    canvas.call(tooltip)

    const x = d3.scaleBand()
        .range([0, width])
        .domain(data.map(item => findDateString(item)))
        .padding(0.1)
    
    canvas.append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(x))
        .selectAll('text')
            .attr('transform', 'translate(10, 15)')
            .style('text-anchor', 'end')

    const y = d3.scaleLinear()
        .domain([0, findMaxTotal(data)])
        .range([height, 0])
    
    canvas.append('g')
        .call(d3.axisLeft(y))

    canvas.selectAll(elementId)
        .data(data)
        .enter()
        .append('rect')
            .attr('x', d => x(findDateString(d)))
            .attr('y', d => y(parseStringToNumber(d.total)))
            .attr('width', x.bandwidth)
            .attr('height', d => height - y(parseStringToNumber(d.total)))
            .attr('fill', '#00f2ff') 
            .on('mouseover', tooltip.show)
            .on('mouseout', tooltip.hide)
}

export default DrawExpenseChart