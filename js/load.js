makeWord('Game', 10)
makeWord('Game', 10, 'white', 0, 'oposite')

function makeWord(word, slices, color = 'white', offset = 0, className = 'null') {

  const wrapper = document.createElement('div')
  wrapper.classList.add('wrapper')
  document.body.appendChild(wrapper)

  const template = document.createElement('div')
  template.classList.add('template')
  template.textContent = word
  wrapper.appendChild(template)

  const sliceArray = [];

  while (sliceArray.length < slices) {
    const slice = document.createElement('div')
    slice.classList.add(`slice`);
    slice.classList.add(`slice-${sliceArray.length}`);
    slice.classList.add(className)
    slice.style.color = color
    slice.style.animationDelay = .1 * sliceArray.length + offset + 's'
    const mask = document.createElement('div')
    mask.classList.add(`mask`);
    mask.style.height = 100 / slices + '%'
    mask.style.top = sliceArray.length / slices * 100 + '%'
    slice.appendChild(mask)
    const content = document.createElement('div')
    content.classList.add(`content`);
    content.textContent = word
    content.style.transform = `translate3d(0, -${sliceArray.length / slices * 100 + '%'}, 0)`
    mask.appendChild(content)
    wrapper.appendChild(slice)
    sliceArray.push(slice)
  }
}

const num = Math.floor(Math.random() * 100) + 7000;

const count = ()=> console.log(num);

setInterval(count, 1000);
setTimeout(()=>{
  
  window.location.replace("pages/index.html");
},  num );