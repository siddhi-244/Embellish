let progress = document.getElementById('progressbar');
        window.onscroll = function () {
            let totalHeight = document.body.scrollHeight + window.innerHeight;
            let progressHeight = (window.pageYOffset / totalHeight) * 20.1;
            progress.style.display = 'revert';
            progress.style.height = progressHeight + "%";
            let flowBar1 = document.getElementById('fe-bar');
            let flowBar2 = document.getElementById('be-bar');
            let flowBar3 = document.getElementById('cp-bar');
            let flowBar4 = document.getElementById('uiux-bar');
            if (progressHeight > 3) {

                flowBar1.style.animationName = 'animateskillbar11';
                flowBar2.style.animationName = 'animateskillbar22';
                flowBar3.style.animationName = 'animateskillbar33';
                flowBar4.style.animationName = 'animateskillbar44';
            }
            else {
                flowBar1.style.animationName = 'animateskillbar1';
                flowBar2.style.animationName = 'animateskillbar2';
                flowBar3.style.animationName = 'animateskillbar3';
                flowBar4.style.animationName = 'animateskillbar4';
            }

        }