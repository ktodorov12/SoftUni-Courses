function cone(radius, height){
    let volume = (1/3) * Math.PI * (radius * radius) * height;
    
    let slantHeight = Math.sqrt(radius * radius + height * height);

    let lateralArea = Math.PI * radius * slantHeight
    let baseArea = Math.PI * (radius * radius);
    let area = baseArea + lateralArea;

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}

cone(3, 5)