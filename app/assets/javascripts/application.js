// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs

//= require_tree .


var actual_count=100
if ($('#content').children().size() < actual_count){

    $(document).ready(function () {

        $(function(){

            $('#content').scrollPagination({

                'contentPage': 'sample/show_data', // the url you are fetching the results
                'contentData': {}, // these are the variables you can pass to the request, for example: children().size() to know which page you are
                'scrollTarget': $(window), // who gonna scroll? in this example, the full window
                'heightOffset': 1, // it gonna request when scroll is 10 pixels before the page ends

                'beforeLoad': function(){ // before load function, you can display a preloader div

                    $('#loading').fadeIn();
                },
                'afterLoad': function(elementsLoaded){ // after loading content, you can use this function to animate your new elements
                    $('#loading').fadeOut();
                    var i = 0;
                    $(elementsLoaded).fadeInWithDelay();
                    if ($('#content').children().size() > actual_count){ // if more than 100 results already loaded, then stop pagination (only for testing)
                        $('#nomoreresults').fadeIn();
                        $('#content').stopScrollPagination();
                    }

                }
            });


            $("img.lazy").lazyload({
                effect : "fadeIn"  ,
                event: "scrollstop"
            });

            // code for fade in element by element
            $.fn.fadeInWithDelay = function(){
                var delay = 0;
                return this.each(function(){
                    $(this).delay(delay).animate({opacity:1}, 200);
                    delay += 100;
                });
            };

        });

    });
}
else
{
    $("img.lazy").lazyload({
        effect : "fadeIn"  ,
        event: "scrollstop"
    });
    $('#content').stopScrollPagination();
//    alert("no more results to display")
}

