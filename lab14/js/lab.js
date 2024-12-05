// Comment block here
// Author: Dani Dayao
// Date: Dec 2, 2024
// Initialize comic number
var comicNum = 1;

// Function to get and display comic data
function getAndPutData(comicNum) {
    $.ajax({
        url: `https://xkcd.com/614/info.0.json`,
        dataType: "json",
        success: function(data) {
            // Update webpage with comic image and title
            $('#comic-title').text(data.title);
            $('#comic-image').attr('src', data.img);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
        }
    });
}

// Initial call to display the first comic
getAndPutData(comicNum);

// Event listener for next button
$('#next-button').click(function() {
    comicNum++;
    getAndPutData(comicNum);
});

// Event listener for previous button
$('#prev-button').click(function() {
    comicNum--;
    if (comicNum < 1) {
        comicNum = 1; // Ensure comic number doesn't go below 1
    }
    getAndPutData(comicNum);
});