const accordionBtns = document.querySelectorAll('.accordionBtn');

const removeActive = () => {
  const activeContents = document.querySelectorAll('.active');
  activeContents.forEach(activeContent => {
    activeContent.classList.remove('active');
    activeContent.style.height = null;
  });
};

const addActive = (accordionContent, ul) => {
  accordionContent.classList.add('active');
  ul.classList.add('active');
  ul.style.height = ul.scrollHeight + 'px'; 
};

accordionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const accordionContent = btn.parentElement;
    const ul = accordionContent.querySelector('ul');
    const isAlreadyActive = ul.classList.contains('active');

    if(isAlreadyActive){
        removeActive();
    }
    if (!isAlreadyActive) {
      addActive(accordionContent, u);
    }
  });
});
