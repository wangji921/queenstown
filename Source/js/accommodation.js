function showAll() {
  $("div[class*=type]").fadeIn();
}

function hideAll() {
  $("div[class*='type']").fadeOut();
}

function accoSelect (category) {
  switch (category) {
    case 1:
      hideAll();
      $("div[class*='type1']").fadeIn();
      break;
    case 2:
      hideAll();
      $("div[class*='type2']").fadeIn();
      break;
    case 3:
      hideAll();
      $("div[class*='type3']").fadeIn();
      break;
    case 4:
      hideAll();
      $("div[class*='type4']").fadeIn();
      break;
    case 5:
      hideAll();
      $("div[class*='type5']").fadeIn();
      break;
  }
}