// Переменные (valuable)

var clcktext = document.getElementById('clck-text');
var pretest = document.getElementById('pretestid');
var mainpage = document.getElementById('main-pageid');
var pretimer = document.getElementById('pretimerid');
var testpage = document.getElementById('testid');
var clicktimer = document.getElementById('click-timerid');
var countclk = document.getElementById('countclcks');
var clkpad = document.getElementById('clk-pad');
var reloadbtn = document.getElementById('reload-btn');

var presec = 4;
var count = 0;

var seconds1 = 10;
var seconds2 = 30;
var seconds3 = 60;





// Функции (Fucntions)

function reloadfunc() {
    location.reload();
}

// 10 СЕКУНД (10 SECONDS)


function pretimes() {
    presec--;
    pretimer.innerHTML = presec;

    if(presec == 0) {
        pretest.style.display = 'none';
        var interval1 = setInterval(tensectimer, 1000);

        function tensectimer() {
            seconds1--;
            clicktimer.innerHTML = seconds1 + ' seconds';
        
            if(seconds1 == 0) {
                clearInterval(interval1);
                var res = count / 10;
                countclk.style.display = 'none';
                clkpad.style.display = 'none';
                clicktimer.style.background = '#980000';
                reloadbtn.style.display = 'block';
        
                clicktimer.innerHTML = res.toFixed(1) + ' clicks per second';
            }
        }

        tensectimer();
    }
}

function clickcount(el) {
    count++;
    countclk.innerHTML = count + ' Clicks';
}

function tensecfunc() {
    
    clcktext.style.display = 'none';
    pretest.style.display = 'flex';
    testpage.style.display = 'flex';
    mainpage.style.display = 'none';

    clicktimer.innerHTML = seconds1 + ' seconds';

    var interval = setInterval(pretimes, 1000);

    pretimes();
        
}



// 30 СЕКУНД (30 SECONDS)

function pretimes1() {
    presec--;
    pretimer.innerHTML = presec;

    if(presec == 0) {
        pretest.style.display = 'none';
        var interval1 = setInterval(tensectimer, 1000);

        function tensectimer() {
            seconds2--;
            clicktimer.innerHTML = seconds2 + ' seconds';
        
            if(seconds2 == 0) {
                clearInterval(interval1);
                var res = count / 30;
                countclk.style.display = 'none';
                clkpad.style.display = 'none';
                clicktimer.style.background = '#980000';
                reloadbtn.style.display = 'block';
        
                clicktimer.innerHTML = res.toFixed(1) + ' clicks per second';
            }
        }

        tensectimer();
    }
}

function clickcount(el) {
    count++;
    countclk.innerHTML = count + ' Clicks';
}

function thirtysecfunc() {
    
    clcktext.style.display = 'none';
    pretest.style.display = 'flex';
    testpage.style.display = 'flex';
    mainpage.style.display = 'none';

    clicktimer.innerHTML = seconds2 + ' seconds';

    var interval = setInterval(pretimes1, 1000);

    pretimes1();
        
}



// 60 СЕКУНД (60 SECONDS)

function pretimes2() {
    presec--;
    pretimer.innerHTML = presec;

    if(presec == 0) {
        pretest.style.display = 'none';
        var interval1 = setInterval(tensectimer, 1000);

        function tensectimer() {
            seconds3--;
            clicktimer.innerHTML = seconds3 + ' seconds';
        
            if(seconds3 == 0) {
                clearInterval(interval1);
                var res = count / 60;
                countclk.style.display = 'none';
                clkpad.style.display = 'none';
                clicktimer.style.background = '#980000';
                reloadbtn.style.display = 'block';
        
                clicktimer.innerHTML = res.toFixed(1) + ' clicks per second';
            }
        }

        tensectimer();
    }
}

function clickcount(el) {
    count++;
    countclk.innerHTML = count + ' Clicks';
}

function oneminfunc() {
    
    clcktext.style.display = 'none';
    pretest.style.display = 'flex';
    testpage.style.display = 'flex';
    mainpage.style.display = 'none';

    clicktimer.innerHTML = seconds3 + ' seconds';

    var interval = setInterval(pretimes2, 1000);

    pretimes2();
        
}