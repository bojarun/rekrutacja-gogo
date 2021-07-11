const slider = {
    init: () => {
        const sliders = document.querySelectorAll('.slider');

        sliders.forEach(el => {
            const slider = el;
            const toWrap = slider.querySelector('.wp-block-group__inner-container');
            const wrapper = document.createElement('div');

            // Prepare slider structure
            toWrap.parentNode.insertBefore(wrapper, toWrap);
            wrapper.appendChild(toWrap);
            toWrap.classList.add('slider__inner');
            wrapper.classList.add('slider__slides');

            const inner  = slider.querySelector('.slider__inner');
            const items  = slider.querySelectorAll('.slider__item');
            const total  = items.length;
            let visible = 3;

            // Autoplay handler
            const animate = () => {
                const next = slider.querySelector('.slider__button--next');
                if (next) next.click();
            }
            let autoplay = setInterval(animate, 5000);

            // Set visible
            const setVisible = () => {
                if (window.innerWidth >= 1200){
                    visible = 3;
                } else if (window.innerWidth < 1200 && window.innerWidth >= 768){
                    visible = 2;
                } else {
                    visible = 1;
                }
            }

            // Clear Controls
            const clearControls = (slider) => {
                const prev = slider.querySelector('.slider__button--prev');
                const next = slider.querySelector('.slider__button--next');
                const indicators = slider.querySelector('.slider__indicators');

                if (prev) prev.remove();
                if (next) next.remove();
                if (indicators) indicators.remove();
            }

            // Create Controls
            const createControls = () => {
                clearControls(slider);

                if (total > visible){
                    let counter = 0;
                    let indicator;

                    const createButtons = () => {
                        const prev = document.createElement('button');
                        prev.classList.add('slider__button', 'slider__button--prev');
                        slider.appendChild(prev);
                        prev.addEventListener('click', event => {
                            event.preventDefault();
                            counter > 0 ? counter-- : counter = total - visible;
                            setSequence(counter);
                        });

                        const next = document.createElement('button');
                        next.classList.add('slider__button', 'slider__button--next');
                        slider.appendChild(next);
                        next.addEventListener('click', event => {
                            event.preventDefault();
                            counter < (total - visible) ? counter++ : counter = 0;
                            setSequence(counter);
                        });
                    }
                    const createIndicators = () => {
                        const indicators = document.createElement('ol');
                        indicators.classList.add('slider__indicators');
                        slider.appendChild(indicators);

                        for (let i = 0; i <total - (visible - 1); i++){
                            indicators.innerHTML += '<li></li>';
                            indicator =  slider.querySelectorAll('.slider__indicators li');

                            indicator.forEach(el => {
                                el.addEventListener('click', event => {
                                    const item = event.target;
                                    const parent = item.parentNode;
                                    counter = Array.prototype.indexOf.call(parent.children, event.target);
                                    setSequence(counter);
                                });
                            });
                        }
                    }
                    const setSequence = (counter) => {
                        let width  = items[0].clientWidth;
                        inner.style.transform = 'translateX(-' + counter*width + 'px)';
                        setActive();

                        clearInterval(autoplay);
                        autoplay = setInterval(animate, 5000);
                    }
                    const setActive = () => {
                        indicator.forEach(el => {
                            el.classList.remove('active');
                        });
                        indicator[counter].classList.add('active');
                    }

                    createButtons();
                    createIndicators();
                    setSequence(counter);
                }
            }

            // Resize handler for RWD
            window.addEventListener('resize', function() {
                setVisible();
                createControls();
            }, true);

            // Swipe handlers for mobile
            let xStart = null;
            const checkTouch = (event) => {
                return event.touches || event.originalEvent.touches;
            }
            const touchStart = (event) => {
                const firstTouch = checkTouch(event)[0];
                xStart = firstTouch.clientX;
            }
            const touchMove = (event) => {
                if ( ! xStart ) {
                    return;
                }

                const xEnd = event.touches[0].clientX;
                const xDiff = xStart - xEnd;
                const parent = event.target.closest('.slider');
                const prev = parent.querySelector('.slider__button--prev');
                const next = parent.querySelector('.slider__button--next');

                xDiff > 0 ? next.click() : prev.click();

                xStart = null;
            }

            slider.addEventListener('touchstart', touchStart, false);
            slider.addEventListener('touchmove', touchMove, false);

            setVisible();
            createControls();
        });
    }
}

window.addEventListener('load', function () {
    slider.init();
});