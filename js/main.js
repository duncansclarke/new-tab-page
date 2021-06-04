function getRandomImage() {
  var images = [];
  for (let i = 1; i <= 90; i++) {
    var filename = "img" + i.toString() + ".gif";
    images[i - 1] = filename;
  }
  var image = images[Math.floor(Math.random() * images.length)];
  return image;
}
function displayRandomImage() {
  var htmlImage = document.getElementById("randomImage");
  htmlImage.src = "images/flavour gifs/" + getRandomImage();
}
displayRandomImage();

/**
 * Interval which the clock will be updated (in milliseconds).
 */
const clockInterval = 100;

/**
 * Search engine query url
 */
const searchEngineUrl = "https://duckduckgo.com/?q=";

const tabKeyCode = 9;
const enterKeyCode = 13;
const escapeKeyCode = 27;
const searchBarElement = document.getElementById("search-bar");
const clockElement = document.getElementById("clock");
const formElement = document.getElementById("search-form");

function openURL(url, opt) {
  if (opt == 0) {
    // current window
    window.location = url;
  } else if (opt == 1) {
    // new window
    window.open(url);
  } else if (opt == 2) {
    // background window
    window.open(url);
    self.focus();
  }
}

document.onkeydown = function (e) {
  if (document.activeElement == document.body) {
    switch (e.keyCode) {
      case 67:
        if (e.shiftKey) {
          openURL("https://calendar.google.com", 1);
        } else {
          openURL("https://calendar.google.com", 0);
        }
        break;
      case 68:
        if (e.shiftKey) {
          openURL("https://drive.google.com/drive/u/0/my-drive", 1);
        } else {
          openURL("https://drive.google.com/drive/u/0/my-drive", 0);
        }
        break;
      case 89:
        if (e.shiftKey) {
          openURL("https://www.youtube.com/feed/subscriptions", 1);
        } else {
          openURL("https://www.youtube.com/feed/subscriptions", 0);
        }
        break;
      case 70:
        if (e.shiftKey) {
          openURL("https://www.facebook.com/", 1);
        } else {
          openURL("https://www.facebook.com/", 0);
        }
        break;
      case 82:
        if (e.shiftKey) {
          openURL("https://old.reddit.com/", 1);
        } else {
          openURL("https://old.reddit.com/", 0);
        }
        break;
      case 87:
        if (e.shiftKey) {
          openURL(
            "https://www.theweathernetwork.com/ca/weather/ontario/kingston",
            1
          );
        } else {
          openURL(
            "https://www.theweathernetwork.com/ca/weather/ontario/kingston",
            0
          );
        }
        break;
      case 71:
        if (e.shiftKey) {
          openURL("https://mail.google.com/mail/u/0/", 1);
        } else {
          openURL("https://mail.google.com/mail/u/0/", 0);
        }
        break;
      case 77:
        if (e.shiftKey) {
          openURL(
            "https://messages.google.com/web/conversations?redirected=true",
            1
          );
        } else {
          openURL(
            "https://messages.google.com/web/conversations?redirected=true",
            0
          );
        }
        break;
      case 84:
        if (e.shiftKey) {
          openURL("https://twitter.com/home", 1);
        } else {
          openURL("https://twitter.com/home", 0);
        }
        break;
      case 78:
        if (e.shiftKey) {
          openURL("https://keep.google.com/u/0/#home", 1);
        } else {
          openURL("https://keep.google.com/u/0/#home", 0);
        }
        break;
      case 76:
        if (e.shiftKey) {
          openURL(
            "https://docs.google.com/document/d/1mQnIyTvtNQUsUMXadRivzepg6ZXVs-UbPuK9wXtcajM/edit",
            1
          );
        } else {
          openURL(
            "https://docs.google.com/document/d/1mQnIyTvtNQUsUMXadRivzepg6ZXVs-UbPuK9wXtcajM/edit",
            0
          );
        }
        break;
    }
  }
};

/**
 * Return a string containing the formatted current date and time.
 */
function getDateTime() {
  const dateTime = new Date();
  let day = dateTime.getDate();
  let month = dateTime.getMonth() + 1;
  let hour = dateTime.getHours();
  let minutes = dateTime.getMinutes();
  let seconds = dateTime.getSeconds();

  if (hour < 0) {
    hour = 24 + hour;
  }

  let date =
    (day < 10 ? "0" + day : day) +
    "/" +
    (month < 10 ? "0" + month : month) +
    "/" +
    dateTime.getFullYear();
  let time =
    (hour < 10 ? "0" + hour : hour) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);

  return date + "\n" + time;
}

function setClock() {
  clockElement.innerText = getDateTime();
}

function search() {
  let value = searchBarElement.value;
  if (!value) {
    return;
  }

  if (value.startsWith("https://") || value.startsWith("http://")) {
    window.location = value;
  } else {
    window.location = searchEngineUrl + encodeURIComponent(value);
  }
}

setClock();

setInterval(() => {
  setClock();
}, clockInterval);

// searchBarElement.focus();
searchBarElement.value = "";

formElement.addEventListener("submit", (ev) => {
  ev.preventDefault();
  search();
});

// document.addEventListener("keypress", event => {
//   if (event.keyCode == escapeKeyCode) {
//     searchBarElement.blur();
//     searchBarElement.value = "";
//   } else if (event.keyCode != tabKeyCode && event.keyCode != enterKeyCode) {
//     searchBarElement.focus();
//   }
// });
