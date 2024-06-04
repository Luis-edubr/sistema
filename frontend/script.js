const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('toggle-button');
const links = document.querySelectorAll('.sidebar-link');

toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('expanded');
});

links.forEach(link => {
  link.addEventListener('click', () => {
    // Remove a classe 'active' de todos os links
    links.forEach(link => {
      link.classList.remove('active');
    });
    // Adiciona a classe 'active' ao link clicado
    link.classList.add('active');
  });
});
const counter = document.getElementById('counter');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');

let count = 1;

increaseButton.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});

decreaseButton.addEventListener('click', () => {
  if (count > 1) {
    count--;
    counter.textContent = count;
  }
});
let productValue = {};
const receiveData = () => {
  const codigoInput = document.querySelector('#codigoInput');
  const codigoValue = codigoInput.value.trim();
  if (codigoValue !== "") {
    productValue["codigoInput"] = codigoValue;
  }
  const counterNow = counter.textContent;
  if (counterNow != 0){
    productValue["numOfProducts"] = counterNow;
  }
  
  return productValue;
}


