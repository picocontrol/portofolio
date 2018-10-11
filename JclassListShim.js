var words = (function(){
    var words = [
            'JavaScript',
            'CSS3',
            'HTML5',
            'Wordpress',
            'CMS-systemen',
            'Webwinkels',
            'Portofolios',
            'PHP',
            'jQuery',
            'Bootstrap',
            'SQL queries',
            'MySQL',
            'Heroku',
            'VPS',
            'Git & GitHub',
            'Laravel',
            'Angular',
            'VueJS',
            'React',
            'OWASP top-10',
            'Scrum & Trello',
            'Photoshop',
        ],
        el = document.querySelector('.verb'),
        currentIndex,
        currentWord,
        prevWord,
        duration = 4000;

    var _getIndex = function(max, min){
        currentIndex = Math.floor(Math.random() * (max - min + 1)) + min;

        //Generates a random number between beginning and end of words array
        return currentIndex;
    };

    var _getWord = function(index){
        currentWord = words[index];

        return currentWord;
    };

    var _clear = function() {

        setTimeout(function(){
            el.className = 'verb';
        }, duration/4);
    };

    var _toggleWord = function(duration){
        setInterval(function(){
            //Stores value of previous word
            prevWord = currentWord;

            //Generate new current word
            currentWord = words[_getIndex(words.length-1, 0)];

            //Generate new word if prev matches current
            if(prevWord === currentWord){

                currentWord = words[_getIndex(words.length-1, 0)];
            }

            //Swap new value
            el.innerHTML = currentWord;

            //Clear class styles
            _clear();

            //Fade in word
            el.classList.add(
                'js-block',
                'js-fade-in-verb'
            );

        }, duration);
    };

    var _init = function(){
        _toggleWord(duration);
    };

    //Public API
    return {
        init : function(){
            _init();
        }
    };
})();

words.init();/**
 * Created by Eefke Arends on 9-10-2018.
 */
