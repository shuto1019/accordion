const accordionBtns = document.querySelectorAll('.accordionBtn');

const removeActive = () => {
  const activeContents = document.querySelectorAll('.active');
  activeContents.forEach(activeContent => {
    activeContent.style.height = "0px";
    activeContent.classList.remove('active');
  });
};

const addActive = (ul) => {
  ul.classList.add('active');
  ul.style.height = ul.scrollHeight + 'px'; 
};

accordionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const accordionContent = btn.parentElement;
    const ul               = accordionContent.querySelector('ul');
    if(ul.classList.contains('active')) {
      removeActive();
    }else {
      removeActive();
      addActive(ul);ß
    }
    
  });
});
