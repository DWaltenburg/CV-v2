const hideObserver = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        let dot = document.querySelectorAll('.scrollDot').item(entry.target.getAttribute('id').slice(1));
        let previndex = entry.target.getAttribute('id').slice(1)-1;
        let nextindex = parseInt(entry.target.getAttribute('id').slice(1))+1;

        previndex = previndex < 0 ? 0 : previndex;
        nextindex = nextindex > 5 ? 5 : nextindex;
        let predef = "#s"

        let linkstringup = predef.concat(previndex);
        let linkstringdown = predef.concat(nextindex);
        
        if (entry.isIntersecting){
            entry.target.classList.add('show');
            dot.classList.add('current');
            document.getElementById("uplink").setAttribute("href", linkstringup);
            document.getElementById("downlink").setAttribute("href", linkstringdown);
        }
        else{
            entry.target.classList.remove('show');
            dot.classList.remove('current');
        };
    });
}, {rootMargin: "-20%"});



const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => hideObserver.observe(el));