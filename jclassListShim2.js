var words = (function(){
    var words = [
            'houdt van zelfgemaakte hamburger(menus)',
            'een video-editor en cameraman kan verzorgen',
            'gespecialiseerd is in SEO',
            'zich onderscheidt met origineel en overzichtelijk design',
            'gespecialiseerd is in conceptontwikkeling',
            'een bachelor in Business Administration heeft',
            'de honors-minor Da Vinci gevolgt heeft',
            'maatwerk kan leveren als geen ander',
            'zich altijd met passie en plezier inzet voor zijn werk',
            'kritiek verwelkomt en kritisch meedenkt',
            'zich altijd probeert te verbeteren',
            'houdt van minimalistisch design',
            'geen seconde van uw tijd verspilt',
            'samenwerking hoog in het vaandel heeft',
            'sinds zijn 14e ervaring heeft met websites maken',
        ],
        el = document.querySelector('.verb2'),
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
            el.className = 'verb2';
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
                'js-fade-in-verb2'
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
/**
 * Created by Eefke Arends on 9-10-2018.
 */
