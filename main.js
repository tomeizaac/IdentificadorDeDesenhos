function preload(){
    classifier= ml5.imageClassifier('DoodleNet')
}

function setup(){
     canvas= createCanvas(800, 500)
     canvas.center()
    background("white")
    canvas.mouseReleased(classificar)
}

function draw(){
    stroke("black")
    strokeWeight(8)
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
}

function classificar(){
    classifier.classify(canvas, gotResult)
}

function gotResult(error, results){
    // if (error){
    //     console.error(error)
    // }
    // else {
        console.log("teste")
        console.log(results)
        let resultado=results[0]
        console.log(resultado)
        document.getElementById("label").innerHTML= results[0].label 
        document.getElementById("confidence").innerHTML= results[0].confidence *100
    // }
}

function clearCanvas(){
    background("white")
}