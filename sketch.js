let mobileNet;
let img;

function modelReady() {
  console.log("Model is ready!");
  mobileNet.classify(img, gotResult)
}

function gotResult(results, error) {
  if (error) {
    console.error(error)
  } else {
    console.log("results: ", results)
    let label = results[0].label
    let conf = `${results[0].confidence*100} confident`
    // fill(0);
    // textSize(64);
    // text(label, 10, height -100)
    createP(label)
    createP(conf)
  }
}

function imageReady() {
  image(img, 0, 0, width, height);
}

function setup() {
  createCanvas(400, 400);

  img = createImg("images/kitty.jpeg", imageReady);
  img.hide();

  background(0);
  mobileNet = ml5.imageClassifier("MobileNet", modelReady);
}
