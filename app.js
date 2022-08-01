const barValues=document.querySelectorAll('.graph_item-value')
const bars=document.querySelectorAll('.graph__bar')
const labels=document.querySelectorAll('.graph__label')

async function getData(url='http://EvgeniyWebDeveloper.github.io/mydata.json'){
    const response = await fetch(url)
    const data =await response.json()
    return data
}
document.addEventListener('DOMContentLoaded', () => {
    getData()
        .then(data => {
            for(let i=0; i < data.length;i++){
                barValues[i].textContent=`$${data[i].amount}`;
                bars[i].style.height=`${data[i].amount}px`;
                bars[i].addEventListener('click',()=>{
                    barValues[i].classList.toggle('showValue')
                   
                })
                labels[i].textContent=data[i].day;
            }
        })
       
          

})
