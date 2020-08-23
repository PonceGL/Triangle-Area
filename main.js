const side_one = document.getElementById('side_one');
const side_two = document.getElementById('side_two');
const side_three = document.getElementById('side_three');


const results_triangle_type = document.getElementById('results_triangle_type');
const data_area = document.getElementById('data_area');
const data_height = document.getElementById('data_height');

const data_side_one = document.getElementById('data_side_one');
const data_side_two = document.getElementById('data_side_two');
const data_side_three = document.getElementById('data_side_three');

const form_values = document.getElementById('form_values');

const polygonEscaleno = document.querySelector('.escaleno');
const polygonIsosceles = document.querySelector('.isosceles');
const polygonEquilatero = document.querySelector('.equilatero');
const polygonUStrange = document.querySelector('.strangeU');
const polygonDStrange = document.querySelector('.strangeD');

const values = (e) => {
    e.preventDefault();
    if(side_one.value == '' || side_two.value == '' || side_three.value == ''){
        data_height.innerHTML = `Algun valor esta vacio, no se puede calcular`;
        resetValues();
    }else{
        side1 = parseFloat(side_one.value);
        side2 = parseFloat(side_two.value);
        side3 = parseFloat(side_three.value);
        identifies();
        side_one.value = '';
        side_two.value = '';
        side_three.value = '';
    }
};

form_values.addEventListener('submit', values);


const escaleno = () => {
    height = side1 * side2 / side3;
    area = side3 * height / 2;
    printMasurements();
    print();
 }

 const calculate = (base, hipotenusa) => {
    let a = hipotenusa  * hipotenusa;
    let cateto = base / 2;
    let b = cateto * cateto;
    height = Math.sqrt(a - b);
    area = base * height / 2;
    printMasurements();
    print();
}

const print = () => {
     data_area.innerHTML = `El area es de: ${area.toFixed(4)}`;
     data_height.innerHTML = `La altura es de: ${height.toFixed(4)}`;
 }

 const printMasurements = () => {
     data_side_one.innerHTML = `Lado uno: ${side1}`;
     data_side_two.innerHTML = `Lado dos: ${side2}`;
     data_side_three.innerHTML = `Lado tres: ${side3}`;

 }
 
 const resetValues = () => {
    data_area.innerHTML = ``;
    data_height.innerHTML = ``;
    data_side_one.innerHTML = ``;
    data_side_two.innerHTML = ``;
    data_side_three.innerHTML = ``;
    side_one.value = '';
    side_two.value = '';
    side_three.value = '';

    polygonEscaleno.classList.add('hide');
    polygonIsosceles.classList.add('hide');
    polygonEquilatero.classList.add('hide');
    polygonUStrange.classList.add('hide');
    polygonDStrange.classList.add('hide');

 }

const identifies = () => {
    resetValues();
    if(side1 + side2 < side3 || side1 + side3 < side2 || side2 + side3 < side1){
        results_triangle_type.innerText = 'Este es un \"triángulo \" muy extraño, una esquina no se cierra';
        polygonUStrange.classList.remove('hide')
        polygonDStrange.classList.remove('hide')
        printMasurements();
    }else if(side1 == side2 || side1 == side3){
        if(side2 == side3){
            results_triangle_type.innerText = 'Este es un triangulo equilátero';
            polygonEquilatero.classList.remove('hide')
            calculate(side1, side2);
        }else{
            results_triangle_type.innerText = 'Este es un triangulo isósceles';
            polygonIsosceles.classList.remove('hide')
            calculate(side2, side3);
        }
    }else if(side2 == side3){
        if(side1 > side2 && side1 > side3){
            results_triangle_type.innerText = 'Este es un triangulo isósceles';
            polygonIsosceles.classList.remove('hide')
            calculate(side2, side1);
        }else{
            results_triangle_type.innerText = 'Este es un triangulo isósceles';
            polygonIsosceles.classList.remove('hide')
            calculate(side1, side3);
        }
    }else{
        results_triangle_type.innerText = 'Este es un triangulo escaleno';
        polygonEscaleno.classList.remove('hide')
        escaleno();
    }
};

// side1 = 10;
// side2 = 10;
// side3 = 10;
// identifies();