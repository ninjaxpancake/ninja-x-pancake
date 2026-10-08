/* ==================================================
   NINJA X PANCAKE
   MAIN JAVASCRIPT
================================================== */


/* ==================================================
   THEME TOGGLE
================================================== */

const themeToggle =
    document.getElementById("theme-toggle");

const heroArt =
    document.getElementById("hero-art");


/* ==================================================
   CHANGE HERO IMAGE
================================================== */

function updateHeroArtwork() {

    /*
        Only try to change the hero artwork
        if this page actually has hero artwork.
    */

    if (!heroArt) {
        return;
    }


    if (
        document.body.classList.contains("light")
    ) {

        heroArt.src =
            "images/hero-art-light.webp";

    } else {

        heroArt.src =
            "images/hero-art-dark.webp";

    }

}


/* ==================================================
   LOAD SAVED THEME
================================================== */

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add("light");

}


updateHeroArtwork();


/* ==================================================
   TOGGLE THEME
================================================== */

if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        function() {

            document.body.classList.toggle(
                "light"
            );


            const currentTheme =
                document.body.classList.contains(
                    "light"
                )
                    ? "light"
                    : "dark";


            localStorage.setItem(
                "theme",
                currentTheme
            );


            updateHeroArtwork();

        }
    );

}


/* ==================================================
   WORK SECTION SCROLL HIGHLIGHT
================================================== */

const workSections =
    document.querySelectorAll(".work-section");

const workLinks =
    document.querySelectorAll(
        '.nav-dropdown-menu a[href*="#"]'
    );


const sectionObserver =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    const currentId =
                        entry.target.id;


                    workLinks.forEach(function(link) {

                        link.classList.remove(
                            "active-section"
                        );

                    });


                    const activeLink =
                        document.querySelector(
                            '.nav-dropdown-menu a[href="#' +
                            currentId +
                            '"], ' +
                            '.nav-dropdown-menu a[href="work.html#' +
                            currentId +
                            '"]'
                        );


                    if (activeLink) {

                        activeLink.classList.add(
                            "active-section"
                        );

                    }

                }

            });

        },

        {
            rootMargin:
                "-25% 0px -60% 0px",

            threshold:
                0
        }

    );


workSections.forEach(function(section) {

    sectionObserver.observe(section);

});