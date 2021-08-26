const test = dom.find('#test>.red')[0]          //获取对应的元素
// console.log(dom.find('.red', test)[0])

dom.style(test2, 'color', 'red')               //设置div.style.color

const divList = dom.find('.red')                //获取多个div.red元素
// console.log(dom.find('.red')[0])
dom.each(divList, (n) => console.log(n))        //遍历divList里的所有元素
