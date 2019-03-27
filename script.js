const fill = document.querySelector(".fill")
const emptes = document.querySelectorAll(".empty")

console.log("fill", fill)
console.log("empty", emptes)

fill.addEventListener('dragstart' , dragStart)
fill.addEventListener('dragend' , dragEnd)

function dragStart() {
    this.className +=  ' hold'
setTimeout(() => (this.className ='invisible'), 0)
}


for ( const empty of emptes) {
    empty.addEventListener( 'dragover', dragOver)
    empty.addEventListener( 'dragenter', dragEnter)
    empty.addEventListener( 'dragleave', dragLeave)
    empty.addEventListener( 'drop', drop)
}

function dragEnd() {
    this.className += ' fill'
}

function dragOver (e){
    e.preventDefault()
}

function dragEnter (e){
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave (){
    this.className = 'empty'
}

function drop (){
    this.className = 'empty'
    this.append(fill)
}