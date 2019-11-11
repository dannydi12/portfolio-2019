function handleFollowClick() {
    $('.js-follow').click(function (event) {
        if ($(this).text() == 'Following') {
            $(this).text('Follow')
            $(this).removeClass('followed');
        }
        else {
            $(this).text('Following');
            $(this).addClass('followed');
        }
    });
}

function main() {
    handleFollowClick();
}

$(main);